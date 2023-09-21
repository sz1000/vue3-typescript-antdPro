import { isNull, isString, isUndefined } from 'xe-utils'
import type { Slot, Slots } from 'vue'

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export const slotHelper = (slotOrName: string | Slot, slots: Slots) => {
  if (isString(slotOrName))
    return slots[slotOrName]

  return slotOrName
}

export const isNullish = (val: unknown) => isNull(val) || isUndefined(val)

export type * from './utility-types'
