import { Container } from 'typescript-ioc'

export const CONFIG = 'config'
export const BASER_URL = `${CONFIG}.baseUrl`

export interface Config {
  baseUrl: string
}

Container.bindName(CONFIG).to({
  baseUrl: 'http://base-url.com/api/',
})
