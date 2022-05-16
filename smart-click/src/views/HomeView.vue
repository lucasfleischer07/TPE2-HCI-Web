<template>
  <div class="main-div2">
    <div>
      <h1 class="padding-h1-title">Bienvenido/a a SmartClick</h1>
      <img src="@/assets/primera.png" alt="Logo_HomeView">
      <h2 class="padding-h2-title">Para comenzar, seleccione una casa existente en la parte superior derecha de la página</h2>
      <div class="text-and-button">
        <h2 class="padding-h2-title3">En caso contrario, agregue una haciendo click aquí <v-icon class="icon-arrow">arrow_right_alt</v-icon></h2>
        <AddHouse class="button-add"/>
      </div>
    </div>
  </div>
</template>

<script>
  import AddHouse from "@/components/addingComponents/AddHouse";
  import {mapActions} from "vuex"


  export default {
    name: "HomeView",
    components: {
      AddHouse,
    },
    data() {
      return {
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
          //AGREGAR CASAx
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
  .main-div2 {
    display: flex;
    justify-content: center;
    min-height: 530px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }


  .padding-h1-title {
    /*display: flex;*/
    justify-content: center;
    padding-top: 30px;
    font-size: 60px;
    color: gray;
  }

  .padding-h2-title {
    padding-top: 50px;
    /*padding-left: 80px;*/
    font-size: 33px;
    display: flex;
    justify-content: left;
    color: gray;

  }

  .padding-h2-title3 {
    padding-top: 20px;
    font-size: 33px;
    display: flex;
    justify-content: left;
    align-items: center;
    color: gray;
  }

  .icon-arrow {
    font-size: 80px;
  }

  .text-and-button {
    display: flex;
    padding-bottom: 50px;
  }

  .button-add {
    display: flex;
    padding-top: 30px;
  }

</style>