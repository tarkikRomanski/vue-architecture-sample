import { Module } from 'vuex-simple'
import { BookStore } from '~/modules/book/store/book.store'

export class Store {
  @Module()
  public book = new BookStore()
}
