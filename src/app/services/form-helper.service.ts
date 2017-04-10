import {Injectable} from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

@Injectable()
export class FormHelperService {
  public hasError(form: FormGroup, ...prop: string[]) {
    const control = this.getControl(form, ...prop);
    return !control.valid && control.touched;
  }

  public getControl(form: FormGroup, ...prop: string[]): AbstractControl {
    if (prop.length === 1) {
      return form.controls[prop[0]];
    }
    return this.getControl(<any> form.controls[prop[0]], ...prop.slice(1));
  }

  public matchingEmails(emailKey: string, confirmEmailKey: string) {
    return (group: FormGroup): {
      [key: string]: any
    } => {
      let email = group.controls[emailKey];
      let confirmEmail = group.controls[confirmEmailKey];

      if (email.value !== confirmEmail.value) {
        return {
          mismatchedEmails: true
        };
      }
    };
  }

  public mailFormat(form: FormGroup, ...prop: string[]) {
    const control = this.getControl(form, ...prop);
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return {incorrectMailFormat: true};
    }
  }

  public expireValidator(expMonth: string, expYear: string) {
    return (group: FormGroup): {
      [key: string]: any
    } => {
      let month = Number(group.controls[expMonth].value);
      let year = Number(group.controls[expYear].value);
      if (month > 0 || year > 0) {
        if (month < 1 || month > 12) {
          return {
            invalidMonth: true
          };
        }

        if (year < 0 || year > 99) {
          return {
            invalidYear: true
          };
        }

        let date: Date = new Date();
        let curMonth: number = date.getMonth() + 1;
        let curYear: number = parseInt(date.getFullYear().toString().substr(2, 2));
        if (year < curYear) {
          return {
            invalidYear: true
          };
        } else if (year === curYear && month < curMonth) {
          return {
            invalidMonth: true
          };
        }
      }
    };
  }
}
