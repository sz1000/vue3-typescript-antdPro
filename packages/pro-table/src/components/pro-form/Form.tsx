import { defineComponent } from 'vue'
import { Form } from 'vxe-table'
import 'vxe-table/es/form/style.css'
import 'vxe-table/es/form-item/style.css'

// TODO:增加插槽功能
export default defineComponent((_, { attrs }) => {
  return () => {
    return (
      <Form
        {...attrs}
      />
    )
  }
}, {
  name: 'ProTable',
})
