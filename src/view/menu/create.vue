<template>
    <el-row>
        <el-col :span="12" :offset="6">
            <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" status-icon label-width="100px">
                <el-form-item label="菜单名称" prop="name">
                    <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="菜单链接" prop="url">
                    <el-input type="text" v-model="ruleForm.url" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="父级菜单" prop="parent_id">
                    <el-select v-model="ruleForm.parent_id" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="菜单图标" prop="icon">
                    <el-input type="text" v-model="ruleForm.icon" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="菜单排序" prop="sort">
                    <el-input type="number" v-model="ruleForm.sort" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <router-link to="/menu">
                        <el-button type="danger">取消并返回</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>

</template>

<script>
    export default {
        name: "create",
        data() {
            var validateName = (rule , value , callback) => {
                if(value=== ''){
                    return callback(new Error('菜单名称不能为空'));
                }else{
                    return callback();
                }
            };
            var validateUrl = (rule , value , callback) => {
                if(!value){
                    return callback(new Error('URL不能为空'));
                }else{
                    return callback();
                }
            };
            var validateParentId = (rule , value , callback) => {
                if(!value){
                    return callback(new Error('父级菜单不能为空'));
                }else{
                    return callback();
                }
            };
            var validateIcon = (rule , value , callback) => {
                if(!value){
                    return callback(new Error('菜单图标不能为空'));
                }else{
                    return callback();
                }
            };
            var validateSort = (rule , value , callback) => {
                if(!value){
                    return callback(new Error('菜单排序不能为空'));
                }else{
                    return callback();
                }
            };
            return {
                ruleForm: {
                    name: '',
                    url: '',
                    parent_id: '',
                    icon: '',
                    sort: '',
                },
                rules :{
                    name:[{validator:validateName,trigger:'blur'}],
                    url:[{validator:validateUrl,trigger:'blur'}],
                    parent_id:[{validator:validateParentId,trigger:'blur'}],
                    icon:[{validator:validateIcon,trigger:'blur'}],
                    sort:[{validator:validateSort,trigger:'blur'}]
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
        methods : {
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios({
                            method:"POST",
                            url: '/menu',
                            data: this.ruleForm
                        });
                    }else{
                        console.log('err');
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>