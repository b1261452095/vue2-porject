<template>
    <div class="content-box">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <span>基础单选下拉选择：</span>
                    <el-select v-model="value" clearable filterable placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled"
                        >
                        </el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
          <el-row>
              <el-col :span="24">
                  <div class="grid-content moreSelect">
                      <span>基础多选下拉选择：</span>
                      <el-select v-model="value1" multiple placeholder="请选择">
                          <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                  :disabled="item.disabled"
                          >
                              <span style="float: left">{{ item.label }}</span>
                              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                          </el-option>
                      </el-select>
                      <el-select v-model="value1" multiple collapse-tags placeholder="请选择">
                          <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                  :disabled="item.disabled"
                          >
                          </el-option>
                      </el-select>
                  </div>
              </el-col>
          </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content moreSelect">
                    <span>分组展示下拉：</span>
                    <el-select v-model="value" filterable placeholder="请选择">
                        <el-option-group
                                v-for="group in options1"
                                :key="group.label"
                                :label="group.label">
                            <el-option
                                    v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-option-group>
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content moreSelect">
                    <span>远程加载数据：</span>
                    <el-select v-model="value" filterable placeholder="请选择">
                        <el-option-group
                                v-for="group in options1"
                                :key="group.label"
                                :label="group.label">
                            <el-option
                                    v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-option-group>
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content moreSelect">
                    <span>switch开关：</span>
                    <el-switch v-model="isOpen" active-text="按月付费" inactive-text="按年付费" active-color="#13ce66"
                               inactive-color="#ff4949">

                    </el-switch>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content moreSelect">
                    <span>slider滑块：</span>
                    <el-slider v-model="optionsValue">
                    </el-slider>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content moreSelect">
                    <span>时间选择器：</span>
                    <el-time-picker v-model="value2" :picker-options="{
                        selectableRange: '00:00:00 - 23:59:59'
                    }" placeholder="请选择任意时间点">
                    </el-time-picker>
                    <el-time-picker
                            is-range
                            v-model="value2"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围">
                    </el-time-picker>
                    <el-time-picker
                            is-range
                            arrow-control
                            v-model="value3"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围">
                    </el-time-picker>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="11">
                <div class="grid-content moreSelect">
                    <span>日期选择器：</span>
                    <el-date-picker
                            v-model="value4"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="11" style="float: right">
                <div class="grid-content moreSelect">
                    <span>日期选择器带快捷选项：</span>
                    <el-date-picker
                            v-model="value5"
                            align="right"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Select",
        data() {
            return {
                optionsValue: 0,
                isOpen: true,
                options: [{
                    value: '选项1',
                    label: '黄金糕',
                    disabled: true
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
                options1: [{
                    label: '热门城市',
                    options: [{
                        value: 'Shanghai',
                        label: '上海'
                    }, {
                        value: 'Beijing',
                        label: '北京'
                    }]
                }, {
                    label: '城市名',
                    options: [{
                        value: 'Chengdu',
                        label: '成都'
                    }, {
                        value: 'Shenzhen',
                        label: '深圳'
                    }, {
                        value: 'Guangzhou',
                        label: '广州'
                    }, {
                        value: 'Dalian',
                        label: '大连'
                    }]
                }],
                value: '',
                value1:'',
                value2: new Date(),
                value3: new Date(),
                value4:'',
                value5:'',
                pickerOptions:{
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '前天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24*2);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                }
            }
        },
        methods: {
            changeValue() {
                let flag = true;
                setInterval(() => {
                    if (this.optionsValue == 0) {
                        flag = true
                    } else if (this.optionsValue == 100) {
                        flag = false
                    }
                    flag ? this.optionsValue += 1 : this.optionsValue -= 1
                },)
            }

        },
        mounted() {
            this.changeValue();
        }
    }
</script>

<style lang="scss">
    .content-box {
        text-align: left;

        .data-content .el-input {
            width: 200px;
            margin: 0 20px 20px 0;

            &:last-child {
                margin: 0;
            }
        }

        .moreSelect {
            .el-select {
                width: 400px;
                margin-right: 20px;
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
        padding: 20px;
        border-radius: 4px;
        min-height: 36px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>
