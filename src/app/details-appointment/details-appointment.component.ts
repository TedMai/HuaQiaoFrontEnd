import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContainerService} from '../service/container.service';

@Component({
    selector: 'app-details-appointment',
    templateUrl: './details-appointment.component.html',
    styleUrls: ['./details-appointment.component.css']
})
export class DetailsAppointmentComponent implements OnInit {

    constructor(private router: Router,
                private container: ContainerService) {
    }

    ngOnInit() {
        console.log(this.container.get());
    }

    backToOrigin(): void {
        this.router.navigate(['/']).then();
    }
}
