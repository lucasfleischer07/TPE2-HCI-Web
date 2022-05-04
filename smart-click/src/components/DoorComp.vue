<template>

  <div>
    <v-icon x-large>door_front</v-icon>
    <p>{{device.deviceName}}</p>
    <v-row class="action-row  ">
      <div>
        <v-btn depressed icon>
          <v-icon x-large>open_in_full</v-icon>
        </v-btn >
        <v-btn depressed icon>
          <v-icon x-large>close_fullscreen</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row class="action-row  ">
      <div>
        <v-btn depressed icon>
          <v-icon x-large>lock</v-icon>
        </v-btn >
        <v-btn depressed icon>
          <v-icon x-large>lock_open</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row class="action-row  ">
      <v-btn depressed icon>
          <v-icon x-large>info</v-icon>
      </v-btn >
    </v-row>


  </div>
</template>

<script>
import store from "@/store/store.js"


export default {
    name: "DoorComp",

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
  .action-row{
    padding-top:   0px;
    justify-content: center;
  }
</style>