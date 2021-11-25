<template>
    <div class="content-box">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <div class="block">
                        <span class="demonstration">默认不区分颜色1</span>
                        <el-rate v-model="value1"></el-rate>
                    </div>
                    <div class="block">
                        <span class="demonstration">区分颜色1</span>
                        <el-rate
                                v-model="value2"
                                :colors="colors">
                        </el-rate>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <div class="block">
                        <span class="demonstration">有默认值</span>
                        <el-color-picker v-model="color1"></el-color-picker>
                    </div>
                    <div class="block">
                        <span class="demonstration">无默认值</span>
                        <el-color-picker v-model="color2" @change="changeColor"></el-color-picker>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-transfer v-model="value" :data="data"></el-transfer>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Rate",
        data(){
            const generateData = () => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `备选项 ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value: [1,3, 4],
                value1: null,
                value2: null,
                color1: null,
                color2: '#99A9BF',
                colors: ['#99A9BF', '#F7BA2A', '#FF9900','#F7BA2A','#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            }
        },
        methods:{
            changeColor(val){
                alert(val)
            }
        },
        mounted() {
            console.log(this.data)
        }
    }
</script>

<style lang="scss">
    .block{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .demonstration{
        margin-right: 20px;

    }
</style>
