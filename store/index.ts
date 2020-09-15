import { createVuexStore } from 'vuex-simple'
import { Store } from '~/store/store'

const instance = new Store()

export default () => createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: [],
})
