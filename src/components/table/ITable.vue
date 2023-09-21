<template>
  <a-space>
    <a-button @click="add">添加</a-button>
  </a-space>
  <a-table :dataSource="dataSource" :columns="columns">
    <template v-slot:bodyCell="{ record, index, column }">
      <span v-if="column.dataIndex === 'operation'">
        <a-button
          type="primary"
          style="margin-right: 10px"
          @click="edit(record)"
          >编辑</a-button
        >
        <a-popconfirm
          title="确认删除当前项？"
          ok-text="确认"
          cancel-text="取消"
          @confirm="confirm(index)"
          @cancel="cancel"
        >
          <a-button type="primary" danger>删除</a-button>
        </a-popconfirm>
      </span>
    </template>
  </a-table>
</template>
  
<script lang="ts" setup>
// 子组件获取父组件传过来滴数据
const prop = defineProps({
  dataSource: Array,
  columns: Array,
});
// 定义要发送的emit事件
const emit = defineEmits(["confirm"]);
const selectedValue = ref(prop.index);
//确认删除
const confirm = (index: string) => {
  emit("confirm", index);
};
//取消删除
const cancel = () => {
  emit("cancel", "取消删除操作");
};

//编辑
const edit = (data) => {
  console.log(data);
  emit("edit", data);
};

//添加
const add = () => {
  console.log("添加数据");
  emit("add");
};
</script>
<style lang="less" scoped>
</style>
    