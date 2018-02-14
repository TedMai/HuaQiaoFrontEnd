import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HospitalService} from '../hosptial.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyProfileResolver implements Resolve<any> {
    constructor(private hospitalService: HospitalService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let uid = route.paramMap.get('uid');

        return this.hospitalService.querySpecificUser(uid);
    }
}