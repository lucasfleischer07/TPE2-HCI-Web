export default {
    devicesMap: [
        {
            compName: "SpeakerComp",
            id: 0,
        },
        {
            compName: "DoorComp",
            id: 1,
        },
        {
            compName: "LightbulbComp",
            id: 2,
        },
        {
            compName: "RefrigeratorComp",
            id: 3,
        },
        {
            compName: "OvenComp",
            id: 4,
        },

    ],
    devices: [
        {
            name: "Parlante",
            slug: "parlante",
            id: 0,
            iconMain: "speaker",
            iconArrowNext: "last_page",
            iconArrowPrevious: "first_page",
            iconArrowPlay: "play_circle",
            iconVolumeUp: "volume_up",
            iconVolumeDown: "volume_down_alt",
            iconVolumeMute: "volume_mute",
            iconPlaylist: "queue_music",
            iconChangeGender: "android_now_playing",
            iconState: "info"
        },
        {
            nwame: "Puerta",
            slug: "puerta",
            id: 1,
            iconMain: "door_front",
            iconOpenDoor: "open_in_full",
            iconCloseDoor: "close_fullscreen",
            iconLock: "lock",
            iconUnlock: "lock_open",
            iconState: "info"
        },
        {
            name: "Cortina",
            slug: "cortina",
            id: 2,
            iconMain: "roller_shades",
            iconOpen: "blinder",
            iconClose: "roller_shades_closed",
            iconState: "info"
//             No hay icono de establecer posicion ya que vamos a usar un slider
        },
        {
            name: "Heladera",
            slug: "heladera",
            id: 3,
            iconMain: "kitchen",
            iconState: "info"
//             No hay icono de establecer temperatura, eso es un slider

        },
        {
            name: "Horno",
            slug: "horno",
            id: 4,
            iconMain: "oven_gen",
            iconTurnOn: "toggle_on",
            iconTurnOff: "toggle_off",
            //             No hay icono de establecer temperatura, eso es un slider
            // fuente calor/grill/modo convencional no es un boton, un menu

        },
    ],


    houses: [
        {
            nombreCasa: "Casa 1",
            codigoCasa: 1,
            cuartos: [
                {
                    roomName: "Baño",
                    roomDevicestotalAmoount: 5,
                    roomDevicesActiveAmount: 3,
                    roomDevices: [
                        {
                            deviceCode: 0,
                            deviceName: "Mi Parlante"
                        },
                        {
                            deviceCode: 1,
                            deviceName: "mi puerta"
                        }
                    ]
                },
                {
                    roomName: "Cuarto Juan",
                    roomDevicestotalAmoount: 3,
                    roomDevicesActiveAmount: 2,
                    roomDevices: [
                        {
                            deviceCode: 1,
                            deviceName: "mi puerta"
                        },
                        {
                            deviceCode: 2,
                            deviceName: "mi Cortina"
                        }
                    ]
                }

            ],
            toString(){
                return this.nombreCasa
            },
        },
        {
            nombreCasa: "Casa 2",
            codigoCasa: 2,
            cuartos: [
                {
                    roomName: "Cuarto marcela",
                    roomDevicestotalAmoount: 4,
                    roomDevicesActiveAmount: 3,
                    roomDevices: [
                        {
                            deviceCode: 3,
                            deviceName: "Mi horno"
                        },
                        {
                            deviceCode: 2,
                            deviceName: "mi Cortina"
                        }
                    ]
                },
                {
                    roomName: "Cuarto Roberto",
                    roomDevicestotalAmoount: 3,
                    roomDevicesActiveAmount: 2,
                    roomDevices: [
                        {
                            deviceCode: 4,
                            deviceName: "mi heladera"
                        },
                        {
                            deviceCode: 2,
                            deviceName: "mi Cortina"
                        }
                    ]
                }

            ],
            toString(){
                return this.nombreCasa
            },
        }
    ],
    house: {
        nombreCasa: "",
        codigoCasa: null,
        cuartos: null,
    }

}