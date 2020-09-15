import { Container, Singleton } from 'typescript-ioc'
import { ApiAbstract } from '~/modules/api/service/api.abstract'
import { BookDto } from '~/modules/book/type/book.dto'

@Singleton
export class BookRepository {
  private readonly apiNode = 'book'

  private readonly api: ApiAbstract = Container.get(ApiAbstract)

  list(): Promise<BookDto[]> {
    return this.api.list<BookDto>(this.apiNode)
  }
}
