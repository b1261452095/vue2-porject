<template>
    <div>
        <label v-for="(child,index) in menuData " :key="index">
            <el-submenu v-if="child.children.length>0" :index="child.path">
                <template slot="title">
                    <i :class="child.iconClass"></i>
                    <span class="menuName" slot="title">{{child.name}}</span>
                </template>
                <MenuTree :menuData="child.children"></MenuTree>
            </el-submenu>
            <el-menu-item :index="child.path" v-else>
                <i :class="child.iconClass"></i>
                <span slot="title" class="menuName">{{child.name}}</span>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
    export default {
        name: "MenuTree",
        props:{
            menuData:Array
        }
    }
</script>

<style scoped>

</style>
