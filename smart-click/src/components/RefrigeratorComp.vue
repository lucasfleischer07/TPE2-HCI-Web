<template>

    <div>
        <v-icon x-large>kitchen</v-icon>
        <p>{{device.deviceName}}</p>
        <v-row class="action-row">
            <div>
               <v-slider prepend-icon="device_thermostat"
                        @change="refriTemp=number"/>
            </div>
       </v-row>
       <v-row class="action-row" justify="center">

            <div>
               <v-slider prepend-icon="ac_unit"
               @change="refriTemp=number"/>
            </div>
       </v-row>
    </div>

</template>

<script>

import store from "@/store/store.js"

export default {
    name: "RefrigeratorComp",
    data() {
        return {
            refriTemp: 0,
            house: store.house.cuartos[0].roomDevices[1],
        }
    }
}
</script>

<style scoped>

</style>