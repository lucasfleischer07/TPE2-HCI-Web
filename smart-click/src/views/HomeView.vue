<template>
<!--  <div class="main-div">-->

<!--    <div>-->
<!--      <h1 class="padding-h1-title">Bienvenido a SmartClick</h1>-->
<!--    </div>-->
<!--    <div class="home-view">-->
<!--      <h2 class="padding-h2-title">Para comenzar, cree una casa <v-icon class="icon-arrow">arrow_right_alt</v-icon></h2>-->
<!--      <AddHouse class="add-button"/>-->
<!--    </div>-->
<!--    <div class="home-view">-->
<!--      <h2 class="padding-h2-title">O seleccione una ya existente haciendo click en la parte superior derecha de la pagina</h2>-->
<!--    </div>-->
<!--  </div>-->



  <div class="main-div2">

    <div>
      <h1 class="padding-h1-title">Bienvenido a SmartClick</h1>
      <h2 class="padding-h2-title">Para comenzar, seleccione una casa existente</h2>
      <h2 class="padding-h2-title2">en la parte superior derecha de la pagina</h2>
      <h2 class="padding-h2-title3">En caso de no tenerla, cree una haciendo click ahi <v-icon class="icon-arrow">arrow_right_alt</v-icon></h2>
    </div>

    <div class="buttons-div">
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

  .main-div2 {
    display: flex;
    justify-content: space-between;
    min-height: 530px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }

  .main-div{
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
    min-height: 530px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }

  .home-view  {
    display: flex;
    align-items: flex-start;
  }

  .buttons-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 70px;
    padding-right: 80px;

  }

  .padding-h1-title {
    display: flex;
    justify-content: left;
    padding-top: 50px;
    padding-left: 80px;
    font-size: 60px;
  }

  .padding-h2-title {
    padding-top: 50px;
    padding-left: 80px;
    font-size: 33px;
    display: flex;
    justify-content: left;

  }

  .padding-h2-title2 {
    padding-left: 80px;
    font-size: 33px;
    display: flex;
    justify-content: left;
  }

  .padding-h2-title3 {
    padding-top: 130px;
    padding-left: 80px;
    font-size: 33px;
    display: flex;
    justify-content: left;
    align-items: center;

  }


  .icon-arrow {
    font-size: 80px;
  }

  .add-button {
    padding-top: 40px;

  }

  .buttons {
    display: flex;
    justify-content: space-evenly;

    padding-bottom: 70px;
    font-size: 40px;
    padding-right: 180px;
  }

  /*.div-faves{*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  align-items: center;*/
  /*  padding-top: 12px;*/
  /*}*/

  /*.favs-text{*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  font-weight: lighter;*/
  /*  color: grey;*/
  /*}*/

  /*.favs-add-button{*/
  /*    display: flex;*/
  /*    justify-content: end;*/
  /*    margin-right: 15px;*/
  /*    padding-top: 15px;*/
  /*}*/

  /*.card-favs{*/
  /*  display: flex;*/
  /*  background-color: transparent;*/
  /*  min-width: 1000px;*/
  /*  min-height: 400px;*/
  /*  margin-right: 20px;*/
  /*}*/

</style>