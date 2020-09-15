import { ObjectFactory } from 'typescript-ioc'
import { AxiosApiService } from '~/modules/api/service/axios-api.service'

export const apiFactory: ObjectFactory = () => new AxiosApiService()
