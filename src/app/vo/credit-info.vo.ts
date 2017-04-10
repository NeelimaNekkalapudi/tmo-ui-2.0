let regex = /[()-]/g;
export class CreditInfo {
  set ssn(value: string) {
    this._ssn = value;
  }

  get ssn(): string {
    return this._ssn.replace(regex, '');
  }

  public idType: string;
  public idNumber: string;
  public state: string;
  public dob: Date;
  public expiration: string;

  private _ssn: string;
}
