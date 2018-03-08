<template>
    <el-row>
        <el-col :span="4">
            <img class="logo" src="../../assets/logo.png" alt="">
        </el-col>
        <!-- 中间导航区域 -->
        <el-col :span="20" >
            <el-menu
                    :default-active="activeIndex2"
                    class="menu"
                    router
                    mode="horizontal"
                    @select="handleSelect"
                    style="float: right;">
                <el-menu-item index="1">欢迎回来：admin</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">管理</template>
                    <el-menu-item index="2-1">修改信息</el-menu-item>
                    <el-menu-item index="2-2">修改图像</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">退出</a></el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name: "header_block"
    }
</script>

<style scoped>

    .logo {
        margin: 0 5px;
        width: 60px;
        height: 60px;
    }

</style>