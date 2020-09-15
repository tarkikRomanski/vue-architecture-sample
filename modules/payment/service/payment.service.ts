import { Container, Singleton } from 'typescript-ioc'
import { PaymentMethodEnum } from '~/modules/payment/type/payment-method.enum'
import { PaymentOptionsDto } from '~/modules/payment/type/payment-options.dto'
import { PaymentMethodFactory } from '~/modules/payment/service/payment-method/payment-method.factory'

@Singleton
export class PaymentService {
  private readonly paymentMethodFactory = Container.get(PaymentMethodFactory)

  handle(method: PaymentMethodEnum, data: PaymentOptionsDto): string {
    return this.paymentMethodFactory.get(method).handle(data)
  }
}
