import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';
import {Observable} from 'rxjs/Observable';
import {AppointmentCheckComponent} from '../appointment/appointment-check/appointment-check.component';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<AppointmentCheckComponent>, CanLoad {
    constructor(private  loginService: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canLoad(route: Route): boolean {
        let url: string = `/${route.path}`;
        return this.checkLogin(url);
    }

    canDeactivate(component: AppointmentCheckComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Get the current URL
        console.log(state.url);
        return component.canDeactivate();
    }

    checkLogin(url: string): boolean {
        if (this.loginService.isLoggedIn) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.loginService.redirectUrl = url;

        // Navigate to the login page with extras
        // this.router.navigate(['/login']);
        this.loginService.openLoginModal();
        return false;
    }
}
