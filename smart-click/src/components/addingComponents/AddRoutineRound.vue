<template>
  <div>
    <div class="add-button-padding">
      <v-btn color="primary" elevation="3" fab rounded @click.stop="routineAdd = true"><v-icon>add</v-icon></v-btn>
    </div>

    <v-dialog v-model="routineAdd" max-width="600px" height="600px" @click:outside="resetAdd">
      <v-card @keyup.enter="AddRoutine">
        <v-card-title>
          <h2>Cree una nueva rutina</h2>
        </v-card-title>
        <v-card-text class="styling">
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="rooms"
                    item-text="name"
                    label="Habitación seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    no-data-text="No hay cuartos registrados ¡Agregue uno!"
                    v-model="roomSelected"
                    persistent-placeholder
                    placeholder="Seleccione una habitación">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="devices"
                    item-text="name"
                    :disabled="Object.entries(roomSelected).length ===  0"
                    label="Dispositivo Seleccionado:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    no-data-text="No hay hay dispositivos en el cuarto ¡Agregue uno!"
                    v-model="deviceSelected"
                    persistent-placeholder
                    placeholder="Seleccione un dispositivo">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="actions"
                    label="Acción seleccionada:"
                    item-text="nameSpanish"
                    :disabled="Object.entries(deviceSelected).length ===  0"
                    outlined
                    class="house-selector-slider"
                    dense
                    return-object
                    v-model="actionSelected"
                    persistent-placeholder
                    placeholder="Seleccione una acción">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <component v-if="Object.entries(actionSelected).length !== 0 && Object.entries(actionSelected.params).length !== 0 && actionSelected.params[0].type==='SelectColor'"  :is="actionSelected.params[0].type"  v-model="paramater" />
          <component v-else-if="Object.entries(actionSelected).length !== 0 && Object.entries(actionSelected.params).length !== 0  && actionSelected.params[0].type==='SelectString'"  :is="actionSelected.params[0].type"  v-model="paramater"   :textOptions="actionSelected.params[0].supportedValues" />
          <component v-else-if="Object.entries(actionSelected).length !== 0 && Object.entries(actionSelected.params).length !== 0  && actionSelected.params[0].type==='SelectNumber'"  :is="actionSelected.params[0].type"  v-model="paramater" :min="actionSelected.params[0].minValue" :max="actionSelected.params[0].maxValue"   />


          <v-text-field
              label="Nombre de la nueva rutina"
              class="margin-button3"
              :rules="rules"
              hide-details="auto"
              v-model="routineName"
          />
          <v-row>
            <div v-for="(devAndAct,index) in routineCreated" :key="devAndAct" class="device-and-actions">
              <v-card outlined style="background-color: #f2f9fb; display: flex; align-items: center">
                <span v-if="devAndAct.params.length===0" style="padding-left: 10px; padding-right: 10px" class="text-h6">{{routineCreatedEspanol[index].action}}</span>
                <span v-else style="padding-left: 10px; padding-right: 10px" class="text-h6">{{routineCreatedEspanol[index].action}}: {{routineCreatedEspanol[index].paramName}}</span>
                <v-btn depressed icon class="trash_class" @click="DeleteDeviceFromRoutine(devAndAct,index)">
                  <v-icon  color="error" >delete_forever</v-icon>
                </v-btn>
                <h3>{{devAndAct.action}}</h3>
              </v-card>
            </div>
          </v-row>
          <div class="margin-button">
            <v-btn :disabled="Object.entries($myHome).length ===  0 || Object.entries(roomSelected).length ===  0 || Object.entries(deviceSelected).length ===  0 || Object.entries(actionSelected).length ===  0 || (Object.entries(actionSelected.params).length > 0 && paramater==='' )" color="success" @click="AddDevice">
              Agregar accion a la rutina
            </v-btn>
            <v-btn :disabled="Object.entries(routineCreated).length ===  0 || routineName.length < 3 || routineName.length > 60" class="margin-button2" color="primary" @click="AddRoutine()">
              Crear Rutina
            </v-btn>
          </div>

        </v-card-text>
      </v-card>
      <v-dialog v-model="nameError" max-width="480px" height="50px">
        <v-card style="background-color: #ff6666">
          <v-card-title style="justify-content: center; font-weight: bold">Nombre inválido</v-card-title>
          <v-btn class="close-button" @click="nameError=false" icon color="black" outlined><v-icon>close</v-icon></v-btn>
          <v-container style="padding-bottom: 12px; padding-top: 0px">
            <v-card-text style="justify-content: flex-start; text-align: initial">El nombre seleccionado ya ha sido utilizado en otra rutina. Por favor elija otro nombre.</v-card-text>
          </v-container>
        </v-card>
      </v-dialog>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {Routine, RoutineMeta} from "@/Api/Routine";
import devicesImplemented from "@/store/localStore"
import SelectColor from "@/components/paramComponents/SelectColor";
import SelectNumber from "@/components/paramComponents/SelectNumber";
import SelectString from "@/components/paramComponents/SelectString";

export default {
  name: "AddRoutineRound",
  components:{
    SelectColor,
    SelectNumber,
    SelectString
  },

  data(){
    return {
      devicesImplemented: devicesImplemented.devicesImplemented ,
      type:"selectColor",
      routineAdd: false,
      routineName: "",
      rooms: [],
      nameError:false,
      roomSelected: {},
      deviceSelected: {},
      devices: [],
      actionSelected: {},
      actions: [],

      paramater: "",
      parameterSelected: [],
      routineCreated: [],
      routineCreatedEspanol: [],
      rules: [v => v.length <= 17 || 'Máximo 17 caracteres', v => v.length >= 3 || 'Mínimo 3 characters'],


    }
  },
 async created(){
    await this.updateRooms()
  },
  computed: {
    ...mapState("House", {
      $house: "homes",
      $myHome: "houseSelected"
    }),
    ...mapState( "ProtoDevice", {
      $devicesTypes: "devicesTypes",
    }),
  },

  watch: {
    $myHome(){
      this.updateRooms()
},
    roomSelected(){
      this.updateDevices()
    },
    deviceSelected(){
      this.updateActions()
    }
  },


  methods: {
    ...mapActions("Routine",{
      $createRoutine: "createRoutine",
    }),
    ...mapActions("House", {
      $modifyHome: "modifyHome",
      $getHomeRooms: "getHomeRooms",

    }),
    ...mapActions("Room", {
      $getRoomDevices: "getDevices",

    }),
    ...mapActions("ProtoDevice", {
      $getDeviceType: "getDeviceType",

    }),

    checkParam(objectToCheck){
      if (Object.entries(objectToCheck).length !== 0){
        return true
      }
      return false
    },

    //EL DEVICE ESTA HARCODEADO PERO ANDA
    AddDevice(){
      if( !this.checkParam(this.roomSelected)  || !this.checkParam(this.deviceSelected) || !this.checkParam(this.actionSelected)){
        console.log("No hizo la seleccion de rutinas")
        //MENSAJE DE ERROR
      }else {
        if(this.paramater){
          this.parameterSelected.push(this.paramater.name)
          if(this.paramater.nameSpanish) {
            this.routineCreatedEspanol.push({
              action: this.actionSelected.nameSpanish,
              paramName: this.paramater.nameSpanish
            })
          }else{
            this.routineCreatedEspanol.push({
              action: this.actionSelected.nameSpanish,
              paramName: this.paramater
            })
          }
        }else{
          this.routineCreatedEspanol.push({
            action: this.actionSelected.nameSpanish,
            paramName: null
          })
        }
        var actions = {
          device: { id: this.deviceSelected.id}, //this.deviceSelected.deviceCode,
          actionName: this.actionSelected.name,
          params: this.parameterSelected,
          meta: {}
        }
        this.routineCreated.push(actions)
        this.deviceSelected = {}
        this.roomSelected = {}
        this.actionSelected = {}
        this.parameterSelected= []
        this.devices= []

      }
    },

    async AddRoutine() {
      if(!this.checkParam(this.routineCreated) ) {
        console.log("No completo la rutina completa")
      }
      else {
        let routine
        try {
          let routineSlug= this.routineName.replace(/\s/g, '')
          let routineMeta = new RoutineMeta(routineSlug,this.$myHome.id)
          routine = new Routine(null, this.routineName, this.routineCreated, routineMeta)
          routine = await this.$createRoutine(routine)
          this.routineAdd = false
          this.deviceSelected = {};
          this.actionSelected = {};
          this.roomSelected = {};
          this.routineName = "";
          this.routineCreated = [];
          this.routineCreatedEspanol = [];
          this.devices= [];
          this.setResult(routine)
        } catch (e) {
          if(e.code==2){
            this.nameError= true
          }
        }

      }

    },

    resetAdd(){
      this.routineAdd = false;
      this.deviceSelected = {};
      this.actionSelected = {};
      this.roomSelected = {};
      this.routineName = "";
      this.routineCreated = [];
      this.devices= [];
    },

    DeleteDeviceFromRoutine(deviceAndAct,index){
      this.routineCreated.splice(this.routineCreated.indexOf(deviceAndAct),1)
      this.routineCreatedEspanol.splice(index,1)
    },
    async updateRooms() {
      try {
        this.rooms = await this.$getHomeRooms(this.$myHome.id)
      } catch (e) {
        this.setResult(e)
      }
    },
    async updateDevices() {
      try {
        this.devices = await this.$getRoomDevices(this.roomSelected.id)
      } catch (e) {
        this.setResult(e)
      }
    },
    updateActions() {
      let deviceInfo = this.devicesImplemented.find(
          device =>  device.id.localeCompare(this.deviceSelected.type.id)===0
      )
      this.actions=deviceInfo.actions
    },
    updateParamter(param){
      this.paramater=param
    }

  }
}
</script>

<style scoped>

  .device-and-actions{
    padding: 20px 0 0 20px ;
  }

  .margin-button {
    display: flex;
    margin-top: 40px;
  }

  .margin-button2 {
    margin-left: 20px;
  }

  .margin-button3 {
    margin-bottom: 50px;
    display: flex;
    padding-left: 20px;
    width: 80%;
  }

  .close-button {
    position: absolute;
    right: 2%;
    top: 7%;
  }


</style>