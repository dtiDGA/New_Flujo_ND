import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  equalEmail( campo1: string, campo2: string ){

    return ( formgroup: AbstractControl ): ValidationErrors | null => {

      const email1 = formgroup.get(campo1)?.value;
      const email2 = formgroup.get(campo2)?.value;

      if ( email1 !== email2 ) {
        formgroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }

      formgroup.get(campo2)?.setErrors(null);

      return null;
    }
  }

}
