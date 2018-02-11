import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MyProfileComponent} from './my-profile/my-profile.component';
import {MyMobileComponent} from './my-mobile/my-mobile.component';
import {MyPatientsComponent} from './my-patients/my-patients.component';
import {ListAppointmentComponent} from './list-appointment/list-appointment.component';

const __MY_ROUTES__: Routes = [
    {
        path: 'my',
        component: MyProfileComponent,
        children: [
            {
                path: 'appointment',
                component: ListAppointmentComponent
            },
            {
                path: 'mobile',
                component: MyMobileComponent
            },
            {
                path: 'patients',
                component: MyPatientsComponent
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
    declarations: [],
    exports: [RouterModule]
})
export class MyRoutingModule {
}