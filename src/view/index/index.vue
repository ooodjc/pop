<template>
    <div class="common-layout">
        <el-container class="container">
            <el-aside>
                <el-scrollbar wrap-class="scrollbar-wrapper">
                    <el-menu
                    background-color="#545c64"
                    text-color="#bfcbd9"
                    active-text-color="#ffd04b"
                    class="el-menu-vertical"
                    >
                        <el-menu-item @click="data.page = 0">页面一</el-menu-item>
                        <el-menu-item @click="data.page = 1">页面二</el-menu-item>
                        <el-menu-item @click="data.page = 2">页面三</el-menu-item>
                        <el-menu-item @click="data.page = 3">页面四</el-menu-item>
                        <el-menu-item @click="data.page = 5">渲染</el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main>
                <Edit :page="data.page" v-if="data.page !== 5" />
                <Render v-else/>
            </el-main>
        </el-container>
    </div>
</template>  

<script setup name="Index">
import Edit from './components/edit.vue';
import Render from './components/render.vue';

const renderData = useStore().state.renderData;

const data = reactive({
    page: 0,
})
</script>

<style lang="scss" scoped>
.container{
    .el-aside{
        width: 100px;
    }
}
.el-menu-vertical{
    height: 100vh;
    width: 100%;
}
</style>