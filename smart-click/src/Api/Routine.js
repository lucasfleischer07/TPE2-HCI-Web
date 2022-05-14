import {Api} from "@/Api/Api";


class RoutineApi{
    static getUrl(slug){
        return `${Api.baseUrl}/routines${  slug ? `/${slug}` : ""}`
    }

    static async add(routine){
        return await Api.post(RoutineApi.getUrl(),routine)
    }

    static async modify(routine){
        return await Api.put(RoutineApi.getUrl(routine.id),routine)
    }

    static async delete(id){
        return await Api.delete(RoutineApi.getUrl(id))
    }

    static async getAll(){
        return await Api.get(RoutineApi.getUrl())

    }

    static async get(id){
        return await Api.get(RoutineApi.getUrl(id))
    }


    static async executeRoutine(id){
        return await Api.put(RoutineApi.getUrl(`${id}/execute`))
    }

}
class Routine{
    constructor(id,name,actions,meta) {
        if (id) {
            this.id=id;
        }
        this.name=name;
        this.actions=actions;
        this.meta=meta;
    }
    toString(){
        return JSON.stringify(this,null,2)
    }
}


export { RoutineApi,Routine }