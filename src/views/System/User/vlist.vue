<template>
  <div class="table-bg">
    <el-table :data="userlist">
      <el-table-column prop="uid" label="UID" align="center"> </el-table-column>
      <el-table-column prop="username" label="管理员名称" align="center">
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status == 1">启用</el-tag>
          <el-tag type="danger" v-if="scope.row.status == 2">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="修改" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            circle
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            circle
            @click="del(scope.row.uid)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { delUser } from "@/request/user";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userlist: "user/userlist",
    }),
  },
  mounted() {
    if (!this.userlist.length) {
      this.get_user_list();
    }
  },
  components: {},
  methods: {
    ...mapActions({
      get_user_list: "user/get_user_list",
    }),
    edit(val) {
      this.$emit("edit", { ...val });
    },
    async del(uid) {
      this.$confirm("确认删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await delUser(uid);
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.get_user_list();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped></style>
