import { PaymentOptionsDto } from '~/modules/payment/type/payment-options.dto'

export class PaymentOptionsBuilder {
  private paymentOptions: PaymentOptionsDto = {
    cardNumber: '',
    cvv: '',
    orderId: '',
    paymentCode: undefined,
  }

  addBaseData(cardNumber: string, cvv: string, orderId: string): void {
    this.paymentOptions = {
      ...this.paymentOptions,
      cardNumber,
      cvv,
      orderId,
    }
  }

  addPaymentCode(code: string): void {
    this.paymentOptions.paymentCode = code
  }

  getData(): PaymentOptionsDto {
    return this.paymentOptions
  }
}
