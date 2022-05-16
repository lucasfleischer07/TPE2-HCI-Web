<template>
  <div>
    <v-btn fab
           x-small
           :color=btnColor
           @click="toggle= !toggle"
           class="margin-button"></v-btn>
    <v-color-picker :show-swatches="toggle" hide-canvas hide-sliders hide-inputs
                    v-model="btnColor"
                    @input="changeColor"
                    :swatches="swatches"
                    @update:color="toggle= !toggle"
    />

  </div>
</template>

<script>
export default {
  name: "selectColor",
  props: ['param'],
  data() {


    return {
      btnColor: "red",
      colorChanged: "",
      toggle:true,
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
      rules: [v => v.length ===0|| 'Deben elegir un color']
    }
  },
  methods: {
    changeColor(){
      this.$emit('input',this.btnColor)
    }
  }
}
</script>

<style scoped>

</style>