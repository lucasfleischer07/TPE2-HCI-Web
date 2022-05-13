import {RoomApi,Room} from "@/Api/Room";

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
        }

    },
    mutations: {
        update(state, rooms){
            state.rooms = rooms
        }
    }
}