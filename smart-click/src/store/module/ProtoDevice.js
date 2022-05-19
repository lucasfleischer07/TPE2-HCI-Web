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
            commit("updateProtoDevices", result)
            return result
        },
        async getDeviceType({dispatch},id) {
            const result = await ProtoDeviceApi.get(id)
            dispatch("getAllDevicesTypes")
            return Object.assign(new ProtoDevice(),result)
        },
    },
    mutations: {
        updateProtoDevices(state, devicesTypes) {
            state.devicesTypes = devicesTypes
        }
    }
}