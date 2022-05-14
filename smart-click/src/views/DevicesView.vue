<template>
  <div class="devices-view">
    <div v-if="(house.cuartos == null)" class="h1-title">
      <v-icon x-large>house</v-icon>
      <h1>Seleccione una casa</h1>
    </div>
    <div v-else class="main-div">
      <div class="house-icon">
        <v-icon x-large>house</v-icon>
        <span class="text-h5 color-class" >{{ house.nombreCasa }}</span>
        <RemoveHouse/>
      </div>
      <div class="add-button">
        <v-btn color="primary" elevation="3" fab rounded @click.stop="roomAdd = true"><v-icon>add</v-icon></v-btn>
        <p class="text">AGREGAR HABITACIÓN</p>
        <v-dialog v-model="roomAdd" max-width="600px" height="600px">
          <v-card @keyup.enter="addRoom(deviceName,deviceAddHouseSelected)">
            <v-card-title>
              <h2>Agregue una nueva habitación</h2>
            </v-card-title>
            <v-card-text>
              <v-container fluid c>
                <v-row aligned="center">
                  <v-col class="d-flex" cols="12" sm="10">
                    <v-select
                        :items="houses"
                        label="Casa seleccionada:"
                        outlined class="house-selector-slider"
                        dense
                        v-model="deviceAddHouseSelected"
                        persistent-placeholder
                        placeholder="Selecciona casa ">
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>

              <v-text-field
                  label="Nombre de la habitación"
                  :rules="rules"
                  hide-details="auto"
                  v-model="deviceName"
              />
              <v-btn class="margin-button" color="primary" @click="addRoom(deviceName,deviceAddHouseSelected)">
                Agregar habitación
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>

    <div class="rooms-class">
      <v-expansion-panels>
        <v-expansion-panel v-for="room in house.cuartos" :key="room.nombreCasa">
          <v-expansion-panel-header class="expansion-panel-div">
            <span>{{room.roomName}}: {{room.roomDevicestotalAmoount}} dispositivos totales y {{room.roomDevicesActiveAmount}} activos</span>
            <div class="div-button-delete-room">
              <v-btn class="delete-button" color="error" elevation="3" fab rounded small @click.stop="removeHouse = true"><v-icon>delete_forever</v-icon></v-btn>
              <span class="span-class">ELIMINAR HABITACIÓN</span>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content >
            <v-row>
              <v-col v-for="device in room.roomDevices" :key="device.deviceCode" class="flex-grow-0 col-division">
                <v-container style="min-height: 0px;padding: 0" v-for="deviceProto in devicesMap" :key="deviceProto.id">
                  <component v-if="deviceProto.id === device.deviceCode" :is="deviceProto.compName" :deviceEntity="device"/>
                </v-container>
              </v-col>
          <!--
              <speaker-comp class="devices" deviceEntity="device"/>
              <door-comp class="devices" deviceEntity="device"/>-->

            </v-row>
            <AddDeviceRound/>
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
import RefrigeratorComp from "@/components/RefrigeratorComp";
import LightbulbComp from "@/components/LightbulbComp";
import OvenComp from "@/components/OvenComp";
import AddDeviceRound from "@/components/addingComponents/AddDeviceRound";
import RemoveHouse from "@/components/addingComponents/RemoveHouse";

export default {
  name: "DevicesView",

  components: {
    RemoveHouse,
    SpeakerComp,
    DoorComp,
    LightbulbComp,
    RefrigeratorComp,
    OvenComp,
    AddDeviceRound
  },


  methods: {
    addDevice(text, deviceType, house, room) {
      if (text === "" || deviceType == null || house == null || room == null)
        console.log("Mal nombre de casa")
      else {
        //AGREGAR DISPOSITIVO
        this.deviceAdd = false
        house = {}
        room = {}
        deviceType = {}
      }
    },


  addRoom(roomName,house) {
    if (roomName === "" || house == null)
      console.log("No selecciono Dispositivo")
    else
      {
        //AGREGAR CUARTO
        this.roomAdd = false
        this.deviceName = ""
      }
    }
  },

  data() {
    return {
      house: store.house,
      houses: store.houses,
      devicesMap: store.devicesMap,
      deviceAdd: false,
      roomAdd: false,
      deviceAddHouseSelected: {},
      deviceAddRoomSelected: {},
      deviceSelected: {},
      deviceName: "",
      deviceMap: store.devicesMap,
      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },
}
</script>

<style scoped>

  .v-btn:focus::before {
    opacity: 0 !important;
  }

  .color-class {
    color: gray;
  }

  .devices-view {
    min-height: 530px;
    padding-top: 20px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }

  .main-div {
    display: flex;
    justify-content: space-around;

  }

  .house-icon {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }

  .add-button {
    justify-content: flex-end;
    padding-bottom: 10px;
  }

  .h1-title {
    justify-content: center;
    color: gray;
    padding-top: 20px;
  }


  .rooms-class{
    display: flex;
    justify-content: center;
  }

  .text{
    display: inline;
    padding-left: 10px;
    color: grey;
  }

  .margin-button {
    margin-top: 20px;
  }

  .col-division {
    padding-right: 100px;
  }

  .div-button-delete-room {
    display: flex;
    width: auto;
    justify-content: end;
    margin-right: 50px;
    align-items: center;
  }

  .span-class {
    display: flex;
    color: gray;
    font-size: 13px;
    padding-left: 10px;
  }

</style>