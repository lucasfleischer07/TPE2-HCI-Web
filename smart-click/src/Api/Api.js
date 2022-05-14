class Api {
    static get baseUrl() {
        return "http://localhost:8080/api";
    }

    static get timeout() {
        return 60 * 1000;
    }

    static async fetch(url, init = {}, controller) {
        controller = controller || new AbortController();
        init.signal = controller.signal;
        const timer = setTimeout(() => controller.abort(), Api.timeout);

        try {
            const response = await fetch(url, init);
            const text = await response.text();
            const json = text ? JSON.parse(text) : {};
            if (json.error) throw json.error;
            return json.result;
        } catch (error) {
            if (error.name == "AbortError")
                throw { code: 98, description: [ error.message.toLowerCase() ] };
            else if (error.name == "TypeError")
                throw { code: 99, description: [ error.message.toLowerCase() ] };
            else
                throw error;
        } finally {
            clearTimeout(timer);
        }
    }

    static async get(url, controller) {
        return await Api.fetch(url, {}, controller);
    }

    static async post(url, data, controller) {
        return await Api.fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(data),
            },
            controller
        );
    }

    static async put(url, data, controller) {
        return await Api.fetch(
            url,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(data),
            },
            controller
        );
    }

    static async delete(url, controller) {
        return await Api.fetch(
            url,
            {
                method: "DELETE",
            },
            controller
        );
    }
}
export { Api };



/* class Api {
    static get baseUrl(){
        return "http://localhost:8080/api"
    }

    static get timeout() {
        return 60*1000
    }

    static async fetch(url, init){

        //const controller = new AbortController()
        //init.signal = controller.signal
        //const timer= setTimeout(()=> controller.abort(), Api.timeout )

        try{
            let response = await fetch(url, init)
            let text = await response.text()
            const json = text ? JSON.parse(text) : {}            //Quiero pasar el texto a algo q me sirva
            if (json.error) throw json.error              //Si no tiene .error retorna undefined-> valor false en el if
            return json.result
        }catch( error ) {
            if (error.name === "AbortError" )//Para saber que produjo el error, en este caso el TimeOut
                throw { code: 98 , description: [error.message.toLowerCase()]}       //Numeros arbitrarios de error y la descripcion tambien
            throw error
        } finally {
            //clearTimeout(timer)
        }

    }

    static async get(url){
        return await Api.fetch(url,{})
    }

    static async post(url,data){
        return await Api.fetch(url,{
            method: "POST",
            headers: {
                "Content-Type:": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
    }

    static async put(url,data){
        return await Api.fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type:": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
    }

    static async delete(url){
        return await Api.fetch(url,{
            method: "DELETE",
        })
    }
}

export { Api } */