<template>
  <div style="justify-content: center; padding-left: 20px; display: flex; width: 80%">
    <v-slider class="justify-center"
              :max="max"
              :min="min"
              style="width: 80%"
              v-model="value"
              thumb-label="always"
              @click="(brightnessFunction)">
      <template v-slot:prepend>
        <h3>{{min}}</h3>
      </template>
      <template v-slot:append >
        <h3  class="justify-center">{{max}}</h3>
      </template>
    </v-slider>


  </div>
</template>

<script>
export default {
  name: "selectNumber",
  props:['param','min','max'],
  model:{
    prop: 'param',
    event: 'change'
  },
  data() {
    return {
      value: "",
      rules: [v => !isNaN(v)   || 'Debe ser un numero', v => (this.min<=parseInt(v) && parseInt(v) <=this.max ) || `El numero debe estar entre ${this.min} y ${this.max}`]
    }
  },
  watch: {
    value(){
      this.changeText()
    }

  },

  methods: {
    changeText(){
      this.$emit('change',this.value)
    }
  }
}
</script>

<style scoped>

</style>