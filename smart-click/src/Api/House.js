import {Api} from "@/Api/Api";

class HouseApi{
    static getUrl(slug){
        return `${Api.baseUrl}/homes${  slug ? `/${slug}` : ""}`
    }

    static async add(home,controller){
        return await Api.post(HouseApi.getUrl(),home,controller)
    }

    static async modify(home, controller){
        return await Api.put(HouseApi.getUrl(home.id),home, controller)
    }

    static async delete(id, controller){
        return await Api.delete(HouseApi.getUrl(id), controller)
    }

    static async getAll(controller){
        return await Api.get(HouseApi.getUrl(), controller)

    }

    static async get(id, controller){
        return await Api.get(HouseApi.getUrl(id), controller)
    }

    static async getRooms(id, controller){
        return await Api.get(HouseApi.getUrl(`${id}/rooms`), controller)
    }

    static async addRoom(homeId,roomId, controller){
        return await Api.post(HouseApi.getUrl(`${homeId}/rooms/${roomId}`), controller)
    }

    static async deleteRoom(roomId, controller){
        return await Api.delete(HouseApi.getUrl(`rooms/${roomId}`), controller)
    }

}
class Home{
    constructor(id,name,meta) {
        if (id) {
            this.id=id;
        }
        this.name=name;
        this.meta=meta;
    }
    toString(){
        return JSON.stringify(this,null,2)
    }
}

class HomeMeta{
    constructor(homeRoutines) {
        this.homeRoutines=homeRoutines
    }
}

export {HouseApi,Home,HomeMeta }