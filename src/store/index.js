import Vue from "vue"
import Vuex from 'vuex'
import {getAdminInfo} from '../api/getData'


Vue.use(Vuex)

const state = {
  adminInfo:{}
}

const mutations = {
  saveAdminInfo(state,adminInfo){
    debugger
    state.adminInfo = adminInfo
  }
}

const actions = {
  async getAdminData({commit}){
    try{
      const res = await getAdminInfo()
      console.log('res',res);
      if(res.status == 1){
        commit('saveAdminInfo',res.data)
      }else{
        throw new Error (res.type)
      }
    }catch(e){
      console.log(e.message)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})