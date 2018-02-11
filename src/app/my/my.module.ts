import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MyRoutingModule} from './my-routing.module';

import {MyPatientsComponent} from './my-patients/my-patients.component';
import {MyMobileComponent} from './my-mobile/my-mobile.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ListAppointmentComponent} from './list-appointment/list-appointment.component';
// import {VerificationCodeSampleComponent} from '../common/verification-code-sample/verification-code-sample.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        MyRoutingModule
    ],
    declarations: [
        MyProfileComponent,
        MyMobileComponent,
        MyPatientsComponent,
        ListAppointmentComponent
        // VerificationCodeSampleComponent
    ]
})
export class MyModule {
}
