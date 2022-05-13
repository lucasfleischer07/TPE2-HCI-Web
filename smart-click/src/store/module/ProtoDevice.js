import {ProtoDeviceApi,ProtoDevice} from "@/Api/ProtoDevice";

export default {
    namespaced: true,
    state: {
        devicesTypes: []
    },
    actions: {
        async getAllDevicesTypes({commit}) {
            let result = await ProtoDeviceApi.getAll()
            result = result.map((device) => Object.assign(new ProtoDevice(),device));
            commit("update", result)
            return result
        },
        async getDeviceType({dispatch},id) {
            const result = await ProtoDeviceApi.getAll(id)
            dispatch("getAll")
            return Object.assign(new ProtoDevice(),result);
        },



    },
    mutations: {
        update(state, devicesTypes) {
            state.devicesTypes = devicesTypes
        }
    }
}