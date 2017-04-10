import {FormControl} from '@angular/forms';
export class GlobalValidator {

  public static mailFormat(control: FormControl): ValidationResult {

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return {incorrectMailFormat: true};
    }
    return null;
  }

  public static dobValidator(control: FormControl): ValidationResult {
    let MIN_LENGTH: number = 10;
    let MIN_YEAR: number = 1947;
    let MAX_YEAR: number = new Date().getFullYear();
    let dob: string = control.value.toString();
    let parts = dob.split('/');
    let month: number = Number(parts[0]);
    let year: number = Number(parts[2]);
    let date: number = Number(parts[1]);
    //console.log(' Parts Are :: ', parts, ' :: DOB  ::', dob);

    if (dob.length < MIN_LENGTH) {
      return {
        invalidDOB: true
      };
    }

    if (month > 12) {
      return {
        invalidMonth: true
      };
    }

    //console.log('Month Date::: ', daysInMonth(month, year));
    if (date > daysInMonth(month, year)) {
      return {
        invalidDate: true
      };
    }

    if (year < MIN_YEAR || year > MAX_YEAR) {
      return {
        invalidYear: true
      };
    }
  }
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
interface ValidationResult {
  [key: string]: boolean;
}
