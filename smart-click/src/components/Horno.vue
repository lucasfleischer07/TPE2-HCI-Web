<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="microwave" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.name}}</p>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row style="justify-content: center">
        <v-switch inline :v-model="onOffOven" @click="onOffOvenFunction"></v-switch>
      </v-row>
      <v-row class="action-row">
        <v-slider class="margin-slider" prepend-icon="device_thermostat"
                  :max="230"
                  :min="90"
                  style="width: 50%"
                  v-model="slider"
                  @click="setTemperatureFunction"
                  ></v-slider>
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
          <v-btn @click="setHeatFunction" width="100px">ABAJO</v-btn>
          <v-btn @click="setHeatFunction" width="100px">NORMAL</v-btn>
          <v-btn @click="setHeatFunction" width="100px">ARRIBA</v-btn>
        </v-btn-toggle>
      </v-row>
      <p style="padding-top: 30px">Grill</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="grillMode" class="grill-buttons" >
          <v-btn @click="setGrillFunction" width="100px"><v-icon>power_off</v-icon></v-btn>
          <v-btn @click="setGrillFunction" width="100px"><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn @click="setGrillFunction" width="100px"><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>

      <p style="padding-top: 30px">Convección</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="conveccionMode">
          <v-btn @click="setConvectionFunction" width="100px"><v-icon>power_off</v-icon></v-btn>
          <v-btn @click="setConvectionFunction" width="100px"><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn @click="setConvectionFunction" width="100px"><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Horno",
  components: {DeviceIcon},

  props: {
    deviceEntity: {},
  },


  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
    }),

    async onOffOvenFunction() {
      let params
      try {
        if (this.onOffOven) {
          params = [this.deviceEntity.id, "turnOn", []]
        } else {
          params = [this.deviceEntity.id, "turnOff", []]
        }
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async setTemperatureFunction() {
      let params = [this.deviceEntity.id, "setTemperature", [this.slider]]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async setHeatFunction() {
      let heat;
      if(this.fuenteCalor === 0) {
        heat = "bottom";
      } else if(this.fuenteCalor === 1) {
        heat = "conventional";
      } else if(this.fuenteCalor === 2) {
        heat = "top";
      }
      let params = [this.deviceEntity.id, "setHeat", [heat]]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async setGrillFunction() {
      let grill;
      if(this.grillMode === 0) {
        grill = "off";
      } else if(this.grillMode === 1) {
        grill = "eco";
      } else if(this.grillMode === 2) {
        grill = "large";
      }
      let params = [this.deviceEntity.id, "setGrill", [grill]]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

    async setConvectionFunction() {
      let convection;
      if(this.conveccionMode == 0) {
        convection = "off";
      } else if(this.conveccionMode == 1) {
        convection = "eco";
      } else if(this.conveccionMode == 2) {
        convection = "normal";
      }
      let params = [this.deviceEntity.id, "setConvection", [convection]]
      try {
        await this.$execute(params)
      } catch (e) {
        this.setResult(e);
      }
    },

  },


  data(){
    return{
      fuenteCalor:undefined,
      grillMode:undefined,
      onOffOven: false,
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

  .margin-card {
    margin-bottom: 50px;
  }



</style>