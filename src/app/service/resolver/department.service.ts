import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HospitalService} from '../hospital.service';
import {Observable} from 'rxjs/Observable';
import {Department} from '../hospital.structure';

@Injectable()
export class DepartmentListResolver implements Resolve<Department[]> {
    constructor(private hospitalService: HospitalService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Department[]> {
        return this.hospitalService.fetchDepartmentList();
    }
}