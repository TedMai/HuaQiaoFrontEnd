import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HospitalService} from '../hospital.service';
import {Observable} from 'rxjs/Observable';
import {ContainerService} from '../container.service';

@Injectable()
export class AppointmentDetailResolver implements Resolve<any> {
    constructor(private hospitalService: HospitalService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let rid = route.paramMap.get('rid');
        return this.hospitalService.querySpecificAppointment(rid);
    }
}

@Injectable()
export class RelativeAppointmentsResolver implements Resolve<any> {
    constructor(private containerService: ContainerService,
                private hospitalService: HospitalService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // let uid = +route.paramMap.get('uid');
        let uid = this.containerService.getUserID();
        return this.hospitalService.queryRelativeAppointments(uid);
    }
}
