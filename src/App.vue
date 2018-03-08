<template>
    <div id="app">
        <el-container>
            <el-header>
                <header-block></header-block>
            </el-header>
            <el-aside>
                <nav-block></nav-block>
            </el-aside>

            <el-main>
                <!-- 添加一个element-ui内置的过渡动画 -->
                <transition name="el-zoom-in-center">
                    <router-view></router-view>
                </transition>
            </el-main>

            <el-footer>
                <!-- 底部组件渲染 -->
                <footer-block></footer-block>
            </el-footer>

        </el-container>
    </div>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import HeaderBlock from "./components/layout/header_block";
    import NavBlock from "./components/layout/nav_block";
    import FooterBlock from "./components/layout/footer_block";

    export default {
        components: {
            ElHeader,
            ElContainer,
            HeaderBlock,
            FooterBlock,
            NavBlock,
        },
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .el-header {
        padding: 0 0px;
    }
    .el-aside {
        padding-top:20px;
    }
</style>
