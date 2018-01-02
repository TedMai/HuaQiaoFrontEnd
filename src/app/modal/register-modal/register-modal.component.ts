import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {User} from '../../service/user';
import {Message} from '../../service/message';

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

    constructor(public activeModal: NgbActiveModal) {
        this.newUser = new User(0, '', '', '', '');
    }

    onSentCompleted(response: Message): void {
        if (response.Code === 'OK') {

        } else {
            this.message = response.Message;
        }
    }

    confirm(): void {
        this.toRegister.emit(this.newUser);
    }
}
