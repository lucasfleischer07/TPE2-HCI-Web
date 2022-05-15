import {Api} from "@/Api/Api";


class ProtoDeviceApi {
    static getUrl(slug){
        return `${Api.baseUrl}/devicetypes${  slug ? `/${slug}` : ""}`
    }



    static async getAll(){
        return await Api.get(ProtoDeviceApi.getUrl())

    }

    static async get(id){
        return await Api.get(ProtoDeviceApi.getUrl(id))
    }



}
class ProtoDevice{
    constructor(id,name,powerUsage,actions,events,meta) {
        if (id) {
            this.id=id;
        }
        this.name=name;
        this.powerUsage=powerUsage;
        this.actions=actions;
        this.events=events;
        this.meta=meta;
    }
    toString(){
        return JSON.stringify(this,null,2)
    }
}

export { ProtoDeviceApi,ProtoDevice }