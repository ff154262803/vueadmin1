<template>
  <div class="">
    <el-button type="primary" @click="add">添加角色</el-button>
    <!-- 列表组件 -->
    <v-list @edit="edti"></v-list>
    <!-- 添加/修改组件 -->
    <v-info :info="info" ref="dialog"></v-info>
  </div>
</template>

<script>
import VList from "./vlist";
import VInfo from "./vinfo";

export default {
  name: "",
  data() {
    return {
      info: {
        isAdd: false,
        isShow: false,
      },
    };
  },
  components: {
    VList,
    VInfo,
  },
  methods: {
    add() {
      this.info.isAdd = this.info.isShow = true;
    },
    edti(val) {
      this.info.isAdd = false;
      this.info.isShow = true;
      this.$refs.dialog.setinfo(val);
    },
  },
};
</script>

<style scoped></style>
