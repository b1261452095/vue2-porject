<template>
    <div class='content-box'>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-radio-group text-color="#eeeeee" v-model="radio" @change="change">
                        <el-radio-button v-for="city in area " :label="city" :key="city"></el-radio-button>
                    </el-radio-group>
                </div>

            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <div>
                        <el-checkbox :disabled="disable" v-model="checked" @change='checkChange'>备选项</el-checkbox>
                    </div>
                </div>
            </el-col>

        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-light">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
                    </el-checkbox>
                    <div style="margin: 15px 0;"></div>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in area" :label="city" :key="city"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content data-content">
                    <div class="demo-input-suffix">
                        属性方式：
                        <el-input
                                placeholder="请选择日期"
                                suffix-icon="el-icon-date"
                                v-model="radio">
                        </el-input>
                        <el-input
                                placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                v-model="radio">
                        </el-input>
                    </div>
                    <div class="demo-input-suffix">
                        slot 方式：
                        <el-input
                                placeholder="请选择日期"
                                v-model="radio">
                            <i slot="suffix" class="el-input__icon el-icon-date"></i>
                        </el-input>
                        <el-input
                                placeholder="请输入内容"
                                v-model="radio">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>

                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <div>
                        <el-input placeholder="请输入内容" v-model="radio">
                            <template slot="prepend">Http://</template>
                        </el-input>
                    </div>
                    <div style="margin-top: 15px;">
                        <el-input placeholder="请输入内容" v-model="radio">
                            <template slot="append">.com</template>
                        </el-input>
                    </div>
                    <div style="margin-top: 15px;">
                        <el-input placeholder="请输入内容" v-model="radio" class="input-with-select">
                            <el-select v-model="select" slot="prepend" placeholder="请选择">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-row class="demo-autocomplete">
                        <el-col :span="12">
                            <div class="sub-title">激活即列出输入建议</div>
                            <el-autocomplete
                                    class="inline-input"
                                    v-model="state1"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入内容"
                                    @select="handleSelect"
                                    highlight-first-item="true"
                                    prefix-icon="el-input__icon el-icon-date"
                            ></el-autocomplete>
                        </el-col>
                        <el-col :span="12">
                            <div class="sub-title">输入后匹配输入建议</div>
                            <el-autocomplete
                                    class="inline-input"
                                    v-model="state2"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入内容"
                                    :trigger-on-focus="false"
                                    @select="handleSelect"
                            ></el-autocomplete>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Button",
        data() {
            return {
                num: 1,
                restaurants: [],
                state1: '',
                state2: '',
                isIndeterminate: true,
                checkAll: false,
                checked: false,
                disable: false,
                select:'',
                radio: '上海',
                checkedCities: ['上海', '北京'],
                area: ['上海', '深圳', '北京', '南京']
            }
        },
        methods: {
            change(v) {
                console.log(v)
            },
            checkChange(v) {
                let that = this
                if (v) that.disable = false
                else that.checked = true
            },
            handleChange(val){
                console.log(val)
            },
            handleCheckAllChange(val) {
                alert(val)
                this.checkedCities = val ? this.area : []
                this.isIndeterminate = false
            },
            handleCheckedCitiesChange(val) {
                let checkCount = val.length
                let cityLength = this.area.length
                this.checkAll = cityLength === checkCount
                this.isIndeterminate = checkCount > 0 && checkCount < cityLength
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                console.log(this.createFilter(queryString))
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
                };
            },
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style lang="scss">
    .content-box {
        text-align: left;
        .data-content .el-input{
            width: 200px;
            margin:0 20px 20px 0;
            &:last-child {
                margin: 0;
            }
        }
    }

    .el-row {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        padding:20px;
        border-radius: 4px;
        min-height: 36px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>
