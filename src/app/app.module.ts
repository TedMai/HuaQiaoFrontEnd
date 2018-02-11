import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {MyModule} from './my/my.module';

import {HospitalService} from './service/hosptial.service';
import {UrlService} from './service/url.service';
import {ContainerService} from './service/container.service';
import {LoginService} from './service/login.service';
import {ValidatorService} from './service/validator.service';

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
import {PatientSelectModalComponent} from './modal/patient-select-modal/patient-select-modal.component';
import {LoginModalComponent} from './modal/login-modal/login-modal.component';
import {RegisterModalComponent} from './modal/register-modal/register-modal.component';
import {ConfirmModalComponent} from './modal/confirm-modal/confirm-modal.component';
import {VerificationCodeComponent} from './common/verification-code/verification-code.component';
import {VerificationCodeSampleComponent} from './common/verification-code-sample/verification-code-sample.component';
import {ConsistentCiphersValidatorDirective} from './common/consistent-ciphers.directive';
import {PatientAddModalComponent} from './modal/patient-add-modal/patient-add-modal.component';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';

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
        PatientSelectModalComponent,
        PatientAddModalComponent,
        LoginModalComponent,
        RegisterModalComponent,
        ConfirmModalComponent,
        VerificationCodeComponent,
        ConsistentCiphersValidatorDirective,
        VerificationCodeSampleComponent,
        PageNotFoundComponent
    ],
    entryComponents: [
        PatientSelectModalComponent,
        PatientAddModalComponent,
        ConfirmModalComponent,
        LoginModalComponent,
        RegisterModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MyModule,
        NgbModule.forRoot(),
        AppRouterModule
    ],
    providers: [
        HospitalService,
        UrlService,
        ContainerService,
        LoginService,
        ValidatorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
