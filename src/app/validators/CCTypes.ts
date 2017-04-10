/**
 * Credit Card Types - this is a basic starting list to build upon
 *
 */

export class CCTypes {
  public static NONE: string = 'none';
  public static AMERICAN_EXPRESS: string = 'amex';
  public static DISCOVER: string = 'disc';
  public static DINERS_CLUB_INTERNATIONAL: string = 'dine';
  public static VISA: string = 'visa';
  public static MASTERCARD: string = 'mast';

  public static isAccepted(cardName: string): boolean {
    return cardName === this.AMERICAN_EXPRESS ||
      cardName === this.DISCOVER ||
      cardName === this.DINERS_CLUB_INTERNATIONAL ||
      cardName === this.VISA ||
      cardName === this.MASTERCARD;
  }

  constructor() {
    // empty
  }
}
