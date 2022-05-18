<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="microwave" :deviceEntity="deviceEntity"/>
      </v-row>
      <v-row style="display: contents">
        <p class="text">{{deviceEntity.name}}</p>
        <edit-device :deviceEntity="deviceEntity" ></edit-device>
      </v-row>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row style="justify-content: center">
        <v-switch :disabled="onOffPush" inline v-model="deviceState.status" true-value="on" false-value="off" @change="onOffOvenFunction"></v-switch>
      </v-row>
      <v-row class="action-row">
        <v-slider :disabled="temperaturePush" class="margin-slider" prepend-icon="device_thermostat"
                  :max="230"
                  :min="90"
                  style="width: 50%"
                  v-model="slider"
                  @change="setTemperatureFunction"
                  ></v-slider>
        <v-text-field dense
                      readonly
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
        <v-btn-toggle mandatory v-model="fuenteCalor" @change="setHeatFunction">
          <v-btn :disabled="heatModePush" value="bottom"  width="100px">ABAJO</v-btn>
          <v-btn :disabled="heatModePush" value="conventional" width="100px">NORMAL</v-btn>
          <v-btn :disabled="heatModePush" value="top"  width="100px">ARRIBA</v-btn>
        </v-btn-toggle>
      </v-row>
      <p style="padding-top: 30px">Grill</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="grillMode" class="grill-buttons" @change="setGrillFunction">
          <v-btn :disabled="grillModePush" value="off"  width="100px"><v-icon>power_off</v-icon></v-btn>
          <v-btn :disabled="grillModePush" value="eco"  width="100px"><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn :disabled="grillModePush" value="large"  width="100px"><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>

      <p style="padding-top: 30px">Convección</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="conveccionMode" @change="setConvectionFunction">
          <v-btn :disabled="convectionModePush" value="off" @click="setConvectionFunction" width="100px"><v-icon>power_off</v-icon></v-btn>
          <v-btn :disabled="convectionModePush" value="eco" @click="setConvectionFunction" width="100px"><v-icon>energy_savings_leaf</v-icon></v-btn>
          <v-btn :disabled="convectionModePush" value="normal" @click="setConvectionFunction" width="100px"><v-icon>bolt</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";
import EditDevice from "@/components/addingComponents/editDevice";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Horno",
  components: {EditDevice, DeviceIcon},

  props: {
    deviceEntity: {},
  },


  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
      $getDeviceState:"getDeviceState"
    }),

    async onOffOvenFunction() {
      this.onOffPush=true
      let params
      try {
        if (this.deviceState.status=='on') {
          params = [this.deviceEntity.id, "turnOn", []]
        } else {
          params = [this.deviceEntity.id, "turnOff", []]
        }
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.onOffPush=false
    },

    async setTemperatureFunction() {
      this.temperaturePush=true
      let params = [this.deviceEntity.id, "setTemperature", [this.slider]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.temperaturePush=false
    },

    async setHeatFunction() {
      this.heatModePush=true
      let params = [this.deviceEntity.id, "setHeat", [this.fuenteCalor]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.heatModePush=false
    },

    async setGrillFunction() {
      this.grillModePush=true
      let params = [this.deviceEntity.id, "setGrill", [this.grillMode]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.grillModePush=false
    },

    async setConvectionFunction() {
      this.convectionModePush=true
      let params = [this.deviceEntity.id, "setConvection", [this.conveccionMode]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.convectionModePush=false
    },


    async updateContent(){

      this.deviceState=await this.$getDeviceState(this.deviceEntity.id)
      this.updateVars()

    },

    updateVars(){
      this.fuenteCalor=this.deviceState.heat
      this.grillMode=this.deviceState.grill
      this.conveccionMode=this.deviceState.convection
      this.slider=this.deviceState.temperature

    },

  },
  created() {
    this.deviceState=this.deviceEntity.state
    this.fuenteCalor=this.deviceState.heat
    this.grillMode=this.deviceState.grill
    this.conveccionMode=this.deviceState.convection
    this.slider=this.deviceState.temperature

  },


  data(){
    return{
      fuenteCalor:undefined,
      grillMode:undefined,
      onOffOven:true,
      conveccionMode:undefined,
      slider:90,
      deviceState:{},
      onOffPush: false,
      temperaturePush: false,
      heatModePush: false,
      grillModePush: false,
      convectionModePush: false,
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
    font-size: 25px;

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