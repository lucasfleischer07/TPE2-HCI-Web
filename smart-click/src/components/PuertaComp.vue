<template>

  <div>
    <v-btn depressed icon>
      <v-icon x-large>speaker</v-icon>
    </v-btn>
    <p>{{device.deviceName}}</p>
    <v-row class="action-row">
      <div>
        <v-btn depressed icon>
          <v-icon x-large>first_page</v-icon>
        </v-btn >
        <v-btn depressed icon>
          <v-icon x-large>play_circle</v-icon>
        </v-btn>
        <v-btn depressed icon>
          <v-icon x-large>last_page</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row class="action-row" justify="center">

      <v-btn depressed icon>
        <v-icon x-large>volume_down_alt</v-icon>
      </v-btn>
      <v-btn depressed icon>
        <v-icon x-large>volume_mute</v-icon>
      </v-btn>
      <v-btn depressed icon>
        <v-icon x-large>volume_up</v-icon>
      </v-btn>
    </v-row>
    <v-row class="action-row">
      <div>
        <v-btn depressed icon>
          <v-icon x-large>queue_music</v-icon>
        </v-btn >
        <v-btn depressed icon>
          <v-icon x-large>android_now_playing</v-icon>
        </v-btn>
        <v-btn depressed icon>
          <v-icon x-large>info</v-icon>
        </v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
import store from "@/store/store.js"


export default {
    name: "PuertaComp"

    data () {
        return {
          id : 0,    //PREGUNTAR POR QUE NO ME DEJA PONER this.id en vez de 0
          //Aca me mandan que device en especial es NO SE COMO SE HACE LO HARDCODEO
          device : store.house.cuartos[0].roomDevices[0],

        }
      },
}
</script>

<style scoped>

</style>