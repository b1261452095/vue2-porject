<template>
    <el-aside id="asideNav" width="">
        <div class="logo-name">
            <p v-if="!isCollapse">后台管理系统</p>
            <p v-else>菜单</p>
        </div>
        <el-menu class="el-menu-vertical "
                 background-color="#03152A"
                 text-color="rgba(255,255,255,.7)"
                 active-text-color="#ffffff"
                 :router="isRouter"
                 :collapse="isCollapse">
            <menu-tree :menuData="menu"></menu-tree>
        </el-menu>
    </el-aside>
</template>

<script>
    import MenuTree from "./MenuTree";
    import bus from "../../assets/js/bus";
    // import router from "../../router";
    export default {
        name: "Aside",
        components: {
            MenuTree
        },
        props: ['hideAside'],
        data() {
            return {
                isRouter: true,
                isCollapse: false,
                menu: [
                    {id: 1, name: '主页', path: '/home', iconClass: 'el-icon-s-home', children: []},
                    {
                        id: 2, name: '表格', path: '/table', iconClass: 'el-icon-s-data', children: [
                            {id: 2 - 1, name: '表单', path: '/form', iconClass: 'el-icon-s-data', children: []},
                            {id: 2 - 2, name: '可编辑表格', path: '/table', iconClass: 'el-icon-s-data', children: []}
                        ]
                    },
                    {
                        id: 3, name: '按钮', path: '/', iconClass: 'el-icon-menu', children: [
                            {id: 3 - 1, name: '普通按钮', path: '/button', iconClass: 'el-icon-menu', children: []},
                            {id: 3 - 2, name: '选择下拉组件', path: '/select', iconClass: 'el-icon-menu', children: []},
                            {id: 3 - 3, name: '上传组件', path: '/upload', iconClass: 'el-icon-menu', children: []},
                            {id: 3 - 3, name: '评分', path: '/rate', iconClass: 'el-icon-menu', children: []}
                        ]
                    }
                ]
            }
        },
        mounted() {
            bus.$on('isCollapse', (e) => {
                this.isCollapse = e
            })
        }
    }
</script>

<style lang="scss">
    %w100 {
        width: 100%;
    }

    %h100 {
        height: 100%;
    }

    %cursor {
        cursor: pointer;
    }

    #asideNav {
        width: auto !important;
        display: flex;
        flex-direction: column;

        .logo-name {
            @extend %w100;
            background-color: #03152A !important;
            font-weight: 300;
            z-index: 999;
            transition: opacity 0.2s cubic-bezier(0.6, 0, 0.4, 1) 0s, transform 0.2s ease-in-out 0s;

            p {
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                color: #5e6d82;
                transition: opacity 0.2s cubic-bezier(0.6, 0, 0.4, 1) 0s, transform 0.2s ease-in-out 0s;
            }
        }

        .el-menu-vertical:not(.el-menu--collapse) {
            width: 200px;
            @extend %h100;
            overflow-y: scroll;
            overflow-x: hidden;
        }

        .el-menu-vertical.el-menu--collapse .menuName {
            display: none;
        }


        .el-menu {
            flex: 1;
            overflow: inherit;
            border-right: none;
            text-align: left;

            &::-webkit-scrollbar {
                display: none;
            }

            .el-menu-item {
                background-color: #020f1d !important;
                border-bottom: 1px solid #020f1d;

                &:hover {
                    background: #375573 !important;
                    color: #ffffff !important;
                }
            }

            .el-menu-item.is-active {
                background: #56a9ff !important;
            }

            .is-opened > .el-submenu__title > .el-icon-arrow-down {
                color: #ffffff;
                font-weight: 500;
                font-size: 18px;
            }
        }
    }
</style>
