let regex = /[( )-]/g;
export class PersonalInfo {
  get phoneNumber(): string {
    return this._phoneNumber.replace(regex, '');
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  public firstName: string;
  public lastName: string;
  public email: string;
  public confirm: string;
  public carrier: string;
  private _phoneNumber: string;
}
