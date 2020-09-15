import { PaymentMethodStrategyContract } from '~/modules/payment/service/payment-method/payment-method-strategy.contract'
import { Container, Singleton } from 'typescript-ioc'
import { PaymentMethodLiqpayStrategy } from '~/modules/payment/service/payment-method/payment-method-liqpay.strategy'
import { PaymentMethodStripeStrategy } from '~/modules/payment/service/payment-method/payment-method-stripe.strategy'
import { PaymentMethodEnum } from '~/modules/payment/type/payment-method.enum'

@Singleton
export class PaymentMethodFactory {
  private readonly paymentMethods = new Map<PaymentMethodEnum, PaymentMethodStrategyContract>([
    [PaymentMethodEnum.LIQPAY, Container.get(PaymentMethodLiqpayStrategy)],
    [PaymentMethodEnum.STRIPE, Container.get(PaymentMethodStripeStrategy)],
  ])

  get(method: PaymentMethodEnum): PaymentMethodStrategyContract {
    return this.paymentMethods.get(method)!
  }
}
