<template>
    <div class="footer">
        <p>Copyright © 2021 demo.</p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            msg:String
        }
    }
</script>

<style scoped>
    .footer{
        padding:0 20px;
        max-height:50px;
        line-height: 50px;
        text-align: center;
        color:#999999;
        font-size: 12px;
        /*background: #2c3e50;*/
    }
</style>
