<template>
  <div>
    <v-text-field
        label="Cantidad de la accion"
        :rules="rules"
        hide-details="auto"
        v-model="value"
    />
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