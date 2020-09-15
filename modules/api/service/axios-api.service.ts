import { Container } from 'typescript-ioc'
import axios from 'axios'
import { BASER_URL } from '~/ioc/config'
import { ApiAbstract } from '~/modules/api/service/api.abstract'

export class AxiosApiService implements ApiAbstract {
  private readonly baseUrl: string = Container.getValue(BASER_URL)

  async list<T>(node: string): Promise<T[]> {
    const response = await axios.get<T[]>(`${this.baseUrl}${node}`)

    return response.data
  }

  async get<T>(node: string, id: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${node}/${id}`)

    return response.data
  }

  async store<T, R>(node: string, data: R): Promise<T> {
    const response = await axios.post<T>(`${this.baseUrl}${node}`, data)

    return response.data
  }

  async save<T, R>(node: string, id: string, data: R): Promise<T> {
    const response = await axios.put<T>(`${this.baseUrl}${node}/${id}`, data)

    return response.data
  }

  async remove(node: string, id: string): Promise<boolean> {
    await axios.delete(`${this.baseUrl}${node}/${id}`)

    return true
  }
}
