<template>
  <div class="header">
    <div class="lt">
      <el-button
        v-if="iscollapse"
        type="primary"
        icon="el-icon-s-unfold"
        size="small"
        @click="TOGGLE"
      ></el-button>
      <el-button
        @click="TOGGLE"
        v-else
        type="primary"
        icon="el-icon-s-fold"
        size="small"
      ></el-button>
      <el-breadcrumb separator="/" class="mbx">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button
        icon="el-icon-back"
        size="small"
        v-if="$route.path != '/index'"
        @click="$router.back()"
        circle
      ></el-button>
    </div>
    <div>
      <i class="el-icon-full-screen"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
          付晓飞，您好！！
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><i class="el-icon-full-screen"></i>全屏操作</el-dropdown-item
          >
          <el-dropdown-item
            ><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapState(["iscollapse"])
  },
  components: {},
  methods: {
    ...mapMutations(["TOGGLE"])
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.header .lt {
  display: flex;
  align-items: center;
}
.header .mbx {
  margin: 0 20px;
}
</style>
