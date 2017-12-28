import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HospitalService} from './service/hosptial.service';
import {UrlService} from './service/url.service';
import {ContainerService} from './service/container.service';

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
import {DetailsHospitalComponent} from './details-hospital/details-hospital.component';
import {SearchInitComponent} from './search-init/search-init.component';
import {NgbdModalContentComponent} from './ngbd-modal-content/ngbd-modal-content.component';

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
        NgbdModalContentComponent
    ],
    entryComponents: [
        NgbdModalContentComponent
    ],
    imports: [
        BrowserModule,
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
