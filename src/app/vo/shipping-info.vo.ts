import {Address} from './address-info.vo';
import {CardInformation} from './card-info.vo';

export class ShippingInfo {
  public shippingAddress: Address;
  public billingAddress: Address;
  public cardInfo: CardInformation;
}
