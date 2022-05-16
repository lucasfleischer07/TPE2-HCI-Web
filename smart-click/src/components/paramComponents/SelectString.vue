<template>
  <div>
    <v-text-field
        label="texto de la accion"
        :rules="rules"
        hide-details="auto"
        v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "selectString",
  props:['param','textOptions'],
  model:{
    prop: 'param',
    event: 'change'
  },
  data() {
    return {
      value: "",
      rules: [v => ( v.length>=1 && v.length <=30)  || 'Debe tener entre 1 y 30 caracteres', v => this.textOptions.includes(v) || `debe ser una de las siguientes opciones ${this.textOptions.toString()}`]
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