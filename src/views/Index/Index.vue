<template>
  <el-container>
    <Aside></Aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main class="rooter">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer msg="我是底部"></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import Aside from '../../layout/Aside/Aside'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Aside
  },
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

  .el-header,
  .el-footer {
    padding: 0 !important;
    height: auto !important;
  }
}

/*    .rooter {
        background: #eeeeee;
    }*/

.el-main {
}

.el-container {
  @extend %h100;
}
</style>
