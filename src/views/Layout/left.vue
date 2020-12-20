<template>
  <div>
<<<<<<< HEAD
     <h3 class="logo">小U商城后台</h3>
     <!-- 菜单组件！！！ -->
     <el-menu 
        class="page-menu"
        background-color="#444" 
        text-color="#fff" 
        router 
        :default-active="$route.path"
        :collapse="iscollapse"
      >
        <el-menu-item index="/index"><i class="el-icon-house"></i> <span slot="title">后台首页</span></el-menu-item>
        <template v-for="(item,index) in menus">
          <el-menu-item v-if="item.type==2" :index="item.url"><i :class="item.icon"></i> <span slot="title">{{item.title}}</span></el-menu-item>
          <el-submenu v-else :index="index+''">
            <template slot="title"><i :class="item.icon"></i><span slot="title">{{item.title}}</span></template>
            <el-menu-item :index="val.url" v-for="(val,idx) in item.children" :key='idx'>{{val.title}}</el-menu-item>
          </el-submenu>
        </template>
     </el-menu>
=======
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
>>>>>>> 565f63694d7f1ae58867cae1b8d18c5be258d04f
  </div>
</template>
<script>
<<<<<<< HEAD
import { mapState,mapGetters } from "vuex"
export default {
    data(){
        return{  }
    },
    computed: {
       ...mapState(['iscollapse']),
       ...mapGetters({
         menus:"user/menus"
       })
    },
    methods:{},
    components:{}
}
=======
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
>>>>>>> 565f63694d7f1ae58867cae1b8d18c5be258d04f
</script>
<style scoped>
.logo{
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #666;
  white-space: nowrap;
  overflow: hidden;
}
.page-menu{
  border-right: none;
}
</style>