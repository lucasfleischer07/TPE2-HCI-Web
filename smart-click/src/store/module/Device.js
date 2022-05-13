import {DeviceApi,Device} from "@/Api/Device";

export default {
    namespaced: true,
    state: {
        devices: []
    },
    actions: {
        async createDevice({dispatch}, device) {
            const result = await DeviceApi.add(device)
            dispatch("getAll")          //Con esto ejecuto una accion desde otra accion,
                                        // agrega el home y pide getAll y actualiza
            return Object.assign(new Device(),result);
        },
        async modifyDevice({dispatch}, device) {
            const result = await DeviceApi.modify(device)
            dispatch("getAll")
            return result

        },
        async deleteDevice({dispatch}, id) {
            const result = await DeviceApi.delete(id)
            dispatch("getAll")
            return result
        },
        async getAllDevices({commit}) {
            let result = await DeviceApi.getAll()
            result = result.map((device) => Object.assign(new Device(),device))
            commit("update", result)
        },
        async getDevice({dispatch},id) {
            const result = await DeviceApi.getAll(id)
            dispatch("getAll")
            return Object.assign(new Device(),result);
        },
        async getDeviceState({dispatch},id) {
            const result = await DeviceApi.getState(id)
            dispatch("getAll")
            return result
        },
        async executeDeviceAction({dispatch},id,action) {
            const result = await DeviceApi.executeAction(id,action)
            dispatch("getAll")
            return result
        },


    },
    mutations: {
        update(state, devices) {
            state.devices = devices
        }
    }
}