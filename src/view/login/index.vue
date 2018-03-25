<template>
    <el-row>
        <el-row class="paddingTop-60">
            <el-col :span="16" :offset="4">
                <img src="../../assets/images/logo.png" alt="">
            </el-col>
        </el-row>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px"
                 class="paddingTop-60">
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-form-item label="用户名" prop="account">
                        <el-input type="text" v-model="loginForm.account" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                        <el-button @click="resetForm('loginForm')">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-row>
</template>
<script>
    export default {
        data() {
            var validateAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                }else{
                    callback();
                }
            };
            var validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else{
                    callback();
                }
            };
            return {
                loginForm: {
                    account: '',
                    password: '',
                },
                rules: {
                    account: [
                        {validator: validateAccount, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios({
                            method : 'POST',
                            url:'/login',
                            data:{
                                'account' : 'zhimma',
                                'password' : '123456'
                            }
                        }).then(function(){

                        });
                    } else {
                        console.log(111);
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style>
    img{
        text-align:center;
        margin:0 auto;
        display:block;
    }
</style>