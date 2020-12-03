<template>
  <div class="table-bg">
    <el-table :data="list">
      <el-table-column prop="id" label="ID" align="center"> </el-table-column>
      <el-table-column prop="title" label="标题" align="center">
      </el-table-column>
      <el-table-column prop="content" label="内容" align="center">
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
            @click="del(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        { id: 1, title: "qweeqwe", content: "sdweerwrr" },
        { id: 2, title: "qweeqwe", content: "sdweerwrr" },
        { id: 3, title: "qweeqwe", content: "sdweerwrr" },
        { id: 4, title: "qweeqwe", content: "sdweerwrr" },
        { id: 5, title: "qweeqwe", content: "sdweerwrr" },
        { id: 6, title: "qweeqwe", content: "sdweerwrr" }
      ]
    };
  },
  components: {},
  methods: {
    edit() {},
    del() {}
  }
};
</script>

<style scoped></style>
