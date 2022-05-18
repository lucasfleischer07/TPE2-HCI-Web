import {Api} from "@/Api/Api";


class DeviceApi{
    static getUrl(slug){
        return `${Api.baseUrl}/devices${  slug ? `/${slug}` : ""}`
    }

    static async add(device){
        return await Api.post(DeviceApi.getUrl(),device)
    }

    static async modify(params){
        return await Api.put(DeviceApi.getUrl(params[0]),params[1])
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

    static async executeAction(id,action, params){
        // const param = params ? [params] : params
        return await Api.put(DeviceApi.getUrl(`${id}/${action}`), params)
    }

}

class Device{
    constructor(id,name,type,meta) {
        if (id) {
            this.id=id;
        }
        this.name=name;
        this.type=new Type (type);
        this.meta=meta;
    }
    toString(){
        return JSON.stringify(this,null,2)
    }
}
class Type{
    constructor(type){
    this.id=type;}
}

export { DeviceApi, Device }