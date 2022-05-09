<template>
    <div class="device">
      <v-row class="action-row action_btn">
        <device-icon name-device="emoji_objects"/>
      </v-row>
      <p>{{deviceEntity.deviceName}}</p>
      <v-row class="action-row">
        <v-switch inline> </v-switch>
        </v-row>
      <v-row class="action-row"  >

          <v-slider prepend-icon="brightness_6"
                    :max="100"
                    :min="0"
                    thumb-label

                    v-model="slider" ></v-slider>
          <v-text-field dense
              hide-details
              single-line
              v-model="slider"


          type="number">
          </v-text-field>

        </v-row>

      <v-row class="action-row action_btn">

        <p>Color: </p>
      <v-btn fab
            x-small
            :color=color
            @click="toggle= !toggle"></v-btn>
        </v-row>
      <v-color-picker :hide-canvas="toggle" :hide-sliders="toggle" hide-inputs
      v-model="color">
      </v-color-picker>
     </div>
</template>

<script>

import DeviceIcon from "@/components/DeviceIcon";
export default {
name: "LightbulbComp",

  props: {
    deviceEntity: {},
  },
  components: {
    DeviceIcon,
  },
  data () {
    return {
      slider:0,
      modal2:false,
      toggle:true,
      color:"red"

    }
  },
}
</script>

<style scoped>
.action-row{

  justify-content: center;
}

.action_btn{
  padding: 5px;
}

</style>