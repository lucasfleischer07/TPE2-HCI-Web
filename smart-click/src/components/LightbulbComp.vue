<template>
    <div>
        <v-btn depressed icon>
            <v-icon x-large> emoji_objects</v-icon>
        </v-btn>
      <p>{{deviceEntity.deviceName}}</p>
        <v-switch inline> </v-switch>
        <v-row>

          <v-slider prepend-icon="brightness6"
                    :max="100"
                    :min="0"
                    thumb-label
                    v-model="slider" ></v-slider>
          <v-text-field
              hide-details
              single-line
              v-model="slider"
          type="number"></v-text-field>
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


export default {
name: "LightbulbComp",

  props: {
    deviceEntity: {},
  },
  data () {
    return {
      slider:0,
      toggle:false,
      btnColor:"red"

    }
  },
}
</script>

<style scoped>

</style>