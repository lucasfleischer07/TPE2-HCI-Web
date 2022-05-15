import {RoomApi,Room} from "@/Api/Room";
import {Device} from "@/Api/Device";

export default{
    namespaced: true,
    state: {
        rooms: []
    },
    actions: {
        async create({dispatch}, room) {
            const result = await RoomApi.add(room)
            dispatch("getAll")          //Con esto ejecuto una accion desde otra accion,
                                        // agrega el room y pide getAll y actualiza
            return Object.assign(new Room(),result);
        },
        async modify({dispatch},room){
            const result =  await RoomApi.modify(room)
            dispatch("getAll")
            return result

        },
        async delete({dispatch},id){
            const result =  await RoomApi.delete(id)
            dispatch("getAll")
            return result
        },
        async getAll({commit}){
            let result = await RoomApi.getAll()
            result = result.map((room) => Object.assign(new Room(),room))
            commit("update",result)

        },
        async get({dispatch},id){
            const result = await RoomApi.get(id)
            dispatch("getAll")
            return Object.assign(new Room(),result);
        },
        async getDevices({dispatch},id){
            let result = await RoomApi.getDevices(id)
            dispatch("getAll")
            result = result.map((device) => Object.assign(new Device(),device))
            return result;
        },
        async addDevice({dispatch},ids){
            const result = await RoomApi.addDevice(ids[0],ids[1])
            dispatch("getAll")
            return result
        },
        async deleteDevice({dispatch},deviceId){
            const result = await RoomApi.deleteDevice(deviceId)
            dispatch("getAll")
            return result
        }

    },
    mutations: {
        update(state, rooms){
            state.rooms = rooms
        }
    }
}