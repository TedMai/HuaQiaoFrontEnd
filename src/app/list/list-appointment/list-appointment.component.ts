import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from '../../service/hosptial.service';
import {Record} from '../../service/record';
import {ContainerService} from '../../service/container.service';

@Component({
    selector: 'app-list-appointment',
    templateUrl: './list-appointment.component.html',
    styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit, OnDestroy {
    appointments: Record[];
    subscription: Subscription;

    constructor(private router: Router,
                private container: ContainerService,
                private hospitalService: HospitalService) {
        const uid = this.container.getUserID();
        this.subscription = this.hospitalService.queryRelativeAppointments(uid)
            .subscribe(response => {
                this.appointments = Record.FormatAppointmentDetails(JSON.parse(response.appointments));
            });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public toAppointmentDetails(rid: string) {
        this.container.set({'rid': rid});
        this.router.navigate(['/details/appointment']).then();
    }
}
