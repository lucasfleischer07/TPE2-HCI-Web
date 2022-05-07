<template>
  <div>
  <v-btn depressed icon>
    <v-icon x-large>microwave</v-icon>
  </v-btn>
  <v-switch inline> </v-switch>
    <v-slider prepend-icon="device_thermostat"
              :max="240"
              :min="90"
              thumb-label
              style="width: 30%"
              ></v-slider>
    <v-row>
      <p>Fuente calor</p>
    <v-btn-toggle mandatory
                  v-model="fuenteCalor">
      <v-btn>ABAJO</v-btn>
      <v-btn>NORMAL</v-btn>
      <v-btn>ARRIBA</v-btn>
    </v-btn-toggle>
    </v-row>

    <v-row>
      <p>Grill</p>
      <v-btn-toggle mandatory
                    v-model="grillMode">
        <v-btn><v-icon>power_off</v-icon></v-btn>
        <v-btn><v-icon>energy_savings_leaf</v-icon></v-btn>
        <v-btn><v-icon>bolt</v-icon></v-btn>
      </v-btn-toggle>
    </v-row>
    <v-row>
      <p>Conveccion</p>
      <v-btn-toggle mandatory
                    v-model="conveccionMode">
        <v-btn><v-icon>power_off</v-icon></v-btn>
        <v-btn><v-icon>energy_savings_leaf</v-icon></v-btn>
        <v-btn><v-icon>bolt</v-icon></v-btn>
      </v-btn-toggle>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "OvenComp",
  props: {
    deviceEntity: {},
  },
  data(){
    return{
      fuenteCalor:undefined,
      grillMode:undefined,
      conveccionMode:undefined

    }
  }
}
</script>

<style scoped>

</style>