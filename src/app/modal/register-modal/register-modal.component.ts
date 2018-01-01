import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {User} from '../../service/user';

@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
    @Input() title: string;
    @Input() message: string;
    @Output() toRegister = new EventEmitter<User>();
    newUser: User;
    hasSent: boolean;
    btnText: string;
    countDownSeconds: number;

    private timerId: number;

    constructor(public activeModal: NgbActiveModal) {
        this.newUser = new User(0, '', '', '', '');
        this.hasSent = false;
        this.btnText = '发送';
        this.timerId = 0;
        this.countDownSeconds = 60;
    }

    confirm(): void {
        this.toRegister.emit(this.newUser);
    }

    sendCode(): void {
        this.hasSent = true;
        this.countDown();
    }

    private clearTimer() {
        clearInterval(this.timerId);
    }

    private countDown() {
        this.clearTimer();
        this.timerId = window.setInterval(() => {
            console.log(this.countDownSeconds--);
            if (this.countDownSeconds <= 0) {
                this.clearTimer();
                this.countDownSeconds = 60;
                this.hasSent = false;
                this.btnText = '重新发送';
            } else {
                this.btnText = `${ this.countDownSeconds } 秒`;
            }
        }, 1000);
    }
}
