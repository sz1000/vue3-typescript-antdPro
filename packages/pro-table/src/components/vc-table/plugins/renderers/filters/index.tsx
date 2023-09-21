import { VXETable } from 'vxe-table'
import { createFilterRender } from '../../../../plugin-antdv'
import FilterNumberRange from './FilterNumberRange'

VXETable.renderer.add('FilterNumberRange', {
  renderFilter: createFilterRender({}, FilterNumberRange),
  defaultFilterMethod(params) {
    const { cellValue } = params
    const [start, end] = params.option.data
    return cellValue >= (start ?? Number.NEGATIVE_INFINITY) && cellValue <= (end ?? Number.POSITIVE_INFINITY)
  },
})
