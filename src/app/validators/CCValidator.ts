/**
 * A general class for performing front-end credit-card validation.
 * This release contains support for a few popular cards; it is relatively
 * easy to extend support to other cards
 *
 */
import {CCTypes} from './CCTypes';

export class CCValidator {
  public static MIN_LENGTH: number = 14;

  /**
   * Return the credit card type based on the card number (provided the card is in the accepted list of cards)
   *
   * @param cardNumber : string - Credit card number, which may include spaces or dashes, i.e. XXXX-YYYY-ZZZZ-ABCD
   *
   * @return string - Credit card (CCTypes member) type, which may be 'none' if the card number is not recognized
   */
  public static getCardType(cardNumber: string): string {
    let key: string;
    let cardProps: Object;
    let theCard: string = this.__preProcess(cardNumber);

    for (key in this._types) {
      if (this._types.hasOwnProperty(key)) {
        cardProps = this._types[key];
        if (theCard.match(cardProps['pattern'])) {
          return key;
        }
      }
    }

    return 'none';
  }

  /**
   * Is the supplied credit-card number valid
   *
   * @param cardNumber : string - Credit card number, which may include spaces or dashes, i.e. XXXX-YYYY-ZZZZ-ABCD
   *
   * @return boolean - true if the card number is recognized as a supported card type and
   * the card-number properties are correct for that card type.
   * Note that this does not mean the card is valid to be charged against,
   * only that the number is theoretically correct for the card type.
   */
  public static isValid(cardNumber: string): boolean {
    let testNumber: string = this.__preProcess(cardNumber);
    let cardType: string = this.getCardType(testNumber);
    //console.log(' Test number is :: ', testNumber, ' Card Type :: ', cardType);
    if (cardType !== CCTypes.NONE) {
      //console.log(' Test number is :: ', this.__lengthValid(testNumber, cardType), ' Card Type :: ', this.__luhnValid(testNumber));
      return this.__lengthValid(testNumber, cardType) && this.__luhnValid(testNumber);
    }
    return false;
  }

  // information for various credit card types as a string map
  private static _types: { [key: string]: Object } = {
    amex: {pattern: /^3[47]/, length: 15},
    disc: {pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/, length: 16},
    dine: {pattern: /^36/, length: 14},
    visa: {pattern: /^4/, length: 16},
    mast: {pattern: /^5[1-5]/, length: 16}
  };

  // remove spaces and dashes that may be present in the credit card number
  private static __preProcess(cardNumber: string): string {
    return cardNumber.replace(/[ -]/g, '');
  }

  // check the length of the credit card number based on its type
  private static __lengthValid(cardNumber: string, cardType: string): boolean {
    let cardProps: Object = this._types[cardType];
    //console.log('CARD PROPS ::: ', cardProps, ' ::: ', cardProps['length']);
    return cardProps ? cardNumber.length === cardProps['length'] : false;
  }

  // check the credit card number with the Luhn algorithm
  private static __luhnValid(cardNumber: string): boolean {
    let digit: number;
    let n: number;
    let sum: number;
    let j: number;

    sum = 0;
    let numbers: number[] = cardNumber.split('').reverse().map((val) => parseFloat(val));
    let len: number = numbers.length;
    n = 0;
    j = 0;

    // there's really nothing new under the sun ...
    while (j < len) {
      digit = numbers[n];
      digit = +digit;

      if (n % 2) {
        digit *= 2;
        if (digit < 10) {
          sum += digit;
        } else {
          sum += digit - 9;
        }

      } else {
        sum += digit;
      }

      n = ++j;
    }

    return sum % 10 === 0;
  }

  constructor() {
    // empty
  }
}
