<template>
    <el-container>
        <el-header>
            <header-ma></header-ma>
        </el-header>
        <el-container>
            <el-aside width="200px"><aside-ma></aside-ma></el-aside>
            <el-container>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
        <el-footer><footer-ma></footer-ma></el-footer>
    </el-container>

</template>

<script>
    import headerMa from '../layout/headerMa';
    import footerMa from '../layout/footerMa';
    import asideMa from '../layout/asideMa';
    import ElContainer from "element-ui/packages/container/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElAside from "element-ui/packages/aside/src/main";

    export default {
        name: "layout",
        components: {
            ElAside,
            ElMain,
            ElContainer,
            headerMa, footerMa, asideMa
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>