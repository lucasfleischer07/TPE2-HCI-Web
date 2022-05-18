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
          <RemoveHouse/>
        </div>
      </div>
      <AddRoom :houseSelected="$myHome"/>

      <div class="rooms-class">
        <div v-if="Object.entries(rooms).length ===  0" class="h1-title">
          <h1 class="title-h1"><v-icon x-large>bed</v-icon> No hay ninguna habitación dentro de "{{ $myHome.name }}"</h1>
        </div>
        <div v-else>
        <v-expansion-panels>
          <v-expansion-panel class="expansion-panel-margin" v-for="room in rooms" :key="room.id">
            <v-expansion-panel-header class="expansion-panel-div">
              <span>
                <span style="font-weight: bold"> {{room.name}}:</span>
                <span v-if="(getRoomAmountOfDevices(room.id) > 0) && (getRoomAmountOfDevices(room.id) != 1)"> {{getRoomAmountOfDevices(room.id)}} dispositivos vinculados</span>
                <span v-else-if="getRoomAmountOfDevices(room.id) == 1"> {{getRoomAmountOfDevices(room.id)}} dispositivo vinculado</span>
                <span v-else> No hay ningún dispositivo vinculado</span>
              </span>
              <RemoveRoom :room_selected="room" />
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <v-row>
                 <v-col class="flex-grow-0 col-division" v-for="device in $devices" :key="device.id" >
                   <v-container style="min-height: 0px;padding: 0" v-for="deviceProto in protos" :key="deviceProto.id">
                    <component v-if="device.type.id === deviceProto.id && room.id===device.room.id"  :is="deviceProto.name" :deviceEntity="device"/>
                  </v-container>
                </v-col>
              </v-row>
              <AddDeviceRound :deviceAddHouseSelected="$myHome" :deviceAddRoomSelected="room"/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        </div>
      </div>
    </div>
    <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="#737373">
      {{text}}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Parlante from "@/components/Parlante";
import Puerta from "@/components/Puerta";
import Heladera from "@/components/Heladera";
import Lámpara from "@/components/Lámpara";
import Horno from "@/components/Horno";
import AddDeviceRound from "@/components/addingComponents/AddDeviceRound";
import RemoveHouse from "@/components/addingComponents/RemoveHouse";
import {mapActions, mapMutations, mapState} from "vuex";
import AddRoom from "@/components/addingComponents/AddRoom";
import RemoveRoom from "@/components/addingComponents/RemoveRoom";
import devicesImplemented from "@/store/localStore";


export default {
  name: "DevicesView",

  components: {
    RemoveHouse,
     Parlante,
    Puerta,
    Lámpara,
    Heladera,
    Horno,
    AddDeviceRound,

    AddRoom,
    RemoveRoom
  },
  async created() {

    try {
      this.rooms=await this.$getHomeRooms(this.$myHome.id)
    }
    catch (e) {
     console.log(e)
    }
    this.$setEditingTrue()
  },

  computed: {
    ...mapState("House", {
      $house: "homes",
      $myHome: "houseSelected"
    }),

    ...mapState("Room", {
      $rooms: "rooms",
    }),
    ...mapState("Devices", {
      $devices: "devices",
    }),
    ...mapMutations({
      $setEditingTrue: "setEditingTrue"
    })

  },

  watch: {
    $myHome(){
      this.updateRooms()

    },
  },

  methods: {
    ...mapActions("House", {
      $getHomeRooms: "getHomeRooms",
      $changeCurrentHome: "changeCurrentHome",
      $getAllHomes: "getAllHomes"
    }),
    ...mapActions("Room", {
      $getRoomDevices: "getDevices",
    }),
    ...mapActions("Devices",{
      $getAllDevices:"getAllDevices"
    }),
    ...mapMutations({
      $setEditingTrue: "setEditingTrue"
    }),


    async updateRooms() {
      try {
        this.rooms = await this.$getHomeRooms(this.$myHome.id)
      } catch (e) {
        if (e.code === 99) {
          this.$router.push('NotFound/')
        }
      }

    },

    async getAllHomes() {
      await this.$getAllHomes()
    },
    async selectHome(home) {
      await this.$changeCurrentHome(home)
    },
    async getRoomDevices(id) {

      return await this.$getRoomDevices(id)
    },
    getSelected() {
      return this.$myHome
    },

    async updateDevices(){
      await this.$getAllDevices()
    },

    getRoomAmountOfDevices(id) {
      let devicesCount = 0
      this.$devices.forEach(device => device.room.id === id ? devicesCount++ : devicesCount)
      return devicesCount
    },
    setSnack(text){
      this.text=text
      this.snackbar=true
    }

  },






  data() {
    return {
      snackbar:false,
      text:"",
      oldRooms: [],
      protos:devicesImplemented.devicesImplemented,
      rooms:{},
      devices:this.$getAllDevices(),
      roomName: "",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 caracteres'],
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
    min-height: 580px;
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
    font-size: 20px;
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