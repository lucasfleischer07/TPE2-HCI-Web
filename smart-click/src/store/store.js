export default {
    views: [
        {
            name: "Home",
            slug: "home",
            id: 1,
            icon: "home"
        },
        {
            name: "Devices",
            slug: "devices",
            id: 2,
            icon: "devices"
        },
        {
            name: "Routines",
            slug: "routines",
            id: 3,
            icon: "calendar_month"

        },
        {
            name: "Account",
            slug: "account",
            id: 4,
            icon: "account_circle"
        },
        {
            name: "Settings",
            slug: "settings",
            id: 5,
            icon: "settings"
        },
        {
            name: "Help",
            slug: "help",
            id: 6,
            icon: "help"
        },
        {
            name: "About",
            slug: "about",
            id: 7,
            icon: "info"
        },
    ],
    houses: [
        {
            nombreCasa: "casa1",
            codigoCasa: 1,
            toString(){
                return this.nombreCasa
            },
        },
        {
            nombreCasa: "casa2",
            codigoCasa: 2,
            toString(){
                return this.nombreCasa
            },
        }
    ],
    house: {
        nombreCasa: '',
        codigoCasa: null,
    }

}