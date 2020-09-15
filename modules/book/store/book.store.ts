import { Getter, Mutation, State } from 'vuex-simple'
import { BookDto } from '~/modules/book/type/book.dto'
import { BookRepository } from '~/modules/book/service/book.repository'
import { Container } from 'typescript-ioc'

export class BookStore {
  private readonly bookService: BookRepository = Container.get(BookRepository)

  @State()
  public books!: BookDto[]

  constructor() {
    this.books = []
  }

  @Getter()
  public get book() {
    return (id: string) => this.books.filter(book => book.id === id)
  }

  @Mutation()
  public setBooks(books: BookDto[]) {
    this.books = books
  }

  public async fetchBooks(): Promise<void> {
    this.setBooks(await this.bookService.list())
  }
}
