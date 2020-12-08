<template>
  <div class="">
    <el-dialog
      :title="info.isAdd ? '添加角色' : '修改角色'"
      :visible.sync="info.isShow"
      width="40%"
      :destroy-on-close="true"
      @close="cancel"
    >
      <!-- 表单 -->
      <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
        <el-form-item label="角色名称" prop="rolename">
          <el-input v-model="forminfo.rolename" placeholder="请输入角色名称">
          </el-input>
        </el-form-item>
        <el-form-item label="角色权限">
          <el-tree
            :props="{ children: 'children', label: 'title' }"
            :data="menulist"
            show-checkbox
            default-expand-all
            ref="tree"
            node-key="id"
            :check-strictly="checkStrictly"
          >
          </el-tree>
        </el-form-item>
        <el-form-item label="角色状态">
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
import { addRole, editRole } from "@/request/role";
import { mapGetters, mapActions } from "vuex";
let defaultItem = {
  rolename: "",
  menus: "",
  status: 1
};
let resetItem = {
  ...defaultItem
};
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: true
        };
      }
    }
  },
  data() {
    return {
      forminfo: { ...defaultItem },
      rules: {
        rolename: [{ required: true, message: "必填", trigger: "blur" }]
      },
      checkStrictly: false
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menu/menulist"
    })
  },
  mounted() {
    if (!this.menulist.length) {
      this.get_menu_list();
    }
  },
  components: {},
  methods: {
    ...mapActions({
      get_menu_list: "menu/get_menu_list",
      get_role_list: "role/get_role_list"
    }),
    setinfo(val) {
      console.log(val);
      let idarr = val.menus.split(",");
      if (idarr[0]) {
        this.checkStrictly = true;
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(idarr);
          this.checkStrictly = false;
        });
      }
      defaultItem = { ...val };
      this.forminfo = { ...val };
    },
    async submit() {
      let idarr = this.$refs.tree.getCheckedKeys();
      //.concat(this.$refs.tree.getHalfCheckedKeys());
      console.log(idarr);
      if (idarr.length) {
        this.forminfo.menus = idarr;
      } else {
        this.$message.warning("请选择权限");
        return;
      }
      this.$refs.form.validate(async valid => {
        if (valid) {
          let res;
          if (this.info.isAdd) {
            res = await addRole(this.forminfo);
          } else {
            res = await editRole(this.forminfo);
          }
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.info.isShow = false;
            this.get_role_list();
            this.cancel();
          } else {
            this.$message.error(res.msg);
          }
        }
      });
    },
    reset() {
      if (this.info.isAdd) {
        this.forminfo = { ...resetItem };
        this.$refs.tree.setCheckedKeys([]);
      } else {
        this.setinfo({ ...defaultItem });
      }
    },
    cancel() {
      this.forminfo = { ...resetItem };
      this.$refs.tree.setCheckedKeys([]);
    }
  }
};
</script>

<style scoped></style>
