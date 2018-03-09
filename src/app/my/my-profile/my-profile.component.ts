import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';

@Component({
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    logout() {
        this.loginService.logout();
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
