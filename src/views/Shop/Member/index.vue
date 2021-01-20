<template>
<div>
    <!--列表组件-->
    <v-list @edit="edit" ref="list"></v-list>
    <!--添加/修改组件-->
    <v-info :info="info" ref="dialog" @update="update"></v-info>
</div>
</template>

<script>
import VList from "./vlist";
import VInfo from "./vinfo";
export default {
    data() {
        return {
            info: {
                //这是组件的info变量
                isAdd: false,
                isShow: false,
            },
            list: [],
        };
    },
    methods: {
        add() {
            this.info.isAdd = this.info.isShow = true;
        },
        edit(val) {
            this.info.isAdd = false;
            this.info.isShow = true;
            //调用弹窗组件的setinfo方法
            this.$refs.dialog.setinfo(val); //调用组件的获取数据列表的方法
        },
        update() {
            this.$refs.list.get_list();
        },
    },
    components: {
        VList,
        VInfo,
    },
};
</script>

<style scoped>
</style>
