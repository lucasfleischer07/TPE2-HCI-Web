import {Api} from "@/Api/Api";


class DeviceApi{
    static getUrl(slug){
        return `${Api.baseUrl}/devices${  slug ? `/${slug}` : ""}`
    }

    static async add(device){
        return await Api.post(DeviceApi.getUrl(),device)
    }

    static async modify(device){
        return await Api.put(DeviceApi.getUrl(device.id),device)        //le pasamos room.id para matchear la sintaxis de la api
    }

    static async delete(id){
        return await Api.delete(DeviceApi.getUrl(id))
    }

    static async getAll(){
        return await Api.get(DeviceApi.getUrl())

    }

    static async get(id){
        return await Api.get(DeviceApi.getUrl(id))
    }

    static async getState(id){
        return await Api.get(DeviceApi.getUrl(`${id}/state`))
    }

    static async executeAction(id,action){
        return await Api.put(DeviceApi.getUrl(`${id}/${action}`))
    }

}

class Device{
    constructor(id,name,type,state,meta) {
        if (id) {
            this.id=id;
        }
        this.name=name;
        this.type=type;
        this.state=state;
        this.meta=meta;
    }
    toString(){
        return JSON.stringify(this,null,2)
    }
}

export { DeviceApi, Device }