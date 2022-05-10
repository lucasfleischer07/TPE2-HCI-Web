<template>
  <div class="action-row " style="width: 110px">
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
                    style="width: 65%"
                    v-model="slider" ></v-slider>
          <v-text-field dense
              hide-details
              single-line
              v-model="slider"
              style="width: 15%"
          type="number">
          </v-text-field>

      </v-row>
      <v-btn fab
            x-small
            :color=btnColor
            @click="toggle= !toggle"></v-btn>
      <v-color-picker :hide-canvas="toggle" :hide-sliders="toggle" hide-inputs
      v-model="btnColor">
      </v-color-picker>
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
      btnColor:"red"

    }
  },
}
</script>

<style scoped>
.device{
  width:20%
}

  .action-row{
    padding-top:   0px;
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }


</style>