<template>
  <a-card :bordered="false">
    <div class="card-container">
      <a-tabs v-model:activeKey="activeKey" type="card">
        <a-tab-pane key="1" tab="统计层级">
          <ITable
            @confirm="confirmLevel"
            @cancel="onCancel"
            @edit="editLevel"
            @add="addLevel"
            :columns="levelColumns.data"
            :dataSource="levelSource.data"
          >
          </ITable>
        </a-tab-pane>
        <a-tab-pane key="2" tab="组织字典">
          <ITable
            @confirm="confirmDict"
            @cancel="onCancel"
            :columns="dictColumns.data"
            :dataSource="dictSource.data"
          >
          </ITable>
        </a-tab-pane>
        <a-tab-pane key="3" tab="职位字典">
          <ITable
            @confirm="confirmJob"
            @cancel="onCancel"
            :columns="jobColumns.data"
            :dataSource="jobSource.data"
          >
          </ITable>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-card>
</template>
<script setup lang="ts">
import ITable from "../../components/table/ITable.vue";
const activeKey = ref("1");
import { message } from "ant-design-vue";
const [messageApi] = message.useMessage();
const info = () => {
  messageApi.info("Hello, Ant Design Vue!");
};
console.log(info);

const confirmLevel = (val: any) => {
  levelSource.data.splice(val, 1);
  message.success("删除成功！2222");
};

const editLevel = (val: any) => {
  console.log(val);
};

const addLevel = () => {
  console.log("添加数据");
};

const confirmDict = (val: any) => {
  dictSource.data.splice(val, 1);
  message.success("删除成功！2222");
};

const confirmJob = (val: any) => {
  jobSource.data.splice(val, 1);
  message.success("删除成功！2222");
};

const onCancel = (val: any) => {
  message.info(val);
};
const levelSource = reactive({
  data: [
    {
      code: "1",
      level: "1",
      langue1: "中文",
      langue2: "英语",
    },
    {
      code: "2",
      level: "2",
      langue1: "中文",
      langue2: "英语",
    },
  ],
});
const levelColumns = reactive({
  data: [
    {
      title: "代码",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "层级",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "显示语言1",
      dataIndex: "langue1",
      key: "langue1",
    },
    {
      title: "显示语言2",
      dataIndex: "langue2",
      key: "langue2",
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ],
});
//组织字典
const dictSource = reactive({
  data: [
    {
      code: "1",
      langue1: "中文",
      langue2: "英语",
    },
    {
      code: "2",
      langue1: "中文",
      langue2: "英语",
    },
  ],
});
//组织字典列
const dictColumns = reactive({
  data: [
    {
      title: "代码",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "显示语言1",
      dataIndex: "langue1",
      key: "langue1",
    },
    {
      title: "显示语言2",
      dataIndex: "langue2",
      key: "langue2",
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ],
});
//职位字典
const jobSource = reactive({
  data: [
    {
      code: "1",
      langue1: "中文",
      langue2: "英语",
    },
    {
      code: "2",
      langue1: "中文",
      langue2: "英语",
    },
  ],
});
//职位字典
const jobColumns = reactive({
  data: [
    {
      title: "代码",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "显示语言1",
      dataIndex: "langue1",
      key: "langue1",
    },
    {
      title: "显示语言2",
      dataIndex: "langue2",
      key: "langue2",
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ],
});
</script>