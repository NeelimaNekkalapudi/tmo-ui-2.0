/**
 * Custom Angular 2 credit card validator - determines if the card number is of a suitable,
 * minimum length and passes the
 * luhn algorithm test.  This does not mean the card is valid to charge against.
 *
 */

import {CCValidator} from './CCValidator';
import {FormControl} from '@angular/forms';

// returns a specific Object signature that is akin to a String Map (think typedef from C++) \
// with a string key and a boolean value
export function creditCardValidator(control: FormControl): { [s: string]: boolean } {
  let card: string = control.value.toString();
  if (card.length > 0) {
    // length test
    if (card.length < CCValidator.MIN_LENGTH) {
      return {minLength: true};
    }

    // general validation test
    if (!CCValidator.isValid(card)) {
      return {invalidCard: true};
    }
  }
}
