import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContainerService} from '../../service/container.service';

@Component({
    // selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {

    constructor(private router: Router,
                private container: ContainerService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    logout() {
        this.container.setUserID(null);
        this.router.navigate(['/']).then();
    }

    toMyAppointments() {
        this.router.navigate(['/my/appointment']).then();
    }

    toMyMobile() {
        this.router.navigate(['/my/mobile']).then();
    }

    toMyPatients() {
        this.router.navigate(['/my/patients']).then();
    }
}
