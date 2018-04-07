<template>
    <el-row>
        <el-row class="pt60">
            <el-col :span="12" :offset="6">
                <img src="../../assets/images/logo.png">
            </el-col>
        </el-row>
        <el-row class="pt60">
            <el-col :span="12" :offset="6">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                         class="demo-ruleForm">
                    <el-form-item label="账号" prop="account">
                        <el-input type="text" v-model="ruleForm.account" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-row>
</template>


<script>
    export default {
        data() {
            var validateAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            var validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    account: '',
                    password: '',
                },
                rules: {
                    account: [
                        {validator: validateAccount, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios({
                            method: 'POST',
                            url: '/login',
                            data: {
                                'account': this.ruleForm.account,
                                'password': this.ruleForm.password
                            }
                        }).then(
                            response => {
                                if (response.data.status == 1) {
                                    sessionStorage.setItem(this.$Config.tokenKey, response.data.data.token);
                                    sessionStorage.setItem('userData', response.data.data.data);
                                    this.$store.state.token = response.data.data.token;
                                    // this.getMenus(response.data.data.data.id);
                                    this.$router.push({path: '/'})
                                } else {
                                    alert(response.data.msg);
                                }

                            }
                        );
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getMenus(id) {
                this.$axios({
                    method: 'GET',
                    url: '/menus/' + id,
                }).then(response=>{
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>
    img {
        text-align: center;
        margin: 0 auto;
        display: block;
    }
</style>