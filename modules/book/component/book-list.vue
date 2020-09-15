<template>
  <ul>
    <li v-for="book in bookStore.books" :key="book.id">{{ book.title }}</li>
  </ul>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { useModule } from 'vuex-simple'
  import { BookStore } from '~/modules/book/store/book.store'

  @Component
  export default class BookListComponent extends Vue {
    readonly bookStore: BookStore = useModule<BookStore>(this.$store, ['book'])!

    mounted() {
      this.bookStore.fetchBooks()
    }
  }
</script>
