import { Container } from 'typescript-ioc'
import { BASER_URL } from '~/ioc/config'
import { ApiAbstract } from '~/modules/api/service/api.abstract'

export class FetchApiService implements ApiAbstract {
  private readonly baseUrl: string = Container.getValue(BASER_URL)

  async list<T>(node: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${node}`, {
      method: 'GET',
    })

    return await response.json()
  }

  async get<T>(node: string, id: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${node}/${id}`, {
      method: 'GET',
    })

    return await response.json()
  }

  async store<T, R>(node: string, data: R): Promise<T> {
    const response = await fetch(`${this.baseUrl}${node}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return await response.json()
  }

  async save<T, R>(node: string, id: string, data: R): Promise<T> {
    const response = await fetch(`${this.baseUrl}${node}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return await response.json()
  }

  async remove(node: string, id: string): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}${node}/${id}`, {
      method: 'DELETE',
    })

    return true
  }
}
