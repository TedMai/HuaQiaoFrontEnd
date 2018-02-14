import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HospitalService} from '../hosptial.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RelativeSchedulesResolver implements Resolve<any> {
    constructor(private hospitalService: HospitalService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const doctorId = +route.paramMap.get('id');
        return this.hospitalService.queryRelativeSchedules(doctorId);
    }
}
