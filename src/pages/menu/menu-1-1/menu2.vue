<template>
  <a-card :bordered="false">
    <div class="card-container">
      <ITable
        @confirm="confirmLevel"
        @cancel="onCancel"
        @edit="editLevel"
        @add="addLevel"
        :columns="levelColumns.data"
        :dataSource="levelSource.data"
      >
      </ITable>
    </div>
  </a-card>
</template>
<script setup lang="ts">
import ITable from "../../../components/table/ITable.vue";
import { message } from "ant-design-vue";
const [messageApi] = message.useMessage();
const info = () => {
  messageApi.info("Hello, Ant Design Vue!");
};
console.log(info);

const confirmLevel = (val: any) => {
  levelSource.data.splice(val, 1);
  // 调用异步删除的接口，待返回数据后执行如下 message 提示
  message.success("删除成功！2222");
};

const editLevel = (val: any) => {
  console.log(val);
};

const addLevel = () => {
  console.log("添加数据");
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
      title: "职位",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "主要",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "顺序",
      dataIndex: "langue1",
      key: "langue1",
    },
    {
      title: "人头数",
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