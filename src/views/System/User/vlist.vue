<template>
  <div class="table-bg">
    <el-table :data="userlist">
      <el-table-column prop="uid" label="UID" align="center"> </el-table-column>
      <el-table-column prop="username" label="管理员名称" align="center">
      </el-table-column>
      <el-table-column label="管理员角色" align="center">
        <template slot-scope="scope">
          <el-tag type="success">{{ scope.row.rolename }}</el-tag>
        </template>
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
    <el-pagination
      background
      @size-change="get_size"
      @current-change="get_page"
      :current-page="page"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { delUser } from "@/request/user";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userlist: "user/userlist",
      page: "user/page",
      size: "user/size",
      total: "user/total"
    })
  },
  mounted() {
    if (!this.userlist.length) {
      this.get_user_list();
    }
  },
  components: {},
  methods: {
    ...mapMutations({
      SET_PAGE: "user/SET_PAGE"
    }),
    ...mapActions({
      get_user_list: "user/get_user_list",
      get_page: "user/get_page",
      get_size: "user/get_size"
    }),
    edit(val) {
      this.$emit("edit", { ...val });
    },
    async del(uid) {
      this.$confirm("确认删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await delUser(uid);
          if (res.code == 200) {
            this.$message.success(res.msg);
            if (this.userlist.length == 1 && this.page != 1) {
              this.SET_PAGE(this.page - 1);
            }
            this.get_user_list();
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped></style>
