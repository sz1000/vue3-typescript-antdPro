import { type App, type ExtractPublicPropTypes, type PropType, defineComponent } from 'vue'

// 按需引入
import {
  Filter,
  Grid,
  Table,
  type VxeGridProps,
} from 'vxe-table'
import 'vxe-table/es/icon/style.css'
import 'vxe-table/es/grid/style.css'
import 'vxe-table/es/table/style.css'
import 'vxe-table/es/column/style.css'
import 'vxe-table/es/colgroup/style.css'
import 'vxe-table/es/filter/style.css'
import 'vxe-table/styles/cssvar.scss'

import { Pagination, type PaginationProps } from 'ant-design-vue'

export function initVcTable(app: App<unknown>) {
  app.use(Filter)
  app.use(Table)
}

export type Columns = NonNullable<VxeGridProps['columns']>

const vcTableProps = {
  remote: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: [Boolean, Object] as PropType<false | PaginationProps>,
    default: false as const,
  },
  data: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: () => [],
  },
}

export type VcTableProps = ExtractPublicPropTypes<typeof vcTableProps>
export type VcTablePublicProps = VcTableProps & VxeGridProps

export default defineComponent<VcTablePublicProps>((props: VcTableProps, context) => {
  const attrs = context.attrs as Omit<VxeGridProps, keyof VcTableProps>

  return () => {
    const { remote } = props

    return (
      <>
        <Grid
          {...attrs}
          data={props.data}
          sortConfig={{ ...attrs.sortConfig, remote }}
          filterConfig={{ ...attrs.filterConfig, remote }}
        >
          {{ ...context.slots }}
        </Grid>

        <div class="mt-2 flex justify-end">
          {props.remote && props.pagination && <Pagination {...props.pagination }/>}
        </div>
      </>
    )
  }
}, {
  name: 'VcTable',
  inheritAttrs: false,
  props: vcTableProps,
  emits: [],
})
