<template>
<el-dialog :title="info.isAdd ? '添加轮播图' : '修改轮播图'" @close="cancel" :visible.sync="info.isShow" width="40%">
    <!-- 表单 -->
    <el-form :model="forminfo" ref="form" :rules="rules" label-width="100px">
        <el-form-item label="轮播图名称" prop="title">
            <el-input v-model="forminfo.title" placeholder="请输入轮播图名称"></el-input>
        </el-form-item>
        <el-form-item label="轮播图图片">
            <el-upload action :on-preview="see" :auto-upload="false" list-type="picture-card" :limit="1" :on-change="change" :on-remove="remove" :file-list="filelist">
                <i slot="default" class="el-icon-plus"></i>
            </el-upload>
            <el-dialog title="查看图片" :visible.sync="dialogVisible" :append-to-body="true">
                <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
        </el-form-item>
        <el-form-item label="状态">
            <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label>
            <el-button type="primary" @click="sumbit">立即添加</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</template>

<script>
// 导入  添加和修改的 请求封装方法！
import {
    addBanner,
    editBanner
} from "@/request/banner";
let defaultItem = {
    title: "",
    img: "",
    status: 1, // 状态1正常2禁用
};
let resetItem = {
    ...defaultItem,
};
export default {
    props: {
        info: {
            type: Object,
            default () {
                return {
                    isAdd: true,
                    isShow: false,
                };
            },
        },
    },
    data() {
        return {
            dialogVisible: false,
            dialogImageUrl: "",
            forminfo: {
                ...defaultItem,
            },
            rules: {
                // 验证规则对象！
                title: [{
                    required: true,
                    message: "必填！",
                    trigger: "blur",
                }, ],
            },
            filelist: [],
        };
    },
    methods: {
        see(file) {
            console.log(file);
            this.dialogVisible = true;
            this.dialogImageUrl = file.url;
        },
        change(file, fileList) {
            this.forminfo.img = file.raw;
        },
        remove(file, fileList) {
            this.forminfo.img = "";
        },
        setinfo(val) {
            if (val.img) {
                this.filelist = [{
                    name: val.catename,
                    url: this.$host + val.img,
                }, ];
            }
            defaultItem = {
                ...val,
            };
            this.forminfo = {
                ...val,
            };
        },
        async sumbit() {
            // 表单验证！
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    // 如果验证通过！
                    let res;
                    let fd = new FormData();
                    console.log(this.forminfo);
                    for (let k in this.forminfo) {
                        fd.append(k, this.forminfo[k]);
                    }
                    if (this.info.isAdd) {
                        // 添加还是修改！
                        res = await addBanner(fd);
                        console.log(fd);
                    } else {
                        res = await editBanner(fd);
                        console.log(fd);
                    }
                    if (res.code == 200) {
                        this.$message.success(res.msg);
                        this.info.isShow = false;
                        this.$parent.update(); //调用父组件的update方法，去更新列表
                        this.cancel(); // 无论是修改成功还是添加成功，都应该让表单为空！
                    } else {
                        this.$message.error(res.msg);
                    }
                }
            });
        },
        reset() {
            if (this.info.isAdd) {
                //添加时候的数据
                this.forminfo = {
                    ...resetItem,
                };
            } else {
                //修改时候的数据
                this.setinfo({
                    ...defaultItem,
                });
            }
        },
        cancel() {
            this.forminfo = {
                ...resetItem,
            };
            this.filelist = [];
        },
    },
    components: {},
};
</script>

<style scoped>
</style>
