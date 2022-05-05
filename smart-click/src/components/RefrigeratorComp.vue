<template>

    <div class="action_btn action_btn">
        <v-row class="action-row">
              <device-icon name-device="kitchen"/>
            </v-row>
            <p>{{deviceEntity.deviceName}}</p>
        <v-row class="action-row">
            <div>
               <v-slider prepend-icon="device_thermostat"
                        @change="refriTemp=number"/>
            </div>
       </v-row>
       <v-row class="action-row action_btn" justify="center">

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

        }
    }
}
</script>

<style scoped>
  .action-row{
    padding-top:   0px;
    justify-content: center;
  }

  .action_btn{
    padding: 5px;
  }

</style>