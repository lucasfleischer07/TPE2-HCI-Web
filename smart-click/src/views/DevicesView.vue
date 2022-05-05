<template>
  <div class="devices-view">
    <div class="main-div">
      <div class="house-icon">
        <v-icon x-large>house</v-icon>
        <span class="text-h5" >{{ house.nombreCasa }}</span>
      </div>
      <div class="add-button">
        <v-btn color="primary" elevation="3" fab rounded ><v-icon>add</v-icon></v-btn>
      </div>
    </div>

    <div class="rooms-class">
      <v-expansion-panels>
        <v-expansion-panel v-for="room in house.cuartos" :key="room">
          <v-expansion-panel-header >
            <span>Cuarto: {{room.roomName}}, tiene {{room.roomDevicestotalAmoount}} dispositivos totales y {{room.roomDevicesActiveAmount}} dispositivos activos</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col v-for="device in room.roomDevices" :key="device" class="devices">
                <v-container v-for="deviceProto in devicesMap" :key="deviceProto">
                  <component v-if="deviceProto.id===device.deviceCode" :is="deviceProto.compName" :deviceEntity="device"/>

                </v-container>
              </v-col>
          <!--
              <speaker-comp class="devices" deviceEntity="device"/>
              <door-comp class="devices" deviceEntity="device"/>-->

            </v-row>
            <v-btn right color="primary" elevation="3" fab rounded ><v-icon>add</v-icon></v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- <v-btn x-large class="rooms-class" >
         <v-icon>house</v-icon>
       </v-btn>
      -->
    </div>

  </div>
</template>

<script>
import store from "@/store/store"
import SpeakerComp from "@/components/SpeakerComp";
import DoorComp from "@/components/DoorComp";
// import RefrigeratorComp from "@/components/RefrigeratorComp";
// import LightbulbComp from "@/components/LightbulbComp";

export default {
  components: {
    SpeakerComp,
    DoorComp
  },

  name: "DevicesView",
  data() {
    return {
      house: store.house,
      devicesMap: store.devicesMap
    }
  },
}
</script>

<style scoped>

  .devices-view {
    min-height: 500px;
  }

  .main-div {
    display: flex;
    justify-content: space-around;

  }

  .house-icon {
    display: flex;
    align-items: flex-end;
    padding-bottom: 20px;
  }

  .add-button {
    justify-content: flex-end;
    padding-bottom: 10px;
  }


  .rooms-class{
    display: flex;
    justify-content: center;
  }

</style>