<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="emoji_objects" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.deviceName}}</p>
    </v-card>

    <v-card class="background-card">
      <v-row class="action-row action_btn" >
          <v-switch inline></v-switch>
        </v-row>
        <v-row class="action-row action_btn" >
            <v-slider class="margin-slider" prepend-icon="brightness_6"
                      :max="100"
                      :min="0"
                      style="width: 50%"
                      v-model="slider"></v-slider>
            <v-text-field dense
                hide-details
                single-line
                v-model="slider"
                style="width: 25%"
                type="number"
                suffix="%"
                class="margin-text">
            </v-text-field>

        </v-row>
        <v-btn fab
              x-small
              :color=btnColor
              @click="toggle= !toggle"
              class="margin-button"></v-btn>
        <v-color-picker :show-swatches="toggle" hide-canvas hide-sliders hide-inputs
        v-model="btnColor"
        :swatches="swatches"
        @update:color="toggle= !toggle"
        >
        </v-color-picker>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";

export default {
name: "LightbulbComp",

  components: {
    DeviceIcon
  },

  props: {
    deviceEntity: {},
  },
  data () {
    return {
      slider:0,
      toggle:true,
      btnColor:"red",
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFBF80', '#FF8000', '#663300'],
        ['#CC6600', '#663300', '#331A00'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
        ['#D24DFF', '#8600B3', '#39004D'],
        ['#FF80DF', '#FF00BF', '#66004D'],
        ['#D9D9D9', '#CCCCCC', '#808080'],
      ],
    }
  },
}
</script>

<style scoped>

.margin-slider {
  margin-left: 10px;
}

.device-div{
  width: 210px;
  justify-content: start;
  height: max-content;
}

  .text {
    margin-bottom: 20px;
  }

  .action-row{
    justify-content: center;
  }

  .margin-text {
    margin-right: 10px;
    margin-left: 10px;
  }

  .background-card {
    background-color: #E6F2FF;
  }

  .margin-button {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .action_btn{
    padding: 5px;
  }


</style>