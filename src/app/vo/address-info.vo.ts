let regex = /[-]/g;
export class Address {
  get zip(): string {
    return this._zip.replace(regex, '');
  }

  set zip(value: string) {
    this._zip = value;
  }
  public address1: string;
  public address2: string;
  public state: string;
  public city: string;
  private _zip: string;
}
