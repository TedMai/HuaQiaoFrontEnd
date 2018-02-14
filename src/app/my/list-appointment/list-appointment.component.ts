import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Record} from '../../service/record.service';

@Component({
    // selector: 'app-list-appointment',
    templateUrl: './list-appointment.component.html',
    styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {
    appointments: Record[];

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { relativeAppointmentsResolver: any }) => {
                this.appointments = Record.FormatAppointmentDetails(JSON.parse(data.relativeAppointmentsResolver.appointments));
            });

    }

    public toAppointmentDetails(rid: string) {
        // this.container.set({'rid': rid});
        this.router.navigate(['/details/appointment', {rid: rid}]).then();
    }
}
