import { VXETable } from 'vxe-table'

import zhCN from 'vxe-table/es/locale/lang/zh-CN' // import en from 'vxe-table/es/locale/lang/en-US'
import XEUtils from 'xe-utils'
import './plugins'
import VXETablePluginAntd from '../plugin-antdv'
import Table, { initVcTable } from './Table'
import 'vxe-table-plugin-antd/dist/style.css'

// #region vxe-table 配置
VXETable.use(VXETablePluginAntd)
// TODO:国际化
/*
  VXETable.setup({
    // 可选，对参数中的列头、校验提示..等进行自动翻译（只对支持国际化的有效）
    translate (key, args) {
      // 例如，只翻译 "app." 开头的键值
      if (key && key.indexOf('app.') > -1) {
        return i18n.global.t(key, args)
      }
      return key
    }
  })
*/
// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args),
})
// #endregion

;(Table as any).install = initVcTable

export {
  Table as VcTable,
}
export * from './Table'
