<template>
  <section class="container">
    <book-list-component />
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import BookListComponent from '~/modules/book/component/book-list.vue'

  @Component({
    components: {
      BookListComponent
    },
  })
  export default class IndexPage extends Vue {
  }
</script>
