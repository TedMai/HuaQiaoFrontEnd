import {Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';
import {Schedule} from '../../service/hospital.structure';
import {Patient} from '../../service/hospital.structure';

import {PatientSelectModalComponent} from '../../modal/patient-select-modal/patient-select-modal.component';
import {Subscription} from 'rxjs/Subscription';
import {PatientAddModalComponent} from '../../modal/patient-add-modal/patient-add-modal.component';

@Component({
    selector: 'app-appointment-init',
    templateUrl: './appointment-init.component.html',
    styleUrls: ['./appointment-init.component.css']
})
export class AppointmentInitComponent implements OnInit, OnDestroy {
    schedule: Schedule;
    patient: Patient;
    departmentName: string;
    doctorName: string;
    patientName = '';
    message = '';
    choosePatientSubscription: Subscription;

    constructor(private router: Router,
                private hospitalService: HospitalService,
                private container: ContainerService,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        const isInit = typeof this.container.get() !== 'undefined';
        this.departmentName = isInit ? this.container.get().departmentName : '';
        this.doctorName = isInit ? this.container.get().doctorName : '';
        this.schedule = isInit ? this.container.get().schedule : new Schedule(0, 0, 0, 0, 0, 0, '', 0);
    }

    ngOnDestroy() {
        if (typeof this.choosePatientSubscription !== 'undefined') {
            this.choosePatientSubscription.unsubscribe();
        }
    }

    /**
     * 选择就诊人
     */
    choosePatient(): void {
        const uid = this.container.getUserID();
        if (typeof uid === 'undefined') {
            return;
        }
        this.choosePatientSubscription = this.hospitalService
            .queryRelativePatients(uid)
            .subscribe(response => {
                const choosePatientModalRef = this.modalService.open(PatientSelectModalComponent);
                choosePatientModalRef.componentInstance.title = '选择就诊人';
                choosePatientModalRef.componentInstance.patients = JSON.parse(response.patients);
                choosePatientModalRef.result.then(
                    /**
                     * close
                     * @param result
                     */
                    (result) => {
                        this.patient = result;
                        this.patientName = result.name;
                    },
                    /**
                     * dismiss
                     * @param reason
                     */
                    (reason) => {
                        console.log(reason);
                        switch (reason) {
                            case 'Add patient':
                                this.addPatient();
                                break;
                            case 'Cross click':
                                break;
                        }
                    });
            });
    }

    /**
     * 新增就诊人
     */
    addPatient(): void {
        const addPatientModalRef = this.modalService.open(PatientAddModalComponent);
        addPatientModalRef.componentInstance.title = '新增就诊人';
        addPatientModalRef.componentInstance.message = '';
        addPatientModalRef.componentInstance.submitNewPatient.subscribe(
            (response) => {
                this.patient = response;
                this.patientName = response.name;
                this.hospitalService.addNewPatient(response).subscribe(
                    (result) => {
                        console.log(result);
                        if (-400 === result.code) {
                            addPatientModalRef.componentInstance.message = '用户不存在，请重新登录！';
                        } else {
                            this.patient.pid = result.msg.insertId;
                            addPatientModalRef.componentInstance.activeModal.close('Add patient success.');
                        }
                    });
            });

        addPatientModalRef.result.then(
            /**
             * close
             * @param reason
             */
            (reason) => {
                console.log(reason);
            },
            /**
             * dismiss
             * @param reason
             */
            (reason) => {
                console.log(reason);
            });
    }

    onSubmitAppointment(): void {
        if (typeof this.patient === 'undefined' || this.patient.pid === 0) {
            this.message = '请选择就诊人';
        } else {
            this.container.set({
                schedule: this.schedule,
                patient: this.patient
                // departmentName: this.departmentName,
                // doctorName: this.doctorName
            });
            this.router.navigate(['/appointment/check']).then();
        }
    }
}
