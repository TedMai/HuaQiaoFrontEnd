import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../service/user';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
    @Input() title: string;
    @Input() message: string;
    @Output() toLogin = new EventEmitter<User>();
    user: User;

    constructor(public activeModal: NgbActiveModal) {
        this.user = new User(0, '', '', '', '');
    }

    goRegister(): void {
        this.activeModal.dismiss('Register');
    }

    login(): void {
        this.toLogin.emit(this.user);
    }
}
