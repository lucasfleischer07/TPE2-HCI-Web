import Vue from 'vue'
import Vuex from 'vuex'
import Room from "@/store/module/Room";
import House from "@/store/module/House";
import Devices from "@/store/module/Device";
import ProtoDevice from "@/store/module/ProtoDevice";
import Routine from "@/store/module/Routine";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingRoutine: true,
    apiDown: false
  },
  getters: {

  },
  mutations: {
    setEditingTrue(state){
      state.editingRoutine=true
    },
    setEditingFalse(state){
      state.editingRoutine=false
    },
    setApiDown(state){
      state.apiDown=true
    },
    setApiUp(state){
      state.apiDown=false
    },
  },
  actions: {

  },
  modules: {
    Room,
    House,
    Devices,
    ProtoDevice,
    Routine,
  }
})
