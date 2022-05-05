<template>
  <div>
    <v-icon x-large>speaker</v-icon>
    <v-row>
      <p>{{deviceEntity.deviceName}}</p>
      <device-icon/>
    </v-row>

    <v-row class="action-row">
      <div>
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
          <v-icon x-large>radio</v-icon>
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
import DeviceIcon from "@/components/DeviceIcon";

export default {
  name: "SpeakerComp",
  components: {DeviceIcon},
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

.action-row{
  padding-top:   0px;
  justify-content: center;
}

</style>