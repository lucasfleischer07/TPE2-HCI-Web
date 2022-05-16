<template>
  <div class="action-row device-div" >
    <v-card class="background-card">
      <v-row class="action-row action_btn" >
        <device-icon name-device="speaker" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.deviceName}}</p>
    </v-card>

    <v-card class="background-card">
      <v-row class="action-row action_btn">
          <div >
            <v-btn depressed icon><v-icon  x-large>first_page</v-icon></v-btn >
            <v-btn class="margin-separation-icons" depressed icon><v-icon x-large>play_circle</v-icon></v-btn>
            <v-btn depressed icon><v-icon x-large>last_page</v-icon></v-btn>
          </div>
        </v-row>
        <v-row class="action-row action_btn slider-class" >
          <v-btn depressed icon v-model="sound" @click="sound=0"><v-icon x-large>volume_down_alt</v-icon></v-btn>
          <v-slider class="margin-slider"
                    :max="10"
                    :min="0"
                    style="width: 30%"
                    v-model="sound"></v-slider>
          <v-text-field dense
                        hide-details
                        single-line
                        v-model="sound"
                        style="width: 20%"
                        type="number"
                        class="margin-text">
          </v-text-field>
        </v-row>
        <v-row class="action-row">
          <div>
            <v-btn depressed icon><v-icon x-large>queue_music</v-icon></v-btn >
            <v-btn class="margin-separation-icons2" depressed icon><v-icon x-large>radio</v-icon></v-btn>
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
  width: 220px;
  justify-content: start;
  height: max-content;
}

.margin-slider {
  margin-left: 10px;
}

.margin-text {
  margin-right: 15px;
  margin-left: 10px;
}

.action-row{
  justify-content: center;
}

  .action_btn{
    padding: 5px;
  }

  .background-card {
    background-color: #E6F2FF;
  }

  .slider-class {
    margin-top: 25px;
    margin-left: 5px;
  }

  .text {
    margin-bottom: 20px;
  }

  .margin-slider {
    margin-right: 7px;
    margin-left: 7px;
  }

  .margin-separation-icons {
    margin-left: 20px;
    margin-right: 20px;
  }

.margin-separation-icons2 {
  margin-left: 80px;
  margin-bottom: 5px;
}

</style>