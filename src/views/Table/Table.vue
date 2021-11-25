<template>
    <div class="container">
        <div class="btn-box">
            <el-button type="primary" @click="add">新增</el-button>
            <el-button>修改</el-button>
        </div>
        <dataTable :table="tableData"
                   @deleteItem="deleteItem"
                   @showItem="showItem"
                   @onHandleSelectionChange="onHandleSelectionChange">
        </dataTable>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                append-to-body =true
                width="30%"
                :before-close="handleClose">
            <span></span>
            <div>
                <div><span>用户名：</span>{{rowData.username}}</div>
                <div><span>真实姓名：</span>{{rowData.real_name}}</div>
                <div><span>性别：</span>{{rowData.sex_value}}</div>
                <div><span>注册时间：</span>{{rowData.regist_time}}</div>
                <div><span>上次登录时间：</span>{{rowData.login_time}}</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
    </div>
</template>

<script>
    import dataTable from "./dataTable";
    export default {
        name: "Table",
        components:{
            dataTable
        },
        data(){
            return {
                rowData:{},
                dialogVisible:false,
                tableData: {
                    border: false, // 是否带有纵向边框，默认为false
                    loading: true, // 加载中动画
                    hasSelect: true, // 有无选中功能
                    hasOperation: true, // 有无操作功能
                    fit:true,
                    stripe:true, // 带条纹的
                    rowClassName:"rowClassName", // 给某行添加一个样式
                    height:'750', //表格高度
                    tr: [
                        {
                            id: "1",
                            label: "用户名",
                            prop: "username",
                            /*             show: "template",
                                        className: "username", */
                            align:'th-center',
                            minWidth: "200",
                        },
                        {
                            id: "2",
                            label: "真实姓名",
                            prop: "real_name",
                            align:'th-right',
                            minWidth: "200",
                        },
                        {
                            id: "3",
                            label: "性别",
                            prop: "sex_value",
                            minWidth: "200",
                        },
                        {
                            id: "8",
                            label: "注册时间",
                            prop: "regist_time",
                            minWidth: "200",
                        },
                        {
                            id: "9",
                            label: "上次登录时间",
                            prop: "login_time",
                            minWidth: "200",
                            formatter(row, column, cellValue) {
                                console.log('formatter',row,column,cellValue)
                                return 1
                                // return cellValue ? fecha.format(new Date(cellValue), 'YYYY-MM-DD') : '';
                            },
                        },
                        {
                            id: "10",
                            label: "用户状态",
                            show: "template",
                            prop: "status_value",
                            minWidth: "200",
                        },
                    ],
                    operation: [
                        {
                            label: "操作",
                            minWidth: "200",
                            fixed:'right',
                            data: [
                                {
                                    id: "1",
                                    label: "删除",
                                    Fun: "deleteItem",
                                    type:'danger'
                                },
                                {
                                    id: "2",
                                    label: "查看详情",
                                    type: "info",
                                    Fun: "showItem",
                                },
                            ],
                        },
                    ],
                    data: [],
                },
                pageTotal: 40,
                pageSize: 20,
                currentPage: 2,
            }
        },
        methods:{
            deleteItem(a, b){
                 this.$confirm('是否确认删除？')
                    .then(() => {
                        this.tableData.data.splice(b,1)
                        localStorage.setItem('rowData',JSON.stringify(this.tableData.data))
                    })
                console.log('deleteItem',a,'-----',b)
            },
            showItem(a,b){
                console.log('showItem',a,'-----',b)
                this.rowData = b
                this.dialogVisible = true
            },
            onHandleSelectionChange(val){
                console.log('onHandleSelectionChange',val)
            },
            //新增数据
            add(){
                this.$router.push('/table/add')
            },
            modify(){
                // sessionStorage.setItem('editRow',JSON.)
            },
            handleClose(done) {
                console.log(done)
               /* this.$confirm('确认关闭？')
                    .then(_ => {
                        console.log(_)
                        done();
                    })
                    .catch(_ => {console.log(_)});*/
            },
            dateFormat(row, column, cellValue) {
                console.log('formatter',row,column,cellValue)
                return 1
                // return cellValue ? fecha.format(new Date(cellValue), 'YYYY-MM-DD') : '';
            }
        },
        created() {
            this.tableData.loading = false
           /* let data=[{
                username: "帝释天",
                real_name:"张三",
                regist_time:'2021-01-07',
                login_time:'2021-01-07',
                sex_value:'男',
                status_value: "1",
            },
                {
                    username: "雄霸",
                    real_name:"李四",
                    regist_time:'2021-01-07',
                    login_time:'2021-01-07',
                    sex_value:'男',
                    status_value: "1",
                },
                {
                    username: "雄霸",
                    real_name: "李四",
                    regist_time: '2021-01-07',
                    login_time: '2021-01-07',
                    sex_value: '男',
                    status_value: "1",
                }]*/
          /*  localStorage.setItem('rowData',JSON.stringify(data))*/
        },
        mounted() {
            this.tableData.data = JSON.parse(localStorage.getItem('rowData'))
        }
    }
</script>

<style lang="scss">
    .container{
        height: 100%;
    }
    .btn-box{
        padding:10px 0;
        text-align: left;
    }
</style>
