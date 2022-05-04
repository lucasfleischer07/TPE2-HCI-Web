<template>
  <div>
    <v-icon x-large>speaker</v-icon>

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
          <v-slider v-model="sound"
                    prepend-icon="mdi-magnify-minus-outline"
                    @click:append="sound=0"
                    />
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

  <!--  COMO HACER PARA DENTRO DE UN ROW, SUBDIVIDIR EN ROW CHICAS
  <div>
    <v-row>
      <v-btn depressed icon>
        <v-icon >volume_up</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-btn depressed icon>
        <v-icon >volume_down_alt</v-icon>
      </v-btn>
    </v-row>
  </div>
  -->

</template>

<script>
import store from "@/store/store.js"

export default {
  name: "SpeakerComp",

  data () {
    return {
      sound: 0,
      id : 0,    //PREGUNTAR POR QUE NO ME DEJA PONER this.id en vez de 0
      //Aca me mandan que device en especial es NO SE COMO SE HACE LO HARDCODEO
      device : store.house.cuartos[0].roomDevices[0],

    }
  },
}
</script>

<style scoped>

  .action-row{
    padding-top:   0px;
    justify-content: center;
  }

</style>