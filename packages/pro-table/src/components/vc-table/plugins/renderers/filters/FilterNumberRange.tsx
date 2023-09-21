import { InputNumber } from 'ant-design-vue'
import { type ExtractPublicPropTypes, type PropType, defineComponent } from 'vue'

const filterNumberRangeProps = {
  value: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
}

export default defineComponent((props: ExtractPublicPropTypes<typeof filterNumberRangeProps>, { emit }) => {
  function mergeAndEmitValue(index: number, val: number) {
    let copy: (number | null)[] | null = props.value ? [...props.value] : [null, null]
    copy![index] = val
    if (copy![0] === null && copy![1] === null)
      copy = null
    emit('update:value', copy)
    emit('change', copy)
  }

  return () => (
    <>
      <InputNumber
        value={props.value?.[0]}
        onChange={val => mergeAndEmitValue(0, val)}
      />
      <InputNumber
        value={props.value?.[1]}
        onChange={val => mergeAndEmitValue(1, val)}
      />
    </>
  )
}, {
  name: 'FilterNumberRange',
  inheritAttrs: false,
  props: filterNumberRangeProps,
  emits: ['change', 'update:value'],
})
