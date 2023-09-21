<template>
  <a-card :bordered="false">
    <div class="header">
      <a-tree-select
        @change="getKeys"
        v-model:checkedKeys="checkedKeys"
        :tree-data="treeData.data"
        style="width: 300px"
      >
      </a-tree-select>
    </div>
    <div class="content">
      <div class="leftTree">
        <a-tree
          v-model:selectedKeys="selectedKeys"
          v-model:clickKey="clickKey"
          @select="onSelect(selectedKeys, dataSource)"
          :tree-data="leftTree.data"
        >
        </a-tree>
      </div>
      <div class="rightTable">
        <a-table :dataSource="dataSource.data" :columns="columns.data" />
      </div>
    </div>
  </a-card>
</template>
<script setup lang="ts">
const treeData = reactive({
  data: [
    {
      title: "上海外服集团有限公司",
      key: "0-0",
      value: "0-0",
      children: [
        {
          title: "第一事业部",
          key: "0-0-0",
          value: "0-0-0",
          children: [
            {
              title: "公司1",
              key: "0-0-0-0",
              value: "0-0-0-0",
              children: [
                {
                  title: "综合管理部",
                  key: "0-0-0-0-1",
                  value: "0-0-0-0-1",
                },
                {
                  title: "营销中心",
                  key: "0-0-0-0-2",
                  value: "0-0-0-0-2",
                },
              ],
            },
          ],
        },
        {
          title: "薪酬福利事业部",
          key: "0-0-1",
          value: "0-0-1",
          children: [
            {
              title: "薪数据科技有限公司",
              key: "0-0-1-0",
              value: "0-0-1-0",
              children: [
                {
                  title: "综合管理部",
                  key: "0-0-1-0-0",
                  value: "0-0-1-0-0",
                },
                {
                  title: "营销中心",
                  key: "0-0-1-0-1",
                  value: "0-0-1-0-1",
                },
                {
                  title: "研发中心",
                  key: "0-0-1-0-2",
                  value: "0-0-1-0-2",
                },
                {
                  title: "解决方案部",
                  key: "0-0-1-0-3",
                  value: "0-0-1-0-3",
                },
                {
                  title: "标准化薪酬团队",
                  key: "0-0-1-0-4",
                  value: "0-0-1-0-4",
                },
                {
                  title: "复杂薪酬团队",
                  key: "0-0-1-0-5",
                  value: "0-0-1-0-5",
                },
                {
                  title: "卓越中心",
                  key: "0-0-1-0-6",
                  value: "0-0-1-0-6",
                },
                {
                  title: "税务中心",
                  key: "0-0-1-0-7",
                  value: "0-0-1-0-7",
                },
              ],
            },
          ],
        },
        {
          title: "第三事业部",
          key: "0-0-2",
          value: "0-0-2",
          children: [
            {
              title: "公司1",
              key: "0-0-2-0",
              value: "0-0-2-0",
              children: [
                {
                  title: "人力资源部",
                  key: "0-0-2-0-1",
                  value: "0-0-2-0-1",
                },
                {
                  title: "销销中心",
                  key: "0-0-2-0-2",
                  value: "0-0-2-0-2",
                },
              ],
            },
          ],
        },
        {
          title: "人力资源部",
          key: "0-0-3",
          value: "0-0-3",
        },
        {
          title: "董事部",
          key: "0-0-4",
          value: "0-0-4",
        },
      ],
    },
  ],
});

const selectedKeys = ref<string[]>([]);
watch(selectedKeys, () => {});

//点击左边tree 根据key过滤table有key的数据返回
const onSelect = (value: any, dataSource: any) => {
  console.log(value);
  console.log(dataSource.data);
  let list = dataSource.data
  let arr = [];
  for (let i of value) {
    let obj = findById(list, i);
    console.log(obj)
    if(obj){
      arr.push(obj);
      dataSource.data = arr;
    }
    
  }
};

const findById = (array: any[], key: any) => {
  console.log(array, key);
    return array.find(function (element) {
      return element.key === key;
    });
};

//点击的key
let clickKey = ref<string[]>([]);
let leftTree = reactive<any>({
  data: [],
});

//选中的key
const checkedKeys = ref<string[]>([]);
const getKeys = (val: any) => {
  let arr = [];
  let obj = deepTree(treeData.data, val);
  arr.push(obj);
  leftTree.data = arr;
};

let deepTree: any = (list: { [x: string]: any }, key: any) => {
  //遍历数组
  for (let i in list) {
    let item = list[i];
    if (item.key === key) {
      return item;
    } else {
      //查不到继续遍历
      if (item.children) {
        const value = deepTree(item.children, key);
        //查询到直接返回
        if (value) {
          return value;
        }
      }
    }
  }
};

let dataSource = reactive({
  data: [
    {
      key: "0-0-0",
      name: "胡志勇",
      idnumber: "1001",
      date: "2023-12-21",
      jobTitle: "第一事业部-前端开发",
      superiors: "李四",
    },
    {
      key: "0-0-0-0-1",
      name: "王彦祖",
      idnumber: "1002",
      date: "2023-12-21",
      jobTitle: "综合管理部-后端开发",
      superiors: "王五",
    },
  ],
});
let columns = reactive({
  data: [
    {
      title: "员工工号",
      dataIndex: "idnumber",
      key: "idnumber",
    },
    {
      title: "员工姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "入职日期",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "职位",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "上级主管",
      dataIndex: "superiors",
      key: "superiors",
    },
  ],
});
</script>

<style>
.content {
  margin-top: 20px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}
.leftTree {
  width: 300px;
}
.rightTable {
  flex: 1;
}
</style>
