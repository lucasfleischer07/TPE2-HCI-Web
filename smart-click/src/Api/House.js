import {Api} from "@/Api/Api";


class HouseApi{
    static getUrl(slug){
        return `${Api.baseUrl}/homes${  slug ? `/${slug}` : ""}`
    }

    static async add(home){
        return await Api.post(HouseApi.getUrl(),home)
    }

    static async modify(home){
        return await Api.put(HouseApi.getUrl(home.id),home)        //le pasamos room.id para matchear la sintaxis de la api
    }

    static async delete(id){
        return await Api.delete(HouseApi.getUrl(id))
    }

    static async getAll(){
        return await Api.get(HouseApi.getUrl())

    }

    static async get(id){
        return await Api.get(HouseApi.getUrl(id))
    }

    static async getRooms(id){
        return await Api.get(HouseApi.getUrl(`${id}/rooms`))
    }

    static async addRoom(homeId,roomId){
        return await Api.post(HouseApi.getUrl(`${homeId}/rooms/${roomId}`))
    }

    static async deleteRoom(roomId){
        return await Api.delete(HouseApi.getUrl(`rooms/${roomId}`))
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



export {HouseApi,Home }