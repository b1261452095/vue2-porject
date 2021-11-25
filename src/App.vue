<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


    export default {
name: 'App',
        data() {
            return {}
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

    #app {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        .el-header,.el-footer{
            padding:0 !important;
            height: auto!important;
        }
    }

/*    .rooter {
        background: #eeeeee;
    }*/

    .el-main {
    }

    .el-container {
        @extend %h100
    }
</style>

