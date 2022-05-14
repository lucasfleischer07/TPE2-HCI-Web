import {RoutineApi,Routine} from "@/Api/Routine";

export default {
    namespaced: true,
    state: {
        routines: []
    },
    actions: {
        async createRoutine({dispatch}, routine) {
            const result = await RoutineApi.add(routine)
            dispatch("getAllRoutine")          //Con esto ejecuto una accion desde otra accion,
                                        // agrega el home y pide getAll y actualiza
            return Object.assign(new Routine(),result)
        },
        async modifyRoutine({dispatch}, routine) {
            const result = await RoutineApi.modify(routine)
            dispatch("getAllRoutine")
            return result

        },
        async deleteRoutine({dispatch}, id) {
            const result = await RoutineApi.delete(id)
            dispatch("getAllRoutine")
            return result
        },
        async getAllRoutine({commit}) {
            let result = await RoutineApi.getAll()
            result = result.map((routine) => Object.assign(new Routine(),routine))
            commit("update", result)
            return result
        },
        async getRoutine({dispatch},id) {
            const result = await RoutineApi.getAll(id)
            dispatch("getAllRoutine")
            return Object.assign(new Routine(),result)
        },

        async executeRoutine({dispatch},id) {
            const result = await RoutineApi.executeRoutine(id)
            dispatch("getAllRoutine")
            return result
        },


    },
    mutations: {
        update(state, routines) {
            state.routines = routines
        }
    }
}