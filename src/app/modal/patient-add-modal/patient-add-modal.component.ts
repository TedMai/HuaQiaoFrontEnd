import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Patient} from '../../service/patient';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
    newPatient = new Patient(0, '', 0, '', '', '', '', '', 0);

    constructor(private activeModal: NgbActiveModal) {
    }

    addPatient(): void {
        this.submitNewPatient.emit(this.newPatient);
    }
}
