<template>
  <section class="container">
    <center :style="{marginTop: '5rem'}">
      Address:
      <br>
      {{ coinbase }}
    </center>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Logo from '~/components/Logo.vue'

  @Component({
    components: {
      Logo,
    },
  })
  export default class IndexPage extends Vue {
    get coinbase(): string {
      return 'coinbase'
    }
  }
</script>
