<template>
  <div>
    <v-container fluid c>
      <v-row aligned="center">
        <v-col class="d-flex" cols="12" sm="10">
          <v-select
              :items="textOptions"
              label="Acción seleccionada:"
              outlined class="house-selector-slider"
              dense
              v-model="value"
              persistent-placeholder
              placeholder="Seleccione una acción">
          </v-select>
        </v-col>
      </v-row>
    </v-container>
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