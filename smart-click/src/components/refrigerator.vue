<template>
  <div class="action-row device-div" >
    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <device-icon name-device="kitchen" :deviceEntity="deviceEntity"/>
      </v-row>
      <p class="text">{{deviceEntity.deviceName}}</p>
    </v-card>

    <v-card class="background-card">
      <v-row class="action-row action_btn">
        <v-slider class="margin-slider" prepend-icon="device_thermostat"
                  :max="8"
                  :min="2"
                  style="width: 50%"
                  v-model="temperature"></v-slider>
        <v-text-field dense
                      hide-details
                      single-line
                      v-model="temperature"
                      style="width: 20%"
                      type="number"
                      suffix="°C"
                      class="margin-text">
        </v-text-field>
       </v-row>
       <v-row class="action-row action_btn">
         <v-slider class="margin-slider" prepend-icon="ac_unit"
                   :max="-8"
                   :min="-20"
                   style="width: 50%"
                   v-model="freezerTemperature"></v-slider>
         <v-text-field dense
                       hide-details
                       single-line
                       v-model="freezerTemperature"
                       style="width: 20%"
                       type="number"
                       suffix="°C"
                       class="margin-text">
         </v-text-field>
      </v-row>

      <p style="padding-top: 30px">Modo</p>
      <v-row class="action-row action_btn">
        <v-btn-toggle mandatory v-model="modeRefrigerator" class="grill-buttons">
          <v-btn width="70px"><v-icon>auto_mode</v-icon></v-btn>
          <v-btn width="70px"><v-icon>celebration</v-icon></v-btn>
          <v-btn width="70px"><v-icon>beach_access</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";


export default {
    name: "RefrigeratorComp",
    props: {
      deviceEntity: {},
    },

    components: {
          DeviceIcon,
    },

    data() {
        return {
          temperature: 2,
          freezerTemperature: -20,
          modeRefrigerator: ""
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

</style>