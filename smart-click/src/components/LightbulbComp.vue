<template>
  <div >
    <v-card depressed class="action-row device-div">
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="emoji_objects" />
      </v-row>
      <p>{{deviceEntity.deviceName}}</p>
      <v-row class="action-row action_btn" >
        <v-switch inline> </v-switch>
      </v-row>
      <v-row class="action-row action_btn" >

          <v-slider prepend-icon="brightness_6"
                    :max="100"
                    :min="0"
                    thumb-label
                    style="width: 69%"
                    v-model="slider" ></v-slider>
          <v-text-field dense
              hide-details
              single-line
              v-model="slider"
              style="width: 31%"
          type="number">
          </v-text-field>

      </v-row>
      <v-btn fab
            x-small
            :color=btnColor
            @click="toggle= !toggle"></v-btn>
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
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ],
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
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }


</style>