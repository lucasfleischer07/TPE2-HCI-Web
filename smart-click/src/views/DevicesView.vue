<template>
  <div class="devices-view">
    <div v-if="Object.entries($myHome).length ===  0" class="h1-title">
      <v-icon x-large>house</v-icon>
      <h1>Seleccione una casa</h1>
    </div>
    <div v-else>
      <div class="main-div">
        <div class="house-icon">
          <v-icon x-large>house</v-icon>
          <span class="text-h4 color-class">{{ $myHome.name }}</span>
          <RemoveHouse house_selected="$myHome"/>
        </div>
      </div>
      <AddRoom/>

      <div class="rooms-class">
        <div v-if="Object.entries(rooms).length ===  0" class="h1-title">
          <h1 class="title-h1"><v-icon x-large>bed</v-icon> No hay ninguna habitación dentro de {{ $myHome.name }}</h1>
        </div>
        <div v-else>
        <v-expansion-panels>
          <v-expansion-panel class="expansion-panel-margin" v-for="room in rooms" :key="room.id">
            <v-expansion-panel-header class="expansion-panel-div">
              <span>{{room.name}}:  dispositivos totales y  activos</span>
              <RemoveRoom :room_selected="room"/>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <v-row>
                <v-col v-for="device in getRoomDevices(room)" :key="device.id" class="flex-grow-0 col-division">
                  <v-container style="min-height: 0px;padding: 0" v-for="deviceProto in $allTypes" :key="deviceProto.id">
                    <component v-if="deviceProto.id === device.id" :is="deviceProto.name" :deviceEntity="device"/>
                  </v-container>
                </v-col>
              </v-row>
              <AddDeviceRound/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpeakerComp from "@/components/speaker";
import DoorComp from "@/components/door";
import RefrigeratorComp from "@/components/refrigerator";
import LightbulbComp from "@/components/lamp";
import OvenComp from "@/components/oven";
import AddDeviceRound from "@/components/addingComponents/AddDeviceRound";
import RemoveHouse from "@/components/addingComponents/RemoveHouse";
import {mapActions, mapState} from "vuex";
import AddHouse from "@/components/addingComponents/AddHouse";
import AddRoom from "@/components/addingComponents/AddRoom";
import RemoveRoom from "@/components/addingComponents/RemoveRoom";


export default {
  name: "DevicesView",

  components: {
    RemoveHouse,
    SpeakerComp,
    DoorComp,
    LightbulbComp,
    RefrigeratorComp,
    OvenComp,
    AddDeviceRound,
    AddHouse,
    AddRoom,
    RemoveRoom
  },

  computed: {
    ...mapState("House", {
      $house: "homes",
      $myHome: "houseSelected"
    }),
    ...mapState("ProtoDevice", {
      $allTypes: "devicesTypes",
    }),
    ...mapState("Room", {
      $rooms: "rooms",
    }),
  },

  watch: {
    $myHome(){
      this.updateRooms()
    },
  },


  methods: {
    ...mapActions("House", {
      $getHomeRooms: "getHomeRooms",
    }),
    ...mapActions("Room", {
      $getRoomDevices: "getDevices",
    }),
    ...mapActions("ProtoDevice", {
      $getAllDevicesTypes: "getAllDevicesTypes",
    }),
    async updateRooms(){

      try {
        this.rooms = await this.$getHomeRooms(this.$myHome.id)
      } catch (e) {
        console.log(e)
      }

    },
    async getRoomDevices(room){
      try {
        await this.$getRoomDevices(room.id)
      } catch (e) {
        console.log(e)
      }
    },
    async updateProto(){
      try {
        await this.$getAllDevicesTypes()
      } catch (e) {
        console.log(e)
      }
    }
  },


  data() {
    return {

      oldRooms: [],
      rooms: [],
      protoDevices: this.updateProto(),
      roomName: "",
      rules: [v => v.length <= 25 || 'Máximo 25 caracteres', v => v.length >= 3 || 'Mínimo 3 caracteres'],
    }
  },
}
</script>

<style scoped>

  /*.v-btn:focus::before {*/
  /* opacity: 0 !important;*/
  /* }*/

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
    justify-content: center;

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

  .title-h1 {
    font-size: 35px;
  }


  .rooms-class{
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .text{
    display: inline;
    padding-left: 10px;
    color: grey;
  }

  .margin-button {
    margin-top: 20px;
  }

  .expansion-panel-margin{
    margin-bottom: 15px;
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