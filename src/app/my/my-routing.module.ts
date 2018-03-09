import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MyProfileComponent} from './my-profile/my-profile.component';
import {MyMobileComponent} from './my-mobile/my-mobile.component';
import {MyPatientsComponent} from './my-patients/my-patients.component';
import {ListAppointmentComponent} from './list-appointment/list-appointment.component';
import {AuthGuard} from '../service/auth-guard.service';
import {MyProfileResolver} from '../service/resolver/my-profile.service';
import {RelativePatientsResolver} from '../service/resolver/patient.service';
import {RelativeAppointmentsResolver} from '../service/resolver/appointment.service';

const __MY_ROUTES__: Routes = [
    {
        path: 'my',
        component: MyProfileComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'appointment',
                component: ListAppointmentComponent,
                resolve: {
                    relativeAppointmentsResolver: RelativeAppointmentsResolver
                }
            },
            {
                path: 'mobile',
                component: MyMobileComponent,
                resolve: {
                    myProfileResolver: MyProfileResolver
                }
            },
            {
                path: 'patients',
                component: MyPatientsComponent,
                resolve: {
                    relativePatientsResolver: RelativePatientsResolver
                }
            }
        ]
    }
];

/**
 * There is a small but critical difference.
 * In the AppRoutingModule, you used the static RouterModule.forRoot method to register the routes and application level service providers.
 * In a feature module you use the static forChild method.
 */
@NgModule({
    imports: [RouterModule.forChild(
        __MY_ROUTES__
    )],
    exports: [RouterModule],
    providers: [
        MyProfileResolver,
        RelativePatientsResolver,
        RelativeAppointmentsResolver
    ]
})
export class MyRoutingModule {
}