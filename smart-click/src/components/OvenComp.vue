<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="microwave"/>
      </v-row>
      <p class="text">{{deviceEntity.deviceName}}</p>
    </v-card>

    <v-card class="background-card">
      <v-row style="justify-content: center">
        <v-switch inline></v-switch>
      </v-row>
      <v-row class="action-row">
        <v-slider class="margin-slider" prepend-icon="device_thermostat"
                  :max="230"
                  :min="90"
                  style="width: 50%"
                  v-model="slider"></v-slider>
        <v-text-field dense
                      hide-details
                      single-line
                      v-model="slider"
                      style="width: 1%"
                      type="number"
                      class="margin-text">
        </v-text-field>
      </v-row>
      <p style="padding-top: 30px">Fuente calor</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="fuenteCalor">
          <v-btn width="100px">ABAJO</v-btn>
          <v-btn width="100px">NORMAL</v-btn>
          <v-btn width="100px">ARRIBA</v-btn>
        </v-btn-toggle>
      </v-row>
      <p style="padding-top: 30px">Grill</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="grillMode" class="grill-buttons">
          <v-btn width="100px"><v-icon>power_off</v-icon></v-btn>
          <v-btn width="100px"><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn width="100px"><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>

      <p style="padding-top: 30px">Convección</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="conveccionMode">
          <v-btn width="100px"><v-icon>power_off</v-icon></v-btn>
          <v-btn width="100px"><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn width="100px"><v-icon>bolt</v-icon></v-btn>
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
      slider:90

    }
  }
}
</script>

<style scoped>

  .device-div{
    width: 310px;
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

  .margin-text {
    margin-right: 20px;
    margin-left: 20px;
  }

  .text {
    margin-bottom: 20px;
  }

  .margin-slider {
    margin-left: 10px;
  }

  .background-card {
    background-color: #E6F2FF;
  }



</style>