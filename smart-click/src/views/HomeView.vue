<template>
  <div class="main-div">
    <div class="home-view">
      <div class="buttons">
        <AddDevice/>
      </div>

      <div class="buttons">
        <AddRoutineBlock/>
      </div>

      <div class="buttons">
        <AddHouse/>
      </div>
    </div>

    <div class="div-faves">
      <h2 class="favs-text"> Dispositivos Favoritos</h2>
      <v-card class="card-favs" >
          <OvenComp class="buttons"/>
        xq caranchos no se agrega el horno
      </v-card>
    </div>
  </div>
</template>

<script>
  import store from '@/store/store'
  import AddHouse from "@/components/addingComponents/AddHouse";
  import AddDevice from "@/components/addingComponents/AddDevice";
  import AddRoutineBlock from "@/components/addingComponents/AddRoutineBlock";
  import {mapActions} from "vuex"
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
      ...mapActions("room",{
        $createRoom: "create",   //Pongo $ para q no coincida con el metodo q esta debajo
        $modifyRoom: "modify",
        $deleteRoom: "delete"
      }),
      setResult(result){
        //Esta es para mostrar en consola q esta devolviendo
        console.log(result)
      },
      /*async createRoom(){
        try{
          let room = { name: "myRoom", meta: { size: "9m2"}}
          await this.$createRoom(room)
          this.setResult(room)
        }catch (e){
          this.setResult(e)
        }
      },*/
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
          //ELIMINAR DISPOSITIVOVO
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
          //ELIMINAR RUTINA
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
  }

  .favs-text{
    display: flex;
    align-items: center;
    font-weight: lighter;
    color: grey;
  }

  .favs-add-button{
      display: flex;
      justify-content: end;
      margin-right: 15px;
      padding-top: 15px;
  }

  .card-favs{
    display: flex;
    background-color: transparent;
    min-width: 1000px;
    min-height: 400px;
    margin-right: 20px;
  }

</style>