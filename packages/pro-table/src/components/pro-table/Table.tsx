import { type App, type ExtractPublicPropTypes, type PropType, computed, defineComponent, ref } from 'vue'
import { Toolbar, type VxeFormProps, type VxeGridEmits } from 'vxe-table'
import 'vxe-table/es/toolbar/style.css'
import { Button, Modal, type ModalProps } from 'ant-design-vue'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons-vue'
import { VcTable, initVcTable } from '../vc-table'
import type { Columns, VcTablePublicProps } from '../vc-table/Table'
import { ProForm } from '../pro-form'

export function initProTable(app: App<unknown>) {
  initVcTable(app)
}

export type FormConfig = VxeFormProps

const proTableProps = {
  columns: {
    type: Array as PropType<Columns>,
    default: () => [],
  },
  modalConfig: {
    type: Object as PropType<ModalProps>,
    default: null,
  },
  formConfig: {
    type: Object as PropType<VxeFormProps>,
    default: null,
  },
}

type ProTableProps = ExtractPublicPropTypes<typeof proTableProps>
type ProTablePublicProps = ProTableProps & VcTablePublicProps

// FIXME:修正TS报错
const ProTable = defineComponent<ProTablePublicProps, VxeGridEmits>((props: ProTableProps, context) => {
  const attrs = context.attrs as Omit<ProTableProps, keyof ProTablePublicProps>

  const openFormModal = ref(false)

  // TODO:允许用户自定义操作列
  const columns = computed(() => {
    const copy = [...props.columns!]
    copy.push({
      field: 'actions',
      title: '操作',
      slots: {
        default: () => {
          return (
            <>
              <Button type='link' size='small' onClick={() => openFormModal.value = true}>编辑</Button>
              <Button type='link' danger size='small'>删除</Button>
            </>
          )
        },
      },
    })
    return copy
  })

  const renderDefaultTools = () => {
    const tools = (
      <>
        <Button type='primary' icon={<PlusOutlined/>} shape='circle' size='large' onClick={() => openFormModal.value = true}></Button>
        <Button icon={<ReloadOutlined/>} shape='circle' size='large'></Button>
      </>
    )

    return (
      <div class="space-x-2">
        {tools}
      </div>
    )
  }

  return () => {
    const { buttons, tools, ...restSlots } = context.slots

    return (
      <div class="pro-table">
        <Toolbar>
          {{
            buttons,
            tools: tools ?? renderDefaultTools,
          }}
        </Toolbar>

        <VcTable columns={columns.value} {...attrs}>
          {restSlots}
        </VcTable>

        <Modal
          {...props.modalConfig}
          v-model:open={openFormModal.value}
        >
          <ProForm {...props.formConfig}/>
        </Modal>
      </div>
    )
  }
}, {
  name: 'ProTable',
  inheritAttrs: false,
  props: proTableProps,
})

export {
  ProTable as default,
}
