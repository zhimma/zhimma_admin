<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
                {{isCollapse?'':sysName}}
            </el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="collapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner"><img/> zhimma</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span=24 class="main">
            <aside :class="isCollapse?'menu-isCollapse':'menu-expanded'">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                         :collapse="isCollapse">

                    <el-menu-item index="1">
                        <i class="el-icon-setting"></i>
                        <span slot="title">主页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">菜单管理</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/menu" >
                                <el-menu-item index="2-1">菜单列表</el-menu-item>
                            </router-link>

                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">文章管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">文章列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">用户列表</el-menu-item>
                    </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </aside>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container pt20" >
                        <!--<strong class="title">{{$route.name}}</strong>-->
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                                {{ item.name }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <hr>
                    <el-col :span="24" class="content-wrapper pt20">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "layout",
        components: {},
        data() {
            return {
                sysName: 'zhimma_admin',
                isCollapse: false
            }
        },
        methods: {
            //折叠导航栏
            collapse: function () {
                this.isCollapse = !this.isCollapse;
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~scss_vars';

    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .header {
            height: 60px;
            line-height: 60px;
            background: $color-primary;
            color: #fff;
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    cursor: pointer;
                    color: #fff;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0px 10px 10px;
                        float: right;
                    }
                }
            }
            .logo {
                //width:230px;
                height: 60px;
                font-size: 22px;
                padding-left: 20px;
                padding-right: 20px;
                border-color: rgba(238, 241, 146, 0.3);
                border-right-width: 1px;
                border-right-style: solid;
                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }
                .txt {
                    color: #fff;
                }
            }
            .logo-width {
                width: 230px;
            }
            .logo-collapse-width {
                width: 64px
            }
            .tools {
                padding: 0px 23px;
                width: 14px;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
            }
        }
        .main {
            display: flex;
            // background: #324057;
            position: absolute;
            top: 60px;
            bottom: 0px;
            overflow: hidden;
            aside {
                flex: 0 0 230px;
                width: 230px;
                // position: absolute;
                // top: 0px;
                // bottom: 0px;
                .el-menu {
                    height: 100%;
                }
                .isCollapse {
                    width: 60px;
                    .item {
                        position: relative;
                    }
                    .submenu {
                        position: absolute;
                        top: 0px;
                        left: 60px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }

                }
            }
            .menu-isCollapse {
                flex: 0 0 60px;
                width: 60px;
            }
            .menu-expanded {
                flex: 0 0 230px;
                width: 230px;
            }
            .content-container {
                flex: 1;
                 position: absolute;
                 right: 0px;
                 top: 0px;
                 bottom: 0px;
                 left: 230px;
                overflow-y: scroll;
                padding: 20px;
                .breadcrumb-container {
                    margin-bottom: 15px;
                    .title {
                        width: 200px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: left;
                    }
                }
                .content-wrapper {
                    background-color: #fff;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>