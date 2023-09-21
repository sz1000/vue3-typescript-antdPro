import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import { initVcTable } from './components/vc-table/Table'
import 'uno.css'

const app = createApp(App)

initVcTable(app)
app.use(Antd).mount('#app')
