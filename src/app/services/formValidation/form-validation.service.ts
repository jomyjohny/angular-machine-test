import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    let config = {
      'required': 'Required',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'invalidNumber': 'Not a valid Number'
    };
    return config[validatorName];
  }
  
  validateNumber(c: FormControl) {
    let NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(c.value) ? null : {
      invalidNumber: true
    };
  }

}
