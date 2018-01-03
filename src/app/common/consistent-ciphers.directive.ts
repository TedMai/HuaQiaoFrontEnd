import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';
import {Directive, Input} from '@angular/core';


export function consistentCiphersValidator(password: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        console.log('consistentCiphersValidator ==> ' + password);
        const isConsistent = password === control.value;
        return isConsistent ? {'consistentCiphers': {value: control.value}} : null;
    };
}
@Directive({
    selector: '[appConsistentCiphers]',
    providers: [{provide: NG_VALIDATORS, useExisting: ConsistentCiphersValidatorDirective, multi: true}]
})
export class ConsistentCiphersValidatorDirective implements Validator {
    @Input() firstTimeInputPassword: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.firstTimeInputPassword ? consistentCiphersValidator(this.firstTimeInputPassword)(control) : null;
    }
}
