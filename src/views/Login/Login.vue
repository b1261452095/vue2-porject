<template>
  <div class="body" :style="bgStyle">
    <div class="page-container">
      <h1>后台管理系統</h1>
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"
            ><span>dsfsf</span></el-input
          >
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
            class="submit_btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="connect">
        <p>
          If we can only encounter each other rather than stay with each
          other,then I wish we had never encountered.
        </p>
        <p style="margin-top:20px;">如果只是遇见，不能停留，不如不遇见。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getAdminInfo } from '../../api/getData'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      // bgPath:'../../assets/images/1.jpg',
      bgPath: 'url(' + require('../../assets/images/1.jpg') + ')',
      imgIndex: 0
    }
  },
  mounted() {
    if (!this.adminInfo.id) {
      this.getAdminData()
    }
    setInterval(() => {
      this.imgIndex++
      if (this.imgIndex > 3) this.imgIndex = 1
      this.bgPath =
        'url(' + require(`../../assets/images/${this.imgIndex}.jpg`) + ')'
    }, 5000)
  },
  computed: {
    ...mapState(['adminInfo']),
    bgStyle() {
      return {
        backgroundImage: this.bgPath
      }
    }
  },
  methods: {
    ...mapActions(['getAdminData']),
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await login({
            user_name: this.loginForm.username,
            password: this.loginForm.password
          })
         
          if (res.status == 1) {
            this.$message({
              type: 'success',
              message: '登陆成功'
            })
            this.$router.push('home')
            this.getAdminData()
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scop>
.body {
  padding: 120px 0 0 0;
  width: 100%;
  height: 100%;
  // background-image: url(./img/1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Microsoft YaHei', 微软雅黑, 'Microsoft JhengHei', 华文细黑,
    STHeiti, MingLiu;
  text-align: center;
  color: #fff;
  -o-transition: all 5s;
  -moz-transition: all 5s;
  -webkit-transition: all 5s;
  -ms-transition: all 5s;

  h1 {
    font-size: 30px;
    font-weight: 700;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  form {
    position: relative;
    width: 305px;
    margin: 15px auto 0;
    text-align: center;
  }

  input {
    width: 300px;
    height: 42px;
    line-height: 42px;
    margin-top: 25px;
    padding: 0 15px;
    background: #2d2d2d; /* browsers that don't support rgba */
    *background-color: transparent;
    background: rgba(45, 45, 45, 0.15);
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #3d3d3d; /* browsers that don't support rgba */
    border: 1px solid rgba(255, 255, 255, 0.15);
    -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
    -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    -o-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -ms-transition: all 0.2s;
  }

  input:-moz-placeholder {
    color: #fff;
  }
  input:-ms-input-placeholder {
    color: #fff;
  }
  input::-webkit-input-placeholder {
    color: #fff;
  }

  input:focus {
    outline: none;
    -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
  }

  button {
    cursor: pointer;
    width: 300px;
    height: 44px;
    margin-top: 25px;
    padding: 0;
    background: #ef4300;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 0px;
    -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    -o-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -ms-transition: all 0.2s;
  }

  button:hover {
    -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
  }

  button:active {
    -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
      0 2px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1) inset,
      0 1px 4px 0 rgba(0, 0, 0, 0.1);

    border: 0px solid #ef4300;
  }

  .connect {
    width: 800px;
    margin: 50px auto 0 auto;
    font-size: 14px;

    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  // .connect p{
  //     position:relative;
  //     left:-140%;
  //     top:0
  // }
  .connect a {
    display: inline-block;
    width: 32px;
    height: 35px;
    margin-top: 15px;
    -o-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -ms-transition: all 0.2s;
  }
}
</style>
