import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ContainerService} from '../../service/container.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {
    private uid: number;
    private parameterSubscription: Subscription;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private container: ContainerService) {
    }

    ngOnInit() {
        this.parameterSubscription = this.activatedRoute.params.subscribe(params => {
            this.uid = params['id'];
        });
    }

    ngOnDestroy() {
        this.parameterSubscription.unsubscribe();
    }

    logout() {
        this.container.setUserID(null);
        this.router.navigate(['/']).then();
    }

    toMyAppointments(){
        this.router.navigate(['/list/appointment']).then();
    }
}
