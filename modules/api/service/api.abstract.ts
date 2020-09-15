import { Factory } from 'typescript-ioc'
import { apiFactory } from '~/modules/api/service/api.factory'

@Factory(apiFactory)
export abstract class ApiAbstract {
  abstract async list<T>(node: string): Promise<T[]>

  abstract async get<T>(node: string, id: string): Promise<T>

  abstract async store<T, R>(node: string, data: R): Promise<T>

  abstract async save<T, R>(node: string, id: string, data: R): Promise<T>

  abstract async remove(node: string, id: string): Promise<boolean>
}
