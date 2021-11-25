<template>
  <div id="header">
    <span class="hideAside" @click="collapse"
      ><i
        :class="
          isCollapse
            ? (hideAside = 'el-icon-s-unfold')
            : (hideAside = 'el-icon-s-fold')
        "
      ></i
    ></span>
    <ul class="person-box">
      <li class="fullScreen" @click="fullScreen">
        <el-tooltip class="item" effect="dark" content="全屏" placement="top">
          <i class="fa fa-arrows-alt fa-lg"></i>
        </el-tooltip>
      </li>
      <li>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">基本资料</el-dropdown-item>
            <el-dropdown-item command="b">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li class="icon"><img :src="avatar" alt="头像" /></li>
    </ul>
  </div>
</template>

<script>
import { signout } from '@/api/getData'
import bus from '../../assets/js/bus'
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      isCollapse: false,
      hideAside: 'el-icon-s-unfold',
      username: this.adminInfo.username,
      isfullScreen: true,
      avatar: require('../../assets/images/icon.jpg')
    }
  },
  methods: {
    collapse() {
      this.isCollapse = !this.isCollapse
      bus.$emit('isCollapse', this.isCollapse)
      // this.isCollapse ? this.hideAside = 'el-icon-s-fold' : this.hideAside = 'el-icon-s-unfold'
    },
    fullScreen() {
      if (this.isfullScreen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        }
        this.isfullScreen = false
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isfullScreen = true
      }
    },
    async handleCommand(command) {
      if (command == 'logout') {
        const res = await signout()
        if (res.status == 1) {
          this.$message({
            type: 'success',
            message: '退出成功啦'
          })
          this.$router.push('/')
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      }
    }
  },
  computed: {
      ...mapState(['adminInfo']),
      name() {
          return this.data 
      }
  },
}
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

%cursor {
  cursor: pointer;
}

html,
body,
#app,
.el-container,
#asideNav,
ul.el-menu {
  @extend %h100;
}
@mixin set-value($side, $value) {
  @each $prop in $leftright {
    #{$side}-#{$prop}: $value;
  }
}
#header {
  padding: 0 20px;
  max-height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  .hideAside {
    @extend %cursor;
    font-size: 28px;
    line-height: 50px;
  }
  .person-box {
    display: flex;
    flex-direction: row;
    li {
      @include set-value(margin, 13px);
      font-size: 12px;
    }
    .fullScreen {
      @extend %cursor;
    }
    .icon img {
      margin-#{$top}: 7px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
