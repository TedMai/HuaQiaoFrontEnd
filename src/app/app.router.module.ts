import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchDoctorComponent} from './search/search-doctor/search-doctor.component';
import {SearchResultComponent} from './search/search-result/search-result.component';

import {ListDepartmentComponent} from './list/list-department/list-department.component';
import {ListDoctorComponent} from './list/list-doctor/list-doctor.component';

import {DetailsHospitalComponent} from './details/details-hospital/details-hospital.component';
import {DetailsDepartmentComponent} from './details/details-department/details-department.component';
import {DetailsDoctorComponent} from './details/details-doctor/details-doctor.component';
import {DetailsAppointmentComponent} from './details/details-appointment/details-appointment.component';

import {AppointmentInitComponent} from './appointment/appointment-init/appointment-init.component';
import {AppointmentCheckComponent} from './appointment/appointment-check/appointment-check.component';
// import {PageNotFoundComponent} from './widget/page-not-found/page-not-found.component';

import {AuthGuard} from './service/auth-guard.service';
import {HospitalDetailResolver} from './service/resolver/hospital-detail.service';
import {AppointmentDetailResolver} from './service/resolver/appointment.service';
import {DepartmentListResolver} from './service/resolver/department.service';
import {RelativeDoctorsResolver} from './service/resolver/doctor.service';
import {RelativeSchedulesResolver} from './service/resolver/schedule.service';

const __ROUTES__: Routes = [
    {
        path: 'search',
        children: [
            {
                path: 'doctor',
                component: SearchDoctorComponent
            },
            {
                path: 'result',
                component: SearchResultComponent,
                resolve: {
                    relativeDoctorsResolver: RelativeDoctorsResolver
                }
            }
        ]
    },
    {
        path: 'list',
        children: [
            {
                path: 'department',
                component: ListDepartmentComponent,
                resolve: {
                    departmentListResolver: DepartmentListResolver
                }
            },
            {
                path: 'doctor/:sortByDate',
                component: ListDoctorComponent
            }
        ]
    },
    {
        path: 'details',
        children: [
            {
                path: 'hospital',
                component: DetailsHospitalComponent,
                resolve: {
                    hospitalDetailResolver: HospitalDetailResolver
                }
            },
            {
                path: 'department',
                component: DetailsDepartmentComponent
            },
            {
                path: 'doctor',
                component: DetailsDoctorComponent,
                resolve: {
                    relativeSchedulesResolver: RelativeSchedulesResolver
                }
            },
            {
                path: 'appointment',
                component: DetailsAppointmentComponent,
                resolve: {
                    appointmentDetailResolver: AppointmentDetailResolver
                }
            }
        ]
    },
    {
        path: 'appointment',
        children: [
            {
                path: 'init/:id',
                component: AppointmentInitComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'check',
                component: AppointmentCheckComponent,
                canDeactivate: [AuthGuard]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/details/hospital',
        pathMatch: 'full'
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

@NgModule({
    // The forRoot() method is called because a configured router is provided at the app's root.
    // The forRoot() method supplies the Router service providers and directives needed for routing.
    // And performs the initial navigation based on the current browser URL.
    imports: [RouterModule.forRoot(
        __ROUTES__,
        {enableTracing: true}   // <-- debugging purposes only
    )],
    exports: [RouterModule],
    providers: [
        HospitalDetailResolver,
        AppointmentDetailResolver,
        DepartmentListResolver,
        RelativeDoctorsResolver,
        RelativeSchedulesResolver
    ]
})
export class AppRouterModule {
}
