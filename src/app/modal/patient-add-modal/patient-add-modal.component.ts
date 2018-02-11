import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Patient} from '../../service/patient';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ContainerService} from '../../service/container.service';
import {ValidatorService} from '../../service/validator.service';

@Component({
    selector: 'app-patient-add-modal',
    templateUrl: './patient-add-modal.component.html',
    styleUrls: ['./patient-add-modal.component.css']
})
export class PatientAddModalComponent {
    // 对话框标题
    @Input() title: string;
    // 错误提示信息
    @Input() message: string;
    // 注册事件 - 通知父组件
    @Output() submitNewPatient = new EventEmitter<Patient>();
    // 对象 - 新账户
    newPatient: Patient;

    constructor(public activeModal: NgbActiveModal,
                private container: ContainerService) {
        this.newPatient = new Patient(0, '', 0, '', '', '', '', this.container.getUserID(), 0);
        // this.newPatient = new Patient(0, '', 0, '', '', '', '', 29, 0);
    }

    addPatient(): void {
        if (!ValidatorService.MobilePhoneValidator(this.newPatient.phone)) {
            this.message = '请输入正确的手机号码';
        }
        else if (!ValidatorService.IdentityValidator(this.newPatient.identity)) {
            this.message = '请输入有效的身份证号';
        }
        else {
            this.submitNewPatient.emit(this.newPatient);
        }
    }
}
