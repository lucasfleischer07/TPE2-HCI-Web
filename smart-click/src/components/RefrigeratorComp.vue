<template>
<div>
    <div class="prueba">
        <v-icon x-large>kitchen</v-icon>
        <p>{{device.deviceName}}</p>
        <v-row class="action-row">
            <div>
               <v-btn depressed icon>
                 <v-icon x-large>device_thermostat</v-icon>
               </v-btn >
               <v-slider @change="refriTemp=number"/>
            </div>
       </v-row>
       <v-row class="action-row" justify="center">

             <v-btn depressed icon v-model="sound" @click="sound=0">
               <v-icon x-large>volume_down_alt</v-icon>
             </v-btn>
             <v-slider v-model="sound">

             </v-slider>
       </v-row>
       <v-row class="action-row">
         <div>
           <v-btn depressed icon>
             <v-icon x-large>queue_music</v-icon>
           </v-btn >
           <v-btn depressed icon>
             <v-icon x-large>change_circle</v-icon>
           </v-btn>
           <v-btn depressed icon>
             <v-icon x-large>info</v-icon>
           </v-btn>
         </div>
       </v-row>
    </div>

  </div>
</template>

<script>

import store from "@/store/store.js"

export default {
    name: "RefrigeratorComp"
    data() {
        return {
            refriTemp: 0
            house:store store.house.cuartos[0].roomDevices[1],
        }
    }
}
</script>

<style scoped>

</style>