import {DeviceApi,Device} from "@/Api/Device";

export default {
    namespaced: true,
    state: {
        devices: []
    },
    actions: {
        async createDevice({dispatch}, device) {
            const result = await DeviceApi.add(device)
            dispatch("getAllDevice")          //Con esto ejecuto una accion desde otra accion,
                                        // agrega el home y pide getAll y actualiza
            return Object.assign(new Device(),result);
        },
        async modifyDevice({dispatch}, device) {
            const result = await DeviceApi.modify(device)
            dispatch("getAllDevice")
            return result

        },
        async deleteDevice({dispatch}, id) {
            const result = await DeviceApi.delete(id)
            dispatch("getAllDevice")
            return result
        },
        async getAllDevices({commit}) {
            let result = await DeviceApi.getAll()
            result = result.map((device) => Object.assign(new Device(),device))
            commit("updateDevices", result)
        },
        async getDevice({dispatch},id) {
            const result = await DeviceApi.getAll(id)
            dispatch("getAllDevice")
            return Object.assign(new Device(),result);
        },
        async getDeviceState({dispatch},id) {
            const result = await DeviceApi.getState(id)
            dispatch("getAllDevice")
            return result
        },
        async executeDeviceAction({dispatch},params) {
            const result = await DeviceApi.executeAction(params[0],params[1], params[2])
            dispatch("getAllDevice")
            return result
        },


    },
    mutations: {
        updateDevices(state, devices) {
            state.devices = devices
        }
    }
}