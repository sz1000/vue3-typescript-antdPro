<script setup lang="ts">
import { type Columns, type FormConfig, ProTable } from './index'

const columns: Columns = [
  {
    type: 'seq',
  },
  {
    field: 'row1',
    title: '列1',
    slots: {
      header() {
        return '真无语'
      },
    },
    children: [
      {
        field: 'row1-1',
        title: '列1-1',
        sortable: true,
        filters: [
          { data: null },
        ],
        filterRender: {
          name: 'AInputNumber',
        },
        slots: {
          default(params) {
            return `${1}-666`
          },
          header: 'testHeader',
        },
      },
      {
        field: 'row1-2',
        title: '列1-2',
        filters: [
          { data: null },
        ],
        filterRender: {
          name: 'FilterNumberRange',
        },
      },
    ],
  },
  {
    field: 'row2',
    title: '列2',
    filters: [
      { label: 'Man', value: 3 },
      { label: 'Woman', value: 9 },
    ],
  },
  {
    field: 'bool',
    title: '列3',
    formatter(params) {
      return params.cellValue ? '是' : '否'
    },
    sortable: true,
    filters: [
      { data: null },
    ],
    filterRender: {
      name: 'ASwitch',
    },
  },
  {
    field: 'date',
    title: '列4',
    sortable: true,
    filters: [
      { data: [] },
    ],
    filterRender: {
      name: 'ARangePicker',
      props: {
        // showTime: true,
        // picker: 'month',
        // picker: 'year',
      },
    },
  },
  {
    field: 'string',
    title: '列5',
    sortable: true,
    filters: [
      { data: '' },
    ],
    filterRender: {
      name: 'AInput',
    },
  },
]

const data = [
  { 'row1-1': 1, 'row1-2': 2, 'row2': 3, 'bool': true, 'date': '2023-11-2', 'string': '我是谁' },
  { 'row1-1': 4, 'row1-2': 5, 'row2': 6, 'bool': true, 'date': '2023-11-3', 'string': '你是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
  { 'row1-1': 7, 'row1-2': 8, 'row2': 9, 'bool': false, 'date': '2023-11-1', 'string': '他是谁' },
]

const formConfig: FormConfig = {
  items: [
    { field: 'test1', title: '测试', span: 12, itemRender: { name: 'AInput' } },
    { field: 'test2', title: '测试2', span: 12, itemRender: { name: 'ADatePicker' } },
  ],
  rules: {
    test1: [{ required: true }],
  },
}
</script>

<template>
  <ProTable :columns="columns" :data="data" :remote="true" :form-config="formConfig">
    <template #buttons>
      功能区
    </template>
    <template #testHeader>
      测试内容
    </template>
  </ProTable>
</template>

<style scoped></style>
