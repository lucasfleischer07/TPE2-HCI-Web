import {Api} from "@/Api/Api";


class RoutineApi{
    static getUrl(slug){
        return `${Api.baseUrl}/routines${  slug ? `/${slug}` : ""}`
    }

    static async add(routine,controller){
        return await Api.post(RoutineApi.getUrl(),routine,controller)
    }

    static async modify(routine,controller){
        return await Api.put(RoutineApi.getUrl(routine.id),routine,controller)
    }

    static async delete(id,controller){
        return await Api.delete(RoutineApi.getUrl(id),controller)
    }

    static async getAll(controller){
        return await Api.get(RoutineApi.getUrl(),controller)

    }

    static async get(id,controller){
        return await Api.get(RoutineApi.getUrl(id),controller)
    }


    static async executeRoutine(id,controller){
        return await Api.put(RoutineApi.getUrl(`${id}/execute`),controller)
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
class RoutineMeta{
    constructor(slug,homeId){
        this.slug=slug,
        this.homeId=homeId
    }
}


export { RoutineApi,Routine,RoutineMeta }