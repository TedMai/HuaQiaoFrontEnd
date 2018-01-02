import {Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';
import {Schedule} from '../../service/schedule';
import {Patient} from '../../service/patient';

import {PatientSelectModalComponent} from '../../modal/patient-select-modal/patient-select-modal.component';
import {Subscription} from 'rxjs/Subscription';

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
    patientName: string;
    subscription: Subscription;

    constructor(private router: Router,
                private hospitalService: HospitalService,
                private container: ContainerService,
                private modalService: NgbModal) {
        this.departmentName = '';
        this.doctorName = '';
        this.patientName = '';
    }

    ngOnInit() {
        this.departmentName = this.container.get().departmentName;
        this.doctorName = this.container.get().doctorName;
        this.schedule = this.container.get().schedule;
    }

    ngOnDestroy() {
        if (typeof this.subscription !== 'undefined') {
            this.subscription.unsubscribe();
        }
    }

    choosePatient(): void {
        this.subscription = this.hospitalService
            .queryRelativePatients('1')
            .subscribe(response => {
                const modalRef = this.modalService.open(PatientSelectModalComponent);
                modalRef.result.then((result) => {
                    this.patient = result;
                    this.patientName = result.name;
                }, (reason) => {
                    console.log(reason);
                });
                modalRef.componentInstance.title = '选择就诊人';
                modalRef.componentInstance.patients = JSON.parse(response.patients);
            });

    }

    onSubmitAppointment(): void {
        this.container.set({
            schedule: this.schedule,
            patient: this.patient,
            departmentName: this.departmentName,
            doctorName: this.doctorName
        });
        this.router.navigate(['/appointment/check']).then();
    }
}
