import { createPinia } from 'pinia'
import { createApp } from 'vue'
import type { App } from 'vue'
import { initProTable } from 'pro-table'
import { Input } from 'ant-design-vue'
import Root from './App.vue'
import i18n from './locales'
import {
  setupAccessDirective,
  setupLoadingDirective,
} from './directive'
import router from '~/router'
import '~/router/router-guard'
import 'ant-design-vue/dist/reset.css'
import '~/assets/styles/reset.css'
import 'uno.css'

const pinia = createPinia()
function start() {
  const app: App = createApp(Root)
  initProTable(app)
  setupDirective(app)
  registerFormComponents(app)
  app.use(pinia)
  app.use(router)
  app.use(i18n)
  app.mount('#app')
}

function setupDirective(app: App) {
  // 注册loading自定义指令
  setupLoadingDirective(app)
  setupAccessDirective(app)
}

function registerFormComponents(app: App) {
  app.use(Input)
}

start()
