import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {HospitalService} from '../../service/hosptial.service';
import {Verification} from '../../service/verification';
import {ContainerService} from '../../service/container.service';

@Component({
    selector: 'app-verification-code-sample',
    templateUrl: './verification-code-sample.component.html',
    styleUrls: ['./verification-code-sample.component.css']
})
export class VerificationCodeSampleComponent implements OnInit, OnDestroy {
    @Input() hasSent = false;
    @Input() btnSendText = '发送';
    @Input() btnConfirmText = '下一步';
    @Input() phone = '';
    @Input() message = '';
    @Output() gotoNext = new EventEmitter<Verification>();

    public verificationCode = '';
    private requestId = '';
    private bizId = '';
    private timerId = 0;
    private countDownSeconds = 60;
    private sendMessageSubscription: Subscription;

    constructor(private container: ContainerService,
                private hospitalService: HospitalService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.clearTimer();
        if (typeof this.sendMessageSubscription !== 'undefined') {
            this.sendMessageSubscription.unsubscribe();
        }
    }

    update(value): void {
        this.phone = value;
    }

    sendCode(): void {
        if (this.check(this.phone)) {
            this.hasSent = true;
            this.sendMessageSubscription = this.hospitalService
                .sendVerificationCode(this.phone)
                .subscribe(result => {
                    if (result.Code === 'OK') {
                        this.countDown();
                        this.requestId = result.RequestId;
                        this.bizId = result.BizId;
                    }
                });
        } else {
            this.message = '请输入正确的手机号码';
        }
    }

    onConfirm(): void {
        // this.gotoNext.emit(new Verification(
        //     'BA0F7460-C210-4507-97C0-8588761275AA',
        //     '838701815317815630^0',
        //     '18120995333',
        //     '817684',
        //     29
        // ));
        this.gotoNext.emit(new Verification(
            this.requestId,
            this.bizId,
            this.phone,
            this.verificationCode,
            this.container.getUserID()
        ));
    }

    private clearTimer() {
        clearInterval(this.timerId);
    }

    private countDown() {
        this.clearTimer();
        this.timerId = window.setInterval(() => {
            this.countDownSeconds--;
            if (this.countDownSeconds <= 0) {
                this.clearTimer();
                this.countDownSeconds = 60;
                this.hasSent = false;
                this.btnSendText = '重新发送';
            } else {
                this.btnSendText = `${ this.countDownSeconds } 秒`;
            }
        }, 1000);
    }

    private check(phone: string): boolean {
        const reg = /^1[0-9]{10}$/;
        return reg.test(phone);
    }
}
