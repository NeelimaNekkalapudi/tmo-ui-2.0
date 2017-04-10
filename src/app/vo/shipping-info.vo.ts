import {Address} from './address-info.vo';
import {BillingAddress} from './billing-info.vo';
import {CardInformation} from './card-info.vo';
export class ShippingInfoAddress extends Address {
  public shippingAddress1: string;
  public shippingAddress2: string;
  public billingAddress: BillingAddress;
  public cardInfo: CardInformation;
}
