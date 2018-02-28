import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HospitalService} from '../hospital.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RelativeDoctorsResolver implements Resolve<any> {
    constructor(private hospitalService: HospitalService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const departmentId = +route.paramMap.get('id');
        return this.hospitalService.queryRelativeDoctors(departmentId);
    }
}
