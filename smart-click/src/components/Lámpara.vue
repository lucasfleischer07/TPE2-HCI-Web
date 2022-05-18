<template>
  <div class="action-row device-div">
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <DeviceIcon name-device="emoji_objects" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.name}}</p>
    </v-card>

    <v-card class="background-card margin-card">
      <v-row class="action-row action_btn" >
          <v-switch :disabled="setOnOFfPush" inline v-model="onOffLamp" @change="onOffLampFunction"></v-switch>
        </v-row>
        <v-row :disabled="brightnessPush" class="action-row action_btn" >
            <v-slider class="margin-slider" prepend-icon="brightness_6"
                      :max="100"
                      :min="0"
                      style="width: 50%"
                      v-model="slider"
                      @change="brightnessFunction"
            ></v-slider>
            <v-text-field dense
                hide-details
                single-line
                v-model="slider"
                style="width: 25%"
                type="number"
                suffix="%"
                class="margin-text"
                readonly>
            </v-text-field>

        </v-row>
        <v-btn fab
              x-small
              :color=btnColor
              @click="toggle= !toggle"
              class="margin-button"></v-btn>

        <v-color-picker :disabled="colorChangePush" :show-swatches="toggle" hide-canvas hide-sliders hide-inputs
            v-model="btnColor" @update:color="toggle = !toggle"
        >
            :swatches="swatches"

        </v-color-picker>
    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";
import {mapActions} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
name: "Lámpara",

  components: {
    DeviceIcon
  },

  props: {
    deviceEntity: {},
  },
  created() {
    this.deviceState=this.deviceEntity.state
    this.btnColor=this.deviceEntity.state.color
    this.slider=this.deviceEntity.state.brightness
    this.setOnOff()
  },
  watch: {
    btnColor(){
      this.colorChangeFunction()


    },
  },

  methods: {
    ...mapActions("Devices", {
      $execute: "executeDeviceAction",
      $getDeviceState:"getDeviceState",
      $getAllDevice:"getAllDevices"
    }),

    async onOffLampFunction() {
      this.setOnOFfPush=true
      let params
      try {
        if(this.onOffLamp==true) {
          params = [this.deviceEntity.id, "turnOn", []]
        } else {
          params = [this.deviceEntity.id, "turnOff", []]
        }
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.setOnOFfPush=false
    },

    async brightnessFunction() {
      this.brightnessPush=true
      let params = [this.deviceEntity.id, "setBrightness", [this.slider]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.brightnessPush=false

    },

    async colorChangeFunction() {
      this.colorChangePush=true
      let params = [this.deviceEntity.id, "setColor", [this.btnColor]]
      try {
        await this.$execute(params)
        await this.updateContent()
      } catch (e) {
        this.setResult(e);
      }
      this.colorChangePush=false
    },

    async updateContent(){

      this.deviceState=await this.$getDeviceState(this.deviceEntity.id)
      this.updateVars()

    },


    updateVars(){
      this.btnColor=this.deviceState.color
      this.slider=this.deviceState.brightness
      this.setOnOff()

    },
    setOnOff(){
      if(this.deviceState.status=='on'){
        this.onOffLamp=true
      }else this.onOffLamp=false
    }




  },


  data () {
    return {
      slider:0,
      deviceState: {},
      onOffLamp:true,
      toggle:false,
      btnColor:"",
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFBF80', '#FF8000', '#663300'],
        ['#CC6600', '#663300', '#331A00'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
        ['#D24DFF', '#8600B3', '#39004D'],
        ['#FF80DF', '#FF00BF', '#66004D'],
        ['#D9D9D9', '#CCCCCC', '#808080'],
      ],
      setOnOFfPush: false,
      colorChangePush: false,
      brightnessPush: false,
    }
  },
}
</script>

<style scoped>

.margin-slider {
  margin-left: 10px;
}

.device-div{
  width: 210px;
  justify-content: start;
  height: max-content;
}

  .text {
    margin-bottom: 20px;
    font-size: 25px;

  }

  .action-row{
    justify-content: center;
  }

  .margin-text {
    margin-right: 10px;
    margin-left: 10px;
  }

  .background-card {
    background-color: #E6F2FF;
  }

  .margin-button {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .action_btn{
    padding: 5px;
  }

  .margin-card {
    margin-bottom: 50px;
  }


</style>