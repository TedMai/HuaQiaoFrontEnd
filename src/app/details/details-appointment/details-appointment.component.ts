import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Record} from '../../service/record.service';
import {ContainerService} from '../../service/container.service';
import {HospitalService} from '../../service/hosptial.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-details-appointment',
    templateUrl: './details-appointment.component.html',
    styleUrls: ['./details-appointment.component.css']
})
export class DetailsAppointmentComponent implements OnInit, OnDestroy {
    appointment = new Record('', '', '', '', '', '', '', 0, '', '', '');
    subscription: Subscription;

    constructor(private router: Router,
                private container: ContainerService,
                private hospitalService: HospitalService) {
    }

    ngOnInit() {
        this.subscription = this.hospitalService.querySpecificAppointment(this.container.get().rid)
            .subscribe(response => {
                this.appointment = Record.FormatAppointmentDetails(JSON.parse(response.appointment))[0];
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    backToOrigin(): void {
        this.router.navigate(['/']).then();
    }
}
