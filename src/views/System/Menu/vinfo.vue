<template>
  <div class="">
    <el-dialog
      :title="info.isAdd ? '添加' : '修改'"
      :visible.sync="info.isShow"
      width="40%"
    >
      <!-- 表单 -->
      <el-form :model="forminfo" ref="form" label-width="180px">
        <el-form-item label="菜单类型">
          <el-radio-group v-model="forminfo.type">
            <el-radio :label="1">目录</el-radio>
            <el-radio :label="2">菜单</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="forminfo.title" placeholder="请输入菜单名称">
          </el-input>
        </el-form-item>
        <el-form-item label="目录图标">
          <el-input v-model="forminfo.icon" placeholder="请输入目录图标">
          </el-input>
        </el-form-item>
        <el-form-item label="菜单地址">
          <el-input v-model="forminfo.url" placeholder="请输入菜单地址">
          </el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="forminfo.status"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="warning" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          forminfo: {
            pid: 0,
            title: "",
            icon: "",
            type: 1,
            url: "",
            status: 1,
          },
          isAdd: true,
          isShow: false,
        };
      },
    },
  },
  data() {
    return {
      forminfo: {},
    };
  },
  components: {},
  methods: {
    submit() {
      this.info.isShow = false;
    },
    reset() {},
  },
};
</script>

<style scoped></style>
