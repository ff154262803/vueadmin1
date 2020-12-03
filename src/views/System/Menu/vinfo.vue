<template>
  <div class="">
    <el-dialog
      :title="info.isAdd ? '添加' : '修改'"
      :visible.sync="info.isShow"
      width="40%"
    >
      <!-- 表单 -->
      <!-- <el-form
        :model="form"
        ref="form"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="">
          <el-input v-model="form.forminfo"></el-input>
        </el-form-item>
      </el-form> -->

      <span slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
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
          isAdd: true,
          isShow: false
        };
      }
    }
  },
  data() {
    return {
      forminfo: {}
    };
  },
  components: {},
  methods: {
    submit() {
      this.info.isShow = false;
    }
  }
};
</script>

<style scoped></style>
