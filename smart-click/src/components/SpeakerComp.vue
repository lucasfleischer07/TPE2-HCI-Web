<template>
  <div class="action-row device-div" >
    <v-card>
      <v-row class="action-row action_btn" >
        <device-icon name-device="speaker"/>
      </v-row>
      <p>{{deviceEntity.deviceName}}</p>
      <v-row class="action-row action_btn">
        <div >
          <v-btn depressed icon>
            <v-icon  x-large>first_page</v-icon>
          </v-btn >
          <v-btn depressed icon>
            <v-icon x-large>play_circle</v-icon>
          </v-btn>
          <v-btn depressed icon>
            <v-icon x-large>last_page</v-icon>
          </v-btn>
        </div>
      </v-row>
      <v-row class="action-row action_btn" >

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
            <v-icon x-large>radio</v-icon>
          </v-btn>
          <v-btn depressed icon>
            <v-icon x-large>info</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-card>
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
import DeviceIcon from "@/components/DeviceIcon";

export default {
  name: "SpeakerComp",

  components: {
    DeviceIcon
  },

  props: {
    deviceEntity: {},
  },
  data () {
    return {
      sound: 0,

    }
  },
}
</script>

<style scoped>

.device-div{
  width: 150px;
  justify-content: start;
  height: max-content;
}

.action-row{
  padding-top:   0px;
  justify-content: center;
}

  .action_btn{
    padding: 5px;
  }

</style>