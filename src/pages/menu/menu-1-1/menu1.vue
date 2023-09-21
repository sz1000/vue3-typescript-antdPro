<template>
  <a-card :bordered="false">
    <div class="card-container">
      <a-table :columns="columns" :data-source="list">
        <template v-slot:bodyCell="{ record, column }">
          <span v-if="column.dataIndex === 'operation'">
            <a-button
              type="primary"
              style="margin-right: 10px"
              @click="edit(record)"
              >编辑</a-button
            >
            <a-button style="margin-right: 10px" @click="add">新增</a-button>
            <a-popconfirm
              title="确认删除当前项？"
              ok-text="确认"
              cancel-text="取消"
              @confirm="confirm"
              @cancel="cancel"
            >
              <a-button type="primary" danger>删除</a-button>
            </a-popconfirm>
          </span>
        </template>
      </a-table>
    </div>
  </a-card>
</template>
<script setup lang="ts">
const columns = reactive([
  {
    title: "组织列表",
    dataIndex: "name",
    key: "name",
    width: "40%",
  },
  {
    title: "职位",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "操作",
    dataIndex: "operation",
  },
]);

interface DataItem {
  key: number;
  name: string;
  title: string;
  children?: DataItem[];
}
let list = reactive<DataItem[]>([
  {
    key: 1,
    name: "外服集团",
    title: "董事长",
    children: [
      {
        key: 11,
        name: "上海外服人力资源咨询有限公司",
        title: "CEO",
      },
      {
        key: 12,
        name: "上海外服商务管理有限公司",
        title: "CEO",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            title: "PM",
          },
        ],
      },
      {
        key: 13,
        name: "上海外服信息技术有限公司",
        title: "CEO",
        children: [
          {
            key: 131,
            name: "研发部",
            title: "开发主管",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                title: "测试",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                title: "开发",
              },
            ],
          },
        ],
      },
      {
        key: 14,
        name: "上海外服薪数据科技有限公司",
        title: "CEO",
        children: [
          {
            key: 141,
            name: "财务部",
            title: "财务总监",
          },
          {
            key: 142,
            name: "人事部",
            title: "人事总监",
          },
          {
            key: 142,
            name: "开发部",
            title: "技术总监",
          },
          {
            key: 143,
            name: "部门四",
            title: "部门主管",
            children: [
              {
                key: 1400,
                name: "薪酬服务部",
                title: "财务总监",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    title: "总经理",
  },
]);

const handleData = (array: any, obj: any) => {
  return array.reduce((prev: any, item: any, index: any) => {
    console.log(item);
    console.log(obj);
    if (item.key == obj.key) {
      return prev;
    }
    prev[index] = item;
    if (item.children) {
      prev[index].children = handleData(item.children, obj);
    }
    return prev;
  }, []);
};

//确认删除
const confirm = () => {};
//取消删除
const cancel = () => {};

//编辑
const edit = (data: any) => {
  console.log(data);
};

//添加
const add = () => {};
</script>

<style>
</style>
