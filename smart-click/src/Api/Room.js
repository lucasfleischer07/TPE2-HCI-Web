import {Api} from "@/Api/Api";

class RoomApi{
    static getUrl(slug){
        return `${Api.baseUrl}/rooms${  slug ? `/${slug}` : ""}`
    }

    static async add(room){
        return await Api.post(RoomApi.getUrl(),room)
    }

    static async modify(room){
        return await Api.put(RoomApi.getUrl(room.id),room)
    }

    static async delete(id){
        return await Api.delete(RoomApi.getUrl(id))
    }

    static async getAll(){
        return await Api.get(RoomApi.getUrl())

    }

    static async get(id){
        return await Api.get(RoomApi.getUrl(id))
    }

    static async getDevices(id){
        return await Api.get(RoomApi.getUrl(`${id}/devices`))
    }

    static async addDevice(roomId,deviceId){
        return await Api.post(RoomApi.getUrl(`${roomId}/devices/${deviceId}`))
    }

    static async deleteDevice(id){
        return await Api.delete(RoomApi.getUrl(`devices/${id}`))
    }



}

class Room{
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

export {RoomApi,Room}