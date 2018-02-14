import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Record} from '../../service/record.service';

@Component({
    selector: 'app-details-appointment',
    templateUrl: './details-appointment.component.html',
    styleUrls: ['./details-appointment.component.css']
})
export class DetailsAppointmentComponent implements OnInit {
    appointment: Record;

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { appointmentDetailResolver: any }) => {
                this.appointment = Record.FormatAppointmentDetails(JSON.parse(data.appointmentDetailResolver.appointment))[0];
            });
    }

    backToOrigin(): void {
        this.router.navigate(['/']).then();
    }
}
