<template>
  <div>
    <div class="justify-left">
      <v-icon x-large>house</v-icon>
      <span class="text-h5 align-center" >{{ house.nombreCasa }}</span>
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

                 <v-icon> speaker</v-icon>
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
export default {
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

</style>