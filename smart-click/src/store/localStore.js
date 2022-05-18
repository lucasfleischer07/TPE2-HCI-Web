export default {
    devicesImplemented: [
        {
            id: "c89b94e8581855bc",
            name: "Parlante",
            powerUsage: 20,
            actions: [
                {
                    name: "setVolume",
                    nameSpanish: "Establecer Volumen",
                    params: [
                        {
                            name: "volume",
                            type: "SelectNumber",
                            description: "volume level",
                            minValue: 0,
                            maxValue: 10,
                            example: 6
                        }
                    ],
                    return: {
                        type: "number",
                        description: "previous volume if successful, otherwise null",
                        example: 6
                    }
                },
                {
                    name: "play",
                    nameSpanish: "Play",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "stop",
                    nameSpanish: "Frenar",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "pause",
                    nameSpanish: "Pausar",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "resume",
                    nameSpanish: "Continuar",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "nextSong",
                    nameSpanish: "Próxima canción",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "previousSong",
                    nameSpanish: "Canción anterior",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "setGenre",
                    nameSpanish: "Establecer género",
                    params: [
                        {
                            name: "genre",
                            type: "SelectString",
                            description: "music genre",
                            supportedValues: [
                                { name: "classical",
                                    nameSpanish: "Clásico"
                                },
                                { name: "country",
                                    nameSpanish: "Country"
                                },
                                { name: "dance",
                                    nameSpanish: "Baile"
                                },{ name: "latina",
                                    nameSpanish: "Latina"
                                },
                                { name: "pop",
                                    nameSpanish: "Pop"
                                },
                                { name: "rock",
                                    nameSpanish: "Rock"
                                },
                            ],
                            example: "pop"
                        }
                    ],
                    return: {
                        type: "string",
                        description: "previous genre if successful, otherwise null",
                        example: "pop"
                    }
                },
                {
                    name: "getPlaylist",
                    nameSpanish: "Obtener lista de reproducción",
                    params: [],
                    return: {
                        type: "object",
                        description: "playlist if successful, otherwise null",
                        example: [
                            {
                                song: "Memories",
                                artist: "Marron 5",
                                album: "Memories",
                                duration: "3:09"
                            },
                            {
                                song: "Dance Monkey",
                                artist: "Tones and I",
                                album: "The Kids Are Coming",
                                duration: "3:29"
                            },
                            {
                                song: "Circles",
                                artist: "Post Malone",
                                album: "Hollywood's Bleeding",
                                duration: "3:35"
                            }
                        ]
                    }
                }
            ],
            events: [
                {
                    name: "statusChanged",
                    args: {
                        type: "object",
                        description: "new status",
                        example: {
                            newStatus: "stopped"
                        }
                    }
                },
                {
                    name: "volumeChanged",
                    args: {
                        type: "object",
                        description: "previous and new volume",
                        example: {
                            previousVolume: 5,
                            newVolume: 7
                        }
                    }
                },
                {
                    name: "songChanged",
                    args: {
                        type: "object",
                        description: "new song",
                        example: {
                            newSong: {
                                title: "Memories",
                                artist: "Marron 5",
                                album: "Memories",
                                duration: "3:09"
                            }
                        }
                    }
                }],
        },
        {
            id: "rnizejqr2di0okho",
            name: "Heladera",
            powerUsage: 90,
            actions: [
                {
                    name: "setFreezerTemperature",
                    nameSpanish: "Establecer temperatura freezer",
                    params: [
                        {
                            name: "temperature",
                            type: "SelectNumber",
                            description: "temperature in centigrades",
                            minValue: -20,
                            maxValue: -8,
                            example: -10
                        }
                    ],
                    return: {
                        type: "boolean",
                        description: "previous temperature if successful, otherwise false",
                        example: -18
                    }
                },
                {
                    name: "setTemperature",
                    nameSpanish: "Establecer temperatura",
                    params: [
                        {
                            name: "temperature",
                            type: "SelectNumber",
                            description: "temperature in centigrades",
                            minValue: 2,
                            maxValue: 8,
                            example: 4
                        }
                    ],
                    return: {
                        type: "boolean",
                        description: "previous temperature if successful, otherwise false",
                        example: 4
                    },
                },
                {
                    name: "setMode",
                    nameSpanish: "Establecer modo",
                    params: [
                        {
                            name: "mode",
                            type: "SelectString",
                            description: "mode",
                            supportedValues: [
                                { name: "default",
                                    nameSpanish: "Predeterminado"
                                },
                                { name: "vacation",
                                    nameSpanish: "Vacaciones"
                                },
                                {
                                    name: "party",
                                    nameSpanish: "Fiesta"
                                }
                            ],
                            example: "default"
                        }
                    ],
                    return: {
                        type: "boolean",
                        description: "previous mode if successful, otherwise false",
                        example: "party"
                    }
                }
            ],
            events: [
                {
                    name: "freezerTemperatureChanged",
                    args: {
                        type: "object",
                        description: "previous and new temperature",
                        example: {
                            previousTemperature: 20,
                            newTemperature: -18
                        }
                    }
                },
                {
                    name: "temperatureChanged",
                    args: {
                        type: "object",
                        description: "previous and new temperature",
                        example: {
                            "previousTemperature": 2,
                            "newTemperature": 4
                        }
                    }
                },
                {
                    name: "modeChanged",
                    args: {
                        type: "object",
                        description: "previous and new mode",
                        example: {
                            previousMode: "default",
                            newMode: "vacation"
                        }
                    }
                }
            ]
        },

        {
            id: "im77xxyulpegfmv8",
            name: "Horno",
            powerUsage: 1225,
            actions: [
                {
                    name: "turnOn",
                    nameSpanish: "Prender",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "turnOff",
                    nameSpanish: "Apagar",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "setTemperature",
                    nameSpanish: "Establecer temperatura",
                    params: [
                        {
                            name: "temperature",
                            type: "SelectNumber",
                            description: "temperature in centigrades",
                            minValue: 90,
                            maxValue: 230,
                            example: 180
                        }
                    ],
                    return: {
                        type: "number",
                        description: "previous temperature if successful, otherwise null",
                        example: 180
                    }
                },
                {
                    name: "setHeat",
                    nameSpanish: "Establecer dirección del calor",
                    params: [
                        {
                            name: "heat",
                            type: "SelectString",
                            description: "heat mode",
                            supportedValues: [
                                { name: "conventional",
                                    nameSpanish: "Normal"
                                },
                                { name: "bottom",
                                    nameSpanish: "Abajo"
                                },
                                {
                                    name: "top",
                                    nameSpanish: "Arriba"
                                }
                            ],
                            example: "conventional"
                        }
                    ],
                    return: {
                        type: "string",
                        description: "previous heat mode if successful, otherwise null",
                        example: "bottom"
                    }
                },
                {
                    name: "setGrill",
                    nameSpanish: "Establecer modo de cocción",
                    params: [
                        {
                            name: "grill",
                            type: "SelectString",
                            description: "grill mode",
                            supportedValues: [
                                { name: "large",
                                    nameSpanish: "Largo"
                                },
                                { name: "eco",
                                    nameSpanish: "Ecológico"
                                },
                                {
                                    name: "off",
                                    nameSpanish: "Apagado"
                                }
                            ],
                            example: "off"
                        }
                    ],
                    return: {
                        type: "string",
                        description: "previous grill mode if successful, otherwise null",
                        example: "eco"
                    }
                },
                {
                    name: "setConvection",
                    nameSpanish: "Establecer modo de convención",
                    params: [
                        {
                            name: "convection",
                            type: "SelectString",
                            description: "convection mode",
                            supportedValues: [
                                { name: "normal",
                                    nameSpanish: "Normal"
                                },
                                { name: "eco",
                                    nameSpanish: "Ecológico"
                                },
                                {
                                    name: "off",
                                    nameSpanish: "Apagado"
                                }
                            ],
                            example: "off"
                        }
                    ],
                    return: {
                        type: "string",
                        description: "previous convection mode if successful, otherwise null",
                        example: "eco"
                    }
                }
            ],
            events: [
                {
                    name: "statusChanged",
                    args: {
                        type: "object",
                        description: "new status",
                        example: {
                            newStatus: "active"
                        }
                    }
                },
                {
                    name: "temperatureChanged",
                    args: {
                        type: "object",
                        description: "previous and new temperature",
                        example: {
                            "previousTemperature": 180,
                            "newTemperature": 200
                        }
                    }
                },
                {
                    name: "heatChanged",
                    args: {
                        type: "object",
                        description: "previous and new heat mode",
                        example: {
                            previousHeat: "conventional",
                            newHeat: "top"
                        }
                    }
                },
                {
                    name: "grillChanged",
                    args: {
                        type: "object",
                        description: "previous and new grill mode",
                        example: {
                            previousGrill: "eco",
                            newGrill: "large"
                        }
                    }
                },
                {
                    name: "convectionChanged",
                    args: {
                        type: "object",
                        description: "previous and new convection mode",
                        example: {
                            previousConvection: "off",
                            newConvection: "normal"
                        }
                    }
                }
            ]
        },
        {
            id: "go46xmbqeomjrsjr",
            name: "Lámpara",
            powerUsage: 15,
            actions: [
                {
                    name: "turnOn",
                    nameSpanish: "Prender",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "turnOff",
                    nameSpanish: "Apagar",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "setColor",
                    nameSpanish: "Establecer color",
                    params: [
                        {
                            name: "color",
                            type: "SelectColor",
                            description: "new RGB color",
                            minValue: "000000",
                            maxValue: "FFFFFF",
                            example: "BFEEF0"
                        }
                    ],
                    return: {
                        type: "string",
                        description: "previous RGB color if successful, otherwise null",
                        example: "FFFFFF"
                    }
                },
                {
                    name: "setBrightness",
                    nameSpanish: "Establecer brillo",
                    params: [
                        {
                            name: "brightness",
                            type: "SelectNumber",
                            description: "new brightness",
                            minValue: 0,
                            maxValue: 100,
                            example: 90
                        }
                    ],
                    return: {
                        type: "number",
                        description: "previous brightness if successful, otherwise null",
                        example: 100
                    }
                }
            ],
            events: [
                {
                    name: "statusChanged",
                    args: {
                        type: "object",
                        description: "new status",
                        example: {
                            newStatus: "on"
                        }
                    }
                },
                {
                    name: "colorChanged",
                    args: {
                        type: "object",
                        description: "previous and new color",
                        example: {
                            previousColor: "000000",
                            newColor: "BFEEF0"
                        }
                    }
                },
                {
                    name: "brightnessChanged",
                    args: {
                        type: "object",
                        description: "previous and new brightness",
                        example: {
                            previousBrightness: 100,
                            newBrightness: 90
                        }
                    }
                }
            ]
        },
        {
            id: "lsf78ly0eqrjbz91",
            name: "Puerta",
            powerUsage: 350,
            actions: [
                {
                    name: "open",
                    nameSpanish: "Abrir",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "close",
                    nameSpanish: "Cerrar",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful otherwise false",
                        example: true
                    }
                },
                {
                    name: "lock",
                    nameSpanish: "Bloquear",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                },
                {
                    name: "unlock",
                    nameSpanish: "Desbloquear",
                    params: [],
                    return: {
                        type: "boolean",
                        description: "true if successful, otherwise false",
                        example: true
                    }
                }
            ],
            events: [
                {
                    name: "statusChanged",
                    args: {
                        type: "object",
                        description: "new status",
                        example: {
                            newStatus: "closed"
                        }
                    }
                },
                {
                    name: "lockChanged",
                    args: {
                        type: "object",
                        description: "new lock",
                        example: {
                            newLock: "unlocked"
                        }
                    }
                }
            ]
        },
    ],
    actionsMap:[
        {
            name: "setVolume",
            nameSpanish: "Establecer Volumen",
        },
        {
            name: "play",
            nameSpanish: "Play",
        },
        {
            name: "stop",
            nameSpanish: "Frenar",
        },
        {
            name: "pause",
            nameSpanish: "Pausar",
        },
        {
            name: "resume",
            nameSpanish: "Continuar",
        },
        {
            name: "nextSong",
            nameSpanish: "Próxima canción",
        },
        {
            name: "previousSong",
            nameSpanish: "Canción anterior",
        },
        {
            name: "setGenre",
            nameSpanish: "Establecer género",
        },
        {
            name: "getPlaylist",
            nameSpanish: "Obtener lista de reproducción",
        },

        {
            name: "setFreezerTemperature",
            nameSpanish: "Establecer temperatura freezer",
        },

        {
            name: "setTemperature",
            nameSpanish: "Establecer temperatura",
        },

        {
            name: "setMode",
            nameSpanish: "Establecer modo",
        },

        {
            name: "turnOn",
            nameSpanish: "Prender",
        },

        {
            name: "turnOff",
            nameSpanish: "Apagar",
        },
        {
            name: "turnOff",
            nameSpanish: "Apagar",
        },

        {
            name: "setHeat",
            nameSpanish: "Establecer dirección del calor",
        },

        {
            name: "setGrill",
            nameSpanish: "Establecer modo de cocción",
        },

        {
            name: "setConvection",
            nameSpanish: "Establecer modo de convención",
        },

        {
            name: "turnOn",
            nameSpanish: "Prender",
        },

        {
            name: "turnOff",
            nameSpanish: "Apagar",
        },

        {
            name: "setColor",
            nameSpanish: "Establecer color",
        },

        {
            name: "setBrightness",
            nameSpanish: "Establecer brillo",
        },
        {
            name: "open",
            nameSpanish: "Abrir",
        },
        {
            name: "close",
            nameSpanish: "Cerrar",
        },
        {
            name: "lock",
            nameSpanish: "Bloquear",
        },
        {
            name: "unlock",
            nameSpanish: "Desbloquear",
        }

    ],
    parameterMap:[
        { name: "classical",
            nameSpanish: "Clásico"
        },
        { name: "country",
            nameSpanish: "Country"
        },
        { name: "dance",
            nameSpanish: "Baile"
        },{ name: "latina",
            nameSpanish: "Latina"
        },
        { name: "pop",
            nameSpanish: "Pop"
        },
        { name: "rock",
            nameSpanish: "Rock"
        },
        { name: "default",
            nameSpanish: "Predeterminado"
        },
        { name: "vacation",
            nameSpanish: "Vacaciones"
        },
        {
            name: "party",
            nameSpanish: "Fiesta"
        },
        { name: "conventional",
            nameSpanish: "Normal"
        },
        { name: "bottom",
            nameSpanish: "Abajo"
        },
        {
            name: "top",
            nameSpanish: "Arriba"
        },
        { name: "large",
            nameSpanish: "Largo"
        },
        { name: "eco",
            nameSpanish: "Ecológico"
        },
        {
            name: "off",
            nameSpanish: "Apagado"
        },
        { name: "normal",
            nameSpanish: "Normal"
        },
        { name: "eco",
            nameSpanish: "Ecológico"
        },
        {
            name: "off",
            nameSpanish: "Apagado"
        }
    ]
}