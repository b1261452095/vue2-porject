<template>
    <div class="content-box">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="真实姓名">
                            <el-input v-model="form.real_name"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-select v-model="form.sex_value" placeholder="请选择性别">
                                <el-option label="男" value="男"></el-option>
                                <el-option label="女" value="nv"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="注册时间">
                            <el-col >
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.regist_time" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="上次登录时间">
                            <el-col>
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.login_time" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="用户状态">
                            <el-select v-model="form.status_value" placeholder="请选择状态">
                                <el-option label="注销" value="1"></el-option>
                                <el-option label="常客" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">保存</el-button>
                            <el-button type="primary" @click="resetForm('form')">重置</el-button>
                            <el-button @click="$router.back()">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "From",
        props:['rowData'],
        data() {
            return {
                form: {
                    username: '',
                    real_name: '',
                    sex_value: '',
                    regist_time: '',
                    login_time: false,
                    status_value:''

                },
                dynamicValidateForm: {

                },
                emailRule:[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]
            }
        },
        methods: {
            onSubmit() {
                var tableData = JSON.parse(localStorage.getItem('rowData'))
                if(!tableData){
                    tableData = []
                }
                tableData.push(this.form)
                localStorage.setItem('rowData',JSON.stringify(tableData))
                this.$alert('保存成功').then(()=>{
                    this.$router.back()
                })

            },
            resetForm(formName){
                this.$refs[formName].resetFields();
                this.$refs[formName].clearValidate();
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">

</style>
