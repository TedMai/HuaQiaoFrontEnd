import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {HospitalService} from './service/hosptial.service';
import {UrlService} from './service/url.service';
import {ContainerService} from './service/container.service';

import {AppComponent} from './app.component';
import {AppRouterModule} from './router/router.module';
import {SearchDepartmentComponent} from './search/search-department/search-department.component';
import {SearchDoctorComponent} from './search/search-doctor/search-doctor.component';
import {SearchResultComponent} from './search/search-result/search-result.component';
import {ListDoctorComponent} from './list/list-doctor/list-doctor.component';
import {ListDepartmentComponent} from './list/list-department/list-department.component';
import {DetailsDepartmentComponent} from './details/details-department/details-department.component';
import {DetailsDoctorComponent} from './details/details-doctor/details-doctor.component';
import {DetailsAppointmentComponent} from './details/details-appointment/details-appointment.component';
import {AppointmentInitComponent} from './appointment/appointment-init/appointment-init.component';
import {AppointmentCheckComponent} from './appointment/appointment-check/appointment-check.component';
import {DetailsHospitalComponent} from './details/details-hospital/details-hospital.component';
import {SearchInitComponent} from './search/search-init/search-init.component';
import {PatientSelectModalComponent} from './modal/patient-select-modal/patient-select-modal.component';
import {LoginModalComponent} from './modal/login-modal/login-modal.component';
import {RegisterModalComponent} from './modal/register-modal/register-modal.component';
import { VerificationCodeComponent } from './common/verification-code/verification-code.component';

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
        AppointmentCheckComponent,
        DetailsHospitalComponent,
        SearchInitComponent,
        PatientSelectModalComponent,
        LoginModalComponent,
        RegisterModalComponent,
        VerificationCodeComponent
    ],
    entryComponents: [
        PatientSelectModalComponent,
        LoginModalComponent,
        RegisterModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRouterModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [
        HospitalService,
        UrlService,
        ContainerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
