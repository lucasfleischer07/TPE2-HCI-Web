<template>

  <div class="action-row device-div" >
        <v-row class="action-row action_btn">
              <device-icon name-device="kitchen"/>
        </v-row>
            <p class="action_btn">{{deviceEntity.deviceName}}</p>
        <v-row class="action-row">
            <div>
               <v-slider prepend-icon="device_thermostat"
                        v-model="temperature"/>
            </div>
       </v-row>
       <v-row class="action-row action_btn">

            <div>
               <v-slider prepend-icon="ac_unit"
               @change="refriTemp=number"/>
            </div>
       </v-row>
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
          temperature: 0
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
    padding-top:   0px;
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }

</style>