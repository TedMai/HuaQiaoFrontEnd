import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {HospitalService} from '../service/hosptial.service';
import {ContainerService} from '../service/container.service';
import {Schedule} from '../service/schedule';

import {NgbdModalContent} from '../ngbd-modal-content/ngbd-modal-content.component';


@Component({
    selector: 'app-appointment-init',
    templateUrl: './appointment-init.component.html',
    styleUrls: ['./appointment-init.component.css']
})
export class AppointmentInitComponent implements OnInit {
    schedule: Schedule;
    departmentName: string;
    doctorName: string;

    constructor(private router: Router,
                private hospitalService: HospitalService,
                private container: ContainerService,
                private modalService: NgbModal) {
        this.departmentName = '';
        this.doctorName = '';
    }

    ngOnInit() {
        this.departmentName = this.container.get().departmentName;
        this.doctorName = this.container.get().doctorName;
        this.schedule = this.container.get().schedule;
    }

    choosePatient(): void {
        this.hospitalService
            .queryRelativePatients('osCkO0a1sPv2YDNBIAw7wFXlTib4')
            .subscribe(response => {
                const modalRef = this.modalService.open(NgbdModalContent);
                modalRef.result.then((result) => {
                    console.info(result);
                }, (reason) => {
                    console.info(reason);
                });
                modalRef.componentInstance.title = '选择就诊人';
                modalRef.componentInstance.patients = JSON.parse(response.patients);
            });

    }

    onSubmitAppointment(): void {
        this.router.navigate(['/appointment/check']).then();
    }
}
