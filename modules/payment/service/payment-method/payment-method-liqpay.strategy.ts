import { PaymentMethodStrategyContract } from '~/modules/payment/service/payment-method/payment-method-strategy.contract'
import { Singleton } from 'typescript-ioc'
import { PaymentOptionsDto } from '~/modules/payment/type/payment-options.dto'

@Singleton
export class PaymentMethodLiqpayStrategy implements PaymentMethodStrategyContract {
  handle(data: PaymentOptionsDto): string {
    return 'liqpay'
  }
}
