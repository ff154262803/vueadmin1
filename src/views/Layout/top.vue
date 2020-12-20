<template>
  <div class="header">
<<<<<<< HEAD
     <div class="lt">
        <el-button v-if="iscollapse" type="primary" @click="TOGGLE" size="small" class="toggle-btn" icon="el-icon-s-unfold"></el-button>
        <el-button v-else type="primary" size="small" @click="TOGGLE" class="toggle-btn" icon="el-icon-s-fold"></el-button>
        <el-breadcrumb separator="/" class="mbx">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button size="small" v-if="$route.path!='/index'"  @click="$router.back()" icon="el-icon-back" circle></el-button>
     </div>
     <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{username}}你好！<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="togglescreenfull"> <i class="el-icon-full-screen"></i> {{isfull ? '退出全屏':'全屏操作'}}</el-dropdown-item>
            <el-dropdown-item @click.native="QUIT"> <i class="el-icon-switch-button"></i> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
     </div>
=======
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
          {{ username }}，您好！！
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><i class="el-icon-full-screen"></i>全屏操作</el-dropdown-item
          >
          <el-dropdown-item @click.native="QUIT"
            ><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
>>>>>>> 565f63694d7f1ae58867cae1b8d18c5be258d04f
  </div>
</template>
<script>
<<<<<<< HEAD
import { mapState,mapMutations,mapGetters } from "vuex"
// 全屏插件
import screenfull from 'screenfull'
export default {
    data(){
        return{
          isfull:false
        }
    },
    computed: {
       ...mapState(['iscollapse']),
       ...mapGetters({
         username:"user/username"
       })
    },
    methods:{
      ...mapMutations({
        TOGGLE:"TOGGLE",
        QUIT:"user/QUIT"
      }),
      togglescreenfull(){
        if (!screenfull.isEnabled) {
          this.$message.warning('您的浏览器不支持全屏')
          return false
        }
        this.isfull = !this.isfull
        screenfull.toggle()
      }
    },
    components:{}
}
=======
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapState(["iscollapse"]),
    ...mapGetters({
      username: "user/username"
    })
  },
  components: {},
  methods: {
    ...mapMutations({
      TOGGLE: "TOGGLE",
      QUIT: "user/QUIT"
    })
  }
};
>>>>>>> 565f63694d7f1ae58867cae1b8d18c5be258d04f
</script>
<style scoped>
.header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
 
}
.header .lt{
  display: flex;
  align-items: center;
}
.header .mbx{
  margin:0 20px;
}
</style>