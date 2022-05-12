<template>
  <div class="action-row device-div">
    <v-card>
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="microwave"/>
      </v-row>
      <v-row style="justify-content: center">
      <v-switch inline> </v-switch>
      </v-row>
      <v-row class="action-row">
      <v-slider prepend-icon="device_thermostat"
                :max="240"
                :min="90"
                thumb-label
                style="width: 69%"
                loader-height="0.5"
                v-model="slider" ></v-slider>
        <v-text-field v-model="slider"
                      hide-details
                      single-line
                      style="width: 31%"
                      type="number"></v-text-field>
      </v-row>
      <p style="padding-top: 10px">Fuente calor</p>
      <v-row class="action-row action_btn">

      <v-btn-toggle mandatory v-model="fuenteCalor">
        <v-btn small>ABAJO</v-btn>
        <v-btn small>NORMAL</v-btn>
        <v-btn small>ARRIBA</v-btn>
      </v-btn-toggle>
      </v-row>
      <p style="padding-top: 10px">Grill</p>
      <v-row class="action-row action_btn">

        <v-btn-toggle mandatory
                      v-model="grillMode">
          <v-btn x-small><v-icon>power_off</v-icon></v-btn>
          <v-btn x-small><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn x-small><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>
      <p style="padding-top: 10px">Convección</p>
      <v-row class="action-row action_btn">

        <v-btn-toggle
                      mandatory
                      v-model="conveccionMode">
          <v-btn x-small><v-icon>power_off</v-icon></v-btn>
          <v-btn x-small><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn x-small><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
export default {
  name: "OvenComp",
  components: {DeviceIcon},

  props: {
    deviceEntity: {},
  },
  data(){
    return{
      fuenteCalor:undefined,
      grillMode:undefined,
      conveccionMode:undefined,
      slider:100

    }
  }
}
</script>

<style scoped>
  .device-div{
    width: 150px;
    justify-content: start;
    height: max-content;
}

  .action-row{
    padding-top:   10px;
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }



</style>