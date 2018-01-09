import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {User} from '../../service/user';
import {Message} from '../../service/message';
import {ValidatorService} from '../../service/validator.service';

@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
    // 对话框标题
    @Input() title: string;
    // 错误提示信息
    @Input() message: string;
    // 注册事件 - 通知父组件
    @Output() toRegister = new EventEmitter<User>();
    // 对象 - 新账户
    newUser: User;

    constructor(private activeModal: NgbActiveModal) {
        // 初始化
        this.newUser = new User(0, '', '', '', '', '', '');
    }

    /**
     * 发送验证码
     *      --  下发失败，弹出提示
     * @param response
     */
    sentVerificationCodeCompleted(response: Message): void {
        if (response.Code === 'OK') {
            // 成功发送验证码
            // 记录   requestId, bizId
            this.newUser.requestId = response.RequestId;
            this.newUser.bizId = response.BizId;
        } else {
            this.message = response.Message;
        }
    }

    /**
     * 启动注册流程
     *      --  校验表单数据
     *      --  通知父组件
     */
    startRegister(): void {
        if (!ValidatorService.MobilePhoneValidator(this.newUser.phone)) {
            this.message = '请输入正确的手机号码';
        }
        else if (!ValidatorService.ConsistenceValidator(this.newUser.password, this.newUser.passwordConfirm)) {
            this.message = '两次输入的密码不一致';
        } else {
            this.toRegister.emit(this.newUser);
        }
    }
}
