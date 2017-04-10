let regex = /[-]/g;
export class Address {
  get zip(): string {
    return this._zip.replace(regex, '');
  }

  set zip(value: string) {
    this._zip = value;
  }

  public state: string;
  public city: string;
  private _zip: string;
}
