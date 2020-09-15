import { PaymentOptionsDto } from '~/modules/payment/type/payment-options.dto'

export abstract class PaymentMethodStrategyContract {
  abstract handle(data: PaymentOptionsDto): string
}
