import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {VerificationCodeComponent} from './verification-code/verification-code.component';
import {ConsistentCiphersValidatorDirective} from './consistent-ciphers.directive';
import {VerificationCodeSampleComponent} from './verification-code-sample/verification-code-sample.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        VerificationCodeComponent,
        ConsistentCiphersValidatorDirective,
        VerificationCodeSampleComponent,
        PageNotFoundComponent
    ],
    exports: [
        VerificationCodeComponent,
        VerificationCodeSampleComponent
    ]
})
export class WidgetModule {
}
