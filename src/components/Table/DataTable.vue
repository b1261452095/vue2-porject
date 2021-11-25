<template>
    <div class="tl-rl">
        <template>
            <el-table
                    v-loading="table.loading"
                    :show-summary="table.hasShowSummary"
                    :summary-method="table.getSummaries"
                    ref="TlRlTable"
                    :data="table.data"
                    :fit="table.fit"
                    :stripe="table.stripe"
                    tooltip-effect="light"
                    :border="table.border"
                    style="width: 100%;"
                    :row-class-name="table.rowClassName"
                    :span-method="objectSpanMethod"
                    header-row-class-name="thClassName"
                    :header-cell-class-name='thClassName'
                    @selection-change="handleSelectionChange"
                    @current-change="handlerAdioChange"
                    @row-click="rowClick"
                    highlight-current-row
                    row-key="id"
                    :height="table.height"
            >
                <!-- highlight-current-row
                @current-change="handleCurrentChange"-->
                <el-table-column v-if="table.hasSelect" type="selection" width="55" fixed="left"></el-table-column>
                <el-table-column label="单选" width="55" v-if="table.hasRadio">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checked"></el-checkbox>
                    </template>
                </el-table-column>
                <!-- <el-table-column v-if="table.hasSelect" type="selection" width="55" fixed="center"></!-->

                <el-table-column type="index" label="序号" width="60" vi-if="isFlage" fixed></el-table-column>
                <el-table-column type="expand" v-if="table.hasExpand" fixed="center">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item :label="item.label" v-for="item in table.expands" :key="item.id">
                                <span>{{ props.row[item.prop] }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <template v-for="item in table.tr">
                    <el-table-column
                            v-if="item.show !== false && item.show === 'template'"
                            :label="item.label"
                            :class-name="item.className ? item.className : ''"
                            :key="item.id"
                            :width="item.width ? item.width : ''"
                            :min-width="item.minWidth ? item.minWidth : ''"
                            :fixed="item.fixed? item.fixed : false"
                            :show-overflow-tooltip="true"
                            :formatter="formatter"
                    >
                        <template slot-scope="scope">
                            <slot :name="item.prop" :row="scope.row"></slot>
                        </template>
                    </el-table-column>
                    <el-table-column
                            v-else-if="item.show !== false && item.show !== 'template'"
                            :label="item.label"
                            :prop="item.prop"
                            :class-name="item.className ? item.className : ''"
                            :key="item.id"
                            :width="item.width ? item.width : ''"
                            :min-width="item.minWidth ? item.minWidth : ''"
                            :fixed="item.fixed? item.fixed : false"
                            :show-overflow-tooltip="true"
                            :formatter="formatter"
                    ></el-table-column>
                </template>
                <div v-if="table.hasOperation">
                    <template v-for="operation in table.operation">
                        <el-table-column
                                v-if="operation"
                                :key="operation"
                                column-key="operation"
                                :label="operation.label"
                                :width="operation.width ? operation.width : ''"
                                :min-width="operation.minWidth ? operation.minWidth : ''"
                                :class-name="operation.className"
                                :fixed="operation.fixed? operation.fixed : false"
                                :show-overflow-tooltip="true"
                        >
                            <template slot-scope="scope">
                                <el-button
                                        v-for="item in operation.data"
                                        :class="item.classname ? item.classname : ''"
                                        :key="item.id"
                                        :type="item.type"
                                        :size="item.size"
                                        @click.stop="handleOperation(scope.$index, scope.row, item.id)"
                                >{{ item.label }}
                                </el-button>
                            </template>
                        </el-table-column>
                    </template>
                </div>
            </el-table>
        </template>
    </div>
</template>

<script>
    export default {
        name: "myTable",
        props: {
            table: {
                type: Object,
                default() {
                    return {
                        hasMergeRowOrColumn: false, // 是否合并单元格
                        loading: false, // 加载中动画
                        hasShowSummary: false, // 是否显示表位合计行
                        fit:false,//列的宽度是否自撑开
                        border: false, // 是否带有纵向边框，默认为false
                        hasSelect: false, // 有无选中功能
                        hasOperation: false, // 有无操作功能
                        hasExpand: false, // 有无展开行功能
                        hasRadio: false, //有无单选功能
                        stripe: false, //有无斑马线
                        rowClassName: "rowClassName", // 给某行添加一个样式
                        tr: [
                            // 表头数据 —— className:列的class名
                            {
                                id: "1",
                                label: "label",
                                prop: "prop",
                                className: "classname",
                                minWidth: "80",
                                show: true,
                                formatter: (row,column,cellValue)=>{
                                    console.log('formatter',row,column,cellValue)
                                }// show有三种值：false隐藏当前列，true常规表格列，template自定义表格列
                                //          <template slot-scope="props" slot="example">
                                //                <a class="list-a" target="_blank" :href="'/#/bombscreen?mobile=' + props.obj.row.mobile">{{ props.obj.row.username }}</a>
                                //          </template>
                            }
                        ],
                        data: [], // 表格数据 —— 如需添加行class，处理数据时则需要传入class名， class需为数组
                        operation: {
                            // 操作功能
                            label: "操作", // 操作列的行首文字
                            width: "200", // 操作列的宽度
                            className: "", // 操作列的class名
                            data: [
                                // 操作列数据
                                {
                                    label: "通过", // 按钮文字
                                    Fun: "handleSubmit", // 点击按钮后触发的父组件事件
                                    type: "text", // 按钮类型
                                    size: "mini", // 按钮大小
                                    id: "1", // 按钮循环组件的key值
                                    classname: "show" // 按钮的类名
                                }
                            ]
                        },
                        expands: [
                            // 展开行数据
                            {
                                id: "1",
                                label: "label",
                                prop: "prop"
                            }
                        ],
                        getSummaries(param) {
                            // 自定义表位合计行数据
                            // *** 此函数传入param参数
                            console.log(param);
                            // *** 最后返回一个数组，合计行会显示数组中的内容
                            return [];
                        }
                    };
                }
            },
            height: {
                type: Number
            }
        },
        create() {
        },
        methods: {
            handlerAdioChange(row) {
                console.log(row)
                // this.table.data.forEach(item => {
                //   // 排他,每次选择时把其他选项都清除
                //   if (item.id !== row.id) {
                //     item.checked = false;
                //   } else {
                //     item.checked = true;
                //   }
                // });
                // this.$emit("onHandlerAdioChange", row);
            },
            handleSelectionChange(val) {
                this.$emit("onHandleSelectionChange", val);
            },
            handleOperation(a, b, id) {
                this.table.operation.map(item => {
                    item.data.map(itemC => {
                        if (id === itemC.id) {
                            this.$emit(itemC.Fun, a, b);
                        }
                    });
                });
            },
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                if (!this.hasMergeRowOrColumn) {
                    return;
                } else {
                    this.$emit("onMergeRowOrColumn", {
                        row,
                        column,
                        rowIndex,
                        columnIndex
                    });
                }
            },
            // 点击某一行时触发的函数
            // *** 按下左键然后移动鼠标到其它列放开左键，会有报错 -- 优化：添加点击行参数，
            rowClick(Row, Event, Column) {
                if (
                    !Column ||
                    Column.type === "selection" ||
                    Column.columnKey === "operation" ||
                    Column.type === "expand"
                ) {
                    return;
                }
                const data = {
                    row: Row,
                    event: Event,
                    column: Column
                };
                this.$emit("onRowClick", data);
            },
            // 行类名的回调函数
            // 在表格数据中添加class字段即为表格行类名，配合css可对表格行中的自定义标签进行样式优化
            rowClassName(rowdata) {
                const data = this.table.data;
                let className = data[rowdata.rowIndex].class
                    ? data[rowdata.rowIndex].class
                    : "";
                return className;

                // -----------------------------------------
                // const data = this.table.data;
                // let className = data[rowdata.rowIndex].class
                //   ? data[rowdata.rowIndex].class
                //   : "";
                // if (className.length === 0) {
                //   return;
                // }
                // className = className.join(" ");
                // return className;
            },

            //表头类名回调函数Function({row, column, rowIndex, columnIndex})/String
            thClassName(row, column, rowIndex, columnIndex) {
                console.log(column, rowIndex, columnIndex)
                const tr = this.table.tr;
                console.log(tr, row.columnIndex)
                // let thClassName = tr[row.columnIndex].align ? tr[row.columnIndex].align : ""
                // return thClassName
            },
            selectAll(selection) {
                console.log(selection);
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
