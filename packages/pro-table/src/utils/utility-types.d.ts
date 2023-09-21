import type { ExtractPublicPropTypes } from "vue";

export type Fn = (...args: any[]) => any

export type ExtractPropTypesFromComponent<T> = ExtractPublicPropTypes<InstanceType<T>['$props']>
