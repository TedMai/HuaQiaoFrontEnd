import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouterModule} from './router/router.module';
import {SearchDepartmentComponent} from './search-department/search-department.component';
import {SearchDoctorComponent} from './search-doctor/search-doctor.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {ListDoctorComponent} from './list-doctor/list-doctor.component';
import {ListDepartmentComponent} from './list-department/list-department.component';
import {DetailsDepartmentComponent} from './details-department/details-department.component';
import {DetailsDoctorComponent} from './details-doctor/details-doctor.component';
import {DetailsAppointmentComponent} from './details-appointment/details-appointment.component';
import {AppointmentInitComponent} from './appointment-init/appointment-init.component';
import {AppointmentCheckComponent} from './appointment-check/appointment-check.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchDepartmentComponent,
        SearchDoctorComponent,
        SearchResultComponent,
        ListDoctorComponent,
        ListDepartmentComponent,
        DetailsDepartmentComponent,
        DetailsDoctorComponent,
        DetailsAppointmentComponent,
        AppointmentInitComponent,
        AppointmentCheckComponent
    ],
    imports: [
        BrowserModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
