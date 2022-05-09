<template>
  <div>

    <v-row class="action-row action-btn">
  <v-btn depressed icon>
    <device-icon name-device="microwave"/>
  </v-btn>
      </v-row>
    <p>{{deviceEntity.deviceName}}</p>
    <v-row class="action-row">
  <v-switch inline> </v-switch>
    </v-row>
      <v-row class="action-row">
    <v-slider prepend-icon="device_thermostat"
              :max="240"
              :min="90"
              thumb-label
              style="width: 30%"
              ></v-slider>
      </v-row>
    <v-row class="action-row action-btn">
      <p>Fuente calor</p>
    <v-btn-toggle mandatory v-model="fuenteCalor">
      <v-btn>ABAJO</v-btn>
      <v-btn>NORMAL</v-btn>
      <v-btn>ARRIBA</v-btn>
    </v-btn-toggle>
    </v-row>

    <v-row class="action-row action-btn">
      <p>Grill</p>
      <v-btn-toggle mandatory
                    v-model="grillMode">
        <v-btn><v-icon>power_off</v-icon></v-btn>
        <v-btn><v-icon>energy_savings_leaf</v-icon></v-btn>
        <v-btn><v-icon>bolt</v-icon></v-btn>
      </v-btn-toggle>
    </v-row>
    <v-row class="action-row action-btn">
      <p>Convección</p>
      <v-btn-toggle mandatory
                    v-model="conveccionMode">
        <v-btn><v-icon>power_off</v-icon></v-btn>
        <v-btn><v-icon>energy_savings_leaf</v-icon></v-btn>
        <v-btn><v-icon>bolt</v-icon></v-btn>
      </v-btn-toggle>
    </v-row>
  </div>
</template>

<script>
import DeviceIcon from "@/components/DeviceIcon";

export default {
  name: "OvenComp",
  props: {
    deviceEntity: {},
  },
  components: {
    DeviceIcon,
  },
  data(){
    return{
      fuenteCalor:undefined,
      grillMode:undefined,
      conveccionMode:undefined

    }
  }
}
</script>

<style scoped>
.action-row{
  justify-content: center;
}

.action-btn{
  padding: 5px;
}

</style>