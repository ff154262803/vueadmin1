<template>
  <el-container class="page">
    <el-aside :width="iscollapse ? '64px' : '220px'" class="page-nav">
      <!-- Aside content -->
      <left />
    </el-aside>
    <el-container class="page-content">
      <el-header class="page-header">
        <!-- Header content -->
        <top />
      </el-header>

      <el-main height="" class="page-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import left from "./left";
import top from "./top";
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapState(["iscollapse"])
  },
  components: {
    left,
    top
  },
  methods: {}
};
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.page-content {
  height: 100%;
  background-color: #f7f7f7;
}
.page-header {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
.page-nav {
  height: 100%;
  background-color: #444;
}
</style>
