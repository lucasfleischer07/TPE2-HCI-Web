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
  },
  getters: {

  },
  mutations: {
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
