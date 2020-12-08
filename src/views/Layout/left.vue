<template>
  <div>
    <h3 class="logo">文旅平台管理系统</h3>
    <!-- 菜单组件 -->
    <el-menu
      background-color="#444"
      text-color="#fff"
      router
      :default-active="$route.path"
      class="page-menu"
      :collapse="iscollapse"
    >
      <div v-for="(item, index) in menus" :key="index">
        <el-menu-item :index="item.url" v-if="item.type == 2"
          ><i :class="item.icon"></i
          ><span slot="title">{{ item.title }}</span></el-menu-item
        >
        <el-submenu v-else :index="index + ''">
          <template slot="title"
            ><i :class="item.icon"></i
            ><span slot="title">{{ item.title }}</span></template
          >
          <el-menu-item
            v-for="(val, idx) in item.children"
            :key="idx"
            :index="val.url"
            >{{ val.title }}</el-menu-item
          >
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapState(["iscollapse"]),
    ...mapGetters({
      menus: "user/menus"
    })
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.logo {
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #666;
  white-space: nowrap;
  overflow: hidden;
}
.page-menu {
  border-right: none;
}
</style>
