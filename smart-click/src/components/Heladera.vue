<template>
  <div class="action-row device-div" >
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <device-icon name-device="kitchen" :deviceEntity="deviceEntity"/>
      </v-row>
      <v-row>
        <p class="text">{{deviceEntity.name}}</p>
        <edit-device :deviceEntity="deviceEntity" ></edit-device>
      </v-row>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row class="action-row action_btn">
        <v-slider :disabled="temperaturePush" class="margin-slider" prepend-icon="device_thermostat"
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
         <v-slider :disabled="freezerTemperaturePush" class="margin-slider" prepend-icon="ac_unit"
                   :max="-8"
                   :min="-20"
                   style="width: 50%"
                   v-model="freezerTemperature"
                   @change="setTemperatureFreezerFunction"
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
          <v-btn :disabled="modePush" value="default" width="70px"><v-icon>auto_mode</v-icon></v-btn>
          <v-btn :disabled="modePush" value="party" width="70px"><v-icon>celebration</v-icon></v-btn>
          <v-btn :disabled="modePush" value="vacation" width="70px"><v-icon>beach_access</v-icon></v-btn>
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
    name: "Heladera",
    props: {
      deviceEntity: {},
    },

    components: {
      EditDevice,
          DeviceIcon,
    },

  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
      $getDeviceState:"getDeviceState",
      $getAllDevice:"getAllDevices"
    }),

    async setTemperatureFunction() {
      this.temperaturePush= true
      let params = [this.deviceEntity.id, "setTemperature", [this.temperature]]

      try {

        await this.$execute(params)
        await this.updateContent()

      } catch (e) {
        this.setResult(e);
      }
      this.temperaturePush= false
    },

    async setTemperatureFreezerFunction() {
      this.freezerTemperaturePush= true
      let params = [this.deviceEntity.id, "setFreezerTemperature", [this.freezerTemperature]]
      try {

        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.freezerTemperaturePush= false
    },

    async setModeFunction() {
      this.modePush= true
      let params = [this.deviceEntity.id, "setMode", [this.mode]]
      try {

        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.modePush= false

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
      this.deviceState=this.deviceEntity.state
      this.temperature=this.deviceState.temperature
      this.freezerTemperature=this.deviceState.freezerTemperature
      this.mode=this.deviceState.mode
    },
  data() {
        return {
          temperature:null,
          freezerTemperature: null,
          mode:"default" ,
          deviceState:[],
          temperaturePush: false,
          freezerTemperaturePush: false,
          modePush: false,
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
    font-size: 25px;

  }

  .margin-card {
    margin-bottom: 50px;
  }

</style>