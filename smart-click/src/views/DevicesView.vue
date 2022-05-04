<template>
  <div>
    <div class="prueba">
          <v-icon x-large>house</v-icon>
          <span class="text-h5 align-center" >{{ house.nombreCasa }}</span>
<!--          <div class="add-rooms" >-->
          <v-btn color="primary" elevation="3" fab rounded ><v-icon>add</v-icon></v-btn>
<!--          </div>-->
    </div>

    <div class="rooms-class">
        <v-expansion-panels >
              <v-expansion-panel
                v-for="room in house.cuartos"
                :key="room"
              >
                <v-expansion-panel-header >
                 <span>Cuarto: {{room.roomName}}, tiene {{room.roomDevicestotalAmoount}} dispositivos totales y {{room.roomDevicesActiveAmount}} dispositivos activos</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>                    
  <speaker-comp class="devices"/>
                                            <door-comp class="devices"/>
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

export default {
  components: {
    SpeakerComp,
    DoorComp
  },

  name: "DevicesView",
  data() {
    return {
      house: store.house
    }
  },
}
</script>

<style scoped>
  .rooms-class{
    display: flex;
    justify-content: center;
  }

  .prueba {
    justify-content: space-between;
  }
  /*.add-rooms {*/
  /*  order: 5;*/
  /*}*/

  .devices {
      padding-left: 600px;
  }

</style>