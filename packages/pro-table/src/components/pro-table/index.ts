import Table, { initProTable } from './Table';

(Table as any).install = initProTable

export {
  Table as ProTable,
}
export * from './Table'
