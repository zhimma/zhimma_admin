<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }
    a {
        color: #3c8dbc;
        text-decoration: none;
    }
    ::-webkit-scrollbar {
        width: 4px;
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #3e8dbb;
    }
    .el-menu .fa {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
    }
    .el-menu .fa:not(.is-children) {
        font-size: 14px;
    }
    .paddingTop-60{
        padding-top: 60px;
    }
</style>
