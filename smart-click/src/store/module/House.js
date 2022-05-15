import {HouseApi,Home} from "@/Api/House";
import {Room} from "@/Api/Room";

export default {
    namespaced: true,
    state: {
        homes: [],
        houseSelected: {}
    },
    actions: {
        async createHome({dispatch}, home) {
            const result = await HouseApi.add(home);
            dispatch("getAllHomes") ;      //Con esto ejecuto una accion desde otra accion,
                                        // agrega el home y pide getAll y actualiza
            return Object.assign(new Home(),result);
        },
        async modifyHome({dispatch}, home) {
            const result = await HouseApi.modify(home)
            dispatch("getAllHomes")
            return result

        },
        async deleteHome({dispatch}, id) {
            const result = await HouseApi.delete(id)
            dispatch("getAllHomes")
            return result
        },
        async getAllHomes({commit},controller) {
            let result = await HouseApi.getAll(controller)
            result = result.map((home) => Object.assign(new Home(),home))
            commit("updateHomes", result )
            return result
        },
        async getHome({dispatch},id) {
            const result = await HouseApi.getAll(id)
            dispatch("getAllHomes")
            return Object.assign(new Home(),result);
        },
        async getHomeRooms({dispatch},id) {
            let result = await HouseApi.getRooms(id);
            result = result.map((room) => Object.assign(new Room(),room));
            dispatch("getAllHomes")
            return result
        },
        async addHomeRoom({dispatch},idArrays) {
            const result = await HouseApi.addRoom(idArrays[0],idArrays[1])
            dispatch("getAllHomes")
            return result
        },
        async deleteHomeRoom({dispatch},id) {
            const result = await HouseApi.deleteRoom(id)
            dispatch("getAllHomes")
            return result
        },
        changeCurrentHome({commit},home){
            commit("updateMyHouse",home)
        }

    },
    mutations: {
        updateHomes(state, homes) {
            state.homes = homes
        },
        updateMyHouse(state,home){
            state.houseSelected=home
        }

    }
}