<template>
  <div class="action-row device-div" >
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <device-icon name-device="kitchen" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.name}}</p>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row class="action-row action_btn">
        <v-slider class="margin-slider" prepend-icon="device_thermostat"
                  :max="8"
                  :min="2"
                  style="width: 50%"
                  v-model="temperature"
                  @change="setTemperatureFunction"
        ></v-slider>
        <v-text-field dense
                      hide-details
                      single-line
                      v-model="temperature"
                      style="width: 20%"
                      type="number"
                      suffix="°C"
                      class="margin-text"
                      readonly>
        </v-text-field>
       </v-row>
       <v-row class="action-row action_btn">
         <v-slider class="margin-slider" prepend-icon="ac_unit"
                   :max="-8"
                   :min="-20"
                   style="width: 50%"
                   v-model="freezerTemperature"
                   @click="setTemperatureFreezerFunction"
         ></v-slider>
         <v-text-field dense
                       hide-details
                       single-line
                       v-model="freezerTemperature"
                       style="width: 20%"
                       type="number"
                       suffix="°C"
                       class="margin-text"
                        readonly>
         </v-text-field>
      </v-row>

      <p style="padding-top: 30px">Modo</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="mode" class="grill-buttons" @change="setModeFunction">
          <v-btn value="default" width="70px"><v-icon>auto_mode</v-icon></v-btn>
          <v-btn value="party" width="70px"><v-icon>celebration</v-icon></v-btn>
          <v-btn value="vacation" width="70px"><v-icon>beach_access</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";
import {Device} from "@/Api/Device";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Heladera",
    props: {
      deviceEntity: Device,
    },

    components: {
          DeviceIcon,
    },

  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
      $getDeviceState:"getDeviceState",
      $getAllDevice:"getAllDevices"
    }),

    async setTemperatureFunction() {
      let params = [this.deviceEntity.id, "setTemperature", [this.temperature]]

      try {
        await this.updateContent()
        await this.$execute(params)

      } catch (e) {
        this.setResult(e);
      }
    },

    async setTemperatureFreezerFunction() {
      let params = [this.deviceEntity.id, "setFreezerTemperature", [this.freezerTemperature]]
      try {
        await this.updateContent()
        await this.$execute(params)

      } catch (e) {
        this.setResult(e);
      }
    },

    async setModeFunction() {
      let params = [this.deviceEntity.id, "setMode", [this.mode]]
      try {
        await this.updateContent()
        await this.$execute(params)

      } catch (e) {
        this.setResult(e);
      }
    },
    async updateContent(){

      this.deviceState=await this.$getDeviceState(this.deviceEntity.id)
      this.updateVars()

    },

    updateVars(){
      this.temperature=this.deviceState.temperature
      this.freezerTemperature=this.deviceState.freezerTemperature
      this.mode=this.deviceState.mode
    },
  },
    created() {
      this.temperature=this.deviceEntity.state.temperature
      this.freezerTemperature=this.deviceEntity.state.freezerTemperature
      this.mode=this.deviceEntity.state.mode
      this.deviceState=this.deviceEntity.state
    },
  data() {
        return {
          temperature:0,
          freezerTemperature: 0,
          mode:"default" ,
          deviceState:[],
        }
    }
}
</script>

<style scoped>

  .device-div{
    width: 220px;
    justify-content: start;
    height: max-content;
  }
  .action-row{
    padding-top:   0px;
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }

  .margin-text {
    margin-right: 10px;
  }

  .margin-slider {
    padding-right: 10px;
    padding-left: 10px;
  }

  .background-card {
    background-color: #E6F2FF;
  }

  .text {
    margin-bottom: 20px;
  }

  .margin-card {
    margin-bottom: 50px;
  }

</style>