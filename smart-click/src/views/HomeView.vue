<template>
  <div class="main-div">
    <div class="home-view">
      <div class="buttons">
        <AddHouse/>
      </div>

      <div class="buttons">
        <AddDevice/>
      </div>

      <div class="buttons">
        <AddRoutineBlock/>
      </div>
    </div>

    <div class="div-faves">
      <h2 class="font-weight-thin">Mis Favoritos</h2>
      <v-card class="card-favs ma-7" >

          <h2>Mis Dispositivos</h2>
      </v-card>
    </div>

  </div>
</template>

<script>
  import store from '@/store/store'
  import AddHouse from "@/components/addingComponents/AddHouse";
  import AddDevice from "@/components/addingComponents/AddDevice";
  import AddRoutineBlock from "@/components/addingComponents/AddRoutineBlock";
  export default {
    name: "HomeView",

    components: {
      AddHouse,
      AddDevice,
      AddRoutineBlock
    },

    data() {
      return {
        deviceMap: store.devicesMap,
        houses: store.houses,
        houseAdd: false,
        nombreCasa: "",
        deviceAdd: false,

        houseRemove: false,
        confirmRemoveHouse:false,

        deviceRemove: false,
        confirmRemoveDevice:false,

        routineRemove:false,
        confirmRemoveRoutine: false,

        houseDeleteSelected: {},
        deviceDeleteSelected: {},
        routineDeleteSeleceted: {},

        deviceAddHouseSelected: {},
        deviceAddRoomSelected: {},
        deviceSelected: {},
        deviceName: "",
        rules: [v => v.length <= 25 || 'Max 25 characters'],
      }
    },
    methods: {
      addHouse(text) {
        if (text === "")
          console.log("Mal nombre de casa")
        else {
          //AGREGAR CASA
          this.houseAdd = false
        }
      },
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
      removeHouse(houseToDelete) {
        if (houseToDelete == null)
          console.log("No selecciono casa")
        else {
          this.houses.splice(this.houses.indexOf(houseToDelete), 1)
          this.confirmRemoveHouse = false
          this.houseRemove = false
          this.houseDeleteSelected = {}
        }
      },
      removeDevice(device){
        if (device == null)
          console.log("No selecciono Dispositivo")
        else {
          //AGREGAR DISPOSITIVOVO
          this.confirmRemoveDevice = false
          this.deviceRemove = false
          this.deviceAddHouseSelected= {}
          this.deviceAddRoomSelected= {}
          this.deviceDeleteSelected = {}
        }
      },
      removeRoutine(routine) {
      if (routine == null)
        console.log("No selecciono Dispositivo")
      else {
        //AGREGAR DISPOSITIVOVO
        this.confirmRemoveRoutine = false
        this.routineRemove = false
        this.deviceAddHouseSelected= {}
        this.deviceAddRoomSelected= {}
        this.routineDeleteSelected = {}
      }

      }
    }
  }
</script>

<style scoped>

  .main-div{
    display: flex;
    justify-content: space-between;
    min-height: 530px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }

  .home-view  {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }

 .buttons {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 40px;
    font-size: 40px;
   padding-left: 180px;
  }

  .div-faves{
    padding-top: 12px;
  }

  .card-favs{
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
    min-width: 600px;
    min-height: 400px;
  }



</style>

