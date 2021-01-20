<template>
<el-dialog title="修改信息" :visible.sync="info.isShow" width="40%" @close="cancel">
    <!--表单-->
    <el-form :model="forminfo" ref="form" label-width="140px">
        <el-form-item label="会员名" prop="nickname">
            <el-input v-model="forminfo.nickname" placeholder="会员名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
            <el-input v-model="forminfo.phone" readonly placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="forminfo.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="会员状态">
            <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="">
            <el-button type="primary" @click="sumbit">立即创建</el-button>
            <el-button type="warning" @click="reset">取消</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</template>

<script>
//导入 添加和修改的 请求封装方法
import {
    editMember
} from "@/request/member";
let defaultItem = {
    nickname: "",
    phone: "",
    password: "",
    status: 1,
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
            forminfo: {
                ...defaultItem,
            },
        };
    },
    created() {},
    methods: {
        setinfo(val) {
            //将数据赋给默认defaultItem 赋给表单
            val.password = "";
            defaultItem = {
                ...val,
            };
            this.forminfo = {
                ...val,
            };
        },
        async sumbit() {
            //表单验证
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    //如果验证通过
                    let res;
                    res = await editMember(this.forminfo);
                    if (res.code == 200) {
                        this.$message.success(res.msg);
                        this.info.isShow = false;
                        this.$emit("update");
                        this.cancel();
                    } else {
                        this.$message.error(res.msg);
                    }
                }
            });
        },
        reset() {
            this.setinfo({
                ...defaultItem,
            });
        },
        cancel() {
            this.forminfo = {
                ...resetItem,
            };
        },
    },
    components: {},
};
</script>

<style scoped>
</style>
