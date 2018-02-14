import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {ContainerService} from '../../service/container.service';

@Component({
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
    private userId: number;

    constructor(private router: Router,
                private container: ContainerService,
                private loginService: LoginService) {
        this.userId = this.container.getUserID();
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['/']).then();
    }

    toMyAppointments() {
        this.router.navigate(['/my/appointment', this.userId]).then();
    }

    toMyMobile() {
        this.router.navigate(['/my/mobile', this.userId]).then();
    }

    toMyPatients() {
        this.router.navigate(['/my/patients', this.userId]).then();
    }
}
