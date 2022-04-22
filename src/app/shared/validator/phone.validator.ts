import { AbstractControl } from "@angular/forms";

export class PhoneValidator {

    static validateNumber( control: AbstractControl ): {[key: string]: any} | null {

        const valid = /^(?:(?:\+|00)56)?(?:[0-9]{1,10})$/.test(control.value);

        return valid || !control.value
            ? null
            : { invalidNumber: { valid: false, value: control.value }};
    }
}