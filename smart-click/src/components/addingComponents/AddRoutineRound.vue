<template>
  <div>
    <div class="add-button-padding">
      <v-btn color="primary" elevation="3" fab rounded @click.stop="routineAdd = true"><v-icon>add</v-icon></v-btn>
    </div>

    <v-dialog v-model="routineAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="AddRoutine">
        <v-card-title>
          <h2>Cree una nueva rutina</h2>

        </v-card-title>
        <v-card-text>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="$house"
                    item-text="name"
                    label="Casa seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="houseSelected"
                    persistent-placeholder
                    placeholder="Seleccione una casa">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="rooms"
                    item-text="name"
                    :disabled="Object.entries(houseSelected).length ===  0"
                    label="Habitación seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
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
                    item-text="name"
                    :disabled="Object.entries(deviceSelected).length ===  0"
                    outlined class="house-selector-slider"
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
          <v-btn :disabled="Object.entries(houseSelected).length ===  0 || Object.entries(roomSelected).length ===  0 || Object.entries(deviceSelected).length ===  0 || Object.entries(actionSelected).length ===  0 || (Object.entries(actionSelected.params).length > 0 && paramater==='' )" class="margin-button" color="primary" @click="AddDevice">
            Agregar dispositivo a la rutina
          </v-btn>
          <v-row>
            <div v-for="devAndAct in routineCreated" :key="devAndAct" class="device-and-actions">
              <v-card outlined>
                <span class="text-h6">{{devAndAct.actionName}}</span>
                <v-btn depressed icon class="trash_class" @click="DeleteDeviceFromRoutine(devAndAct)">
                  <v-icon  color="error" >delete_forever</v-icon>
                </v-btn>
                <h3>{{devAndAct.action}}</h3>
              </v-card>
            </div>
          </v-row>
          <v-btn :disabled="Object.entries(routineCreated).length ===  0 || routineName.length < 3 || routineName.length > 60" class="margin-button2" color="primary" @click="AddRoutine()">
            Crear Rutina
          </v-btn>

        </v-card-text>
      </v-card>
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
      houseSelected: {},
      rooms: [],
      roomSelected: {},
      deviceSelected: {},
      devices: [],
      actionSelected: {},
      actions: [],
      paramater: "",
      parameterSelected: [],
      routineCreated: [],
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 characters'],


    }
  },

  computed: {
    ...mapState( "House", {
      $house: "homes",
    }),
    ...mapState( "ProtoDevice", {
      $devicesTypes: "devicesTypes",
    }),
  },

  watch: {
    houseSelected(){
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
      if(!this.checkParam(this.houseSelected)  || !this.checkParam(this.roomSelected)  || !this.checkParam(this.deviceSelected) || !this.checkParam(this.actionSelected)){
        console.log("No hizo la seleccion de rutinas")
        //MENSAJE DE ERROR
      }else {
        if(this.paramater){
          this.parameterSelected.push(this.paramater)
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
        this.deviceType = {}
        this.actionSelected = {}
        this.parameterSelected= []
        this.rooms= []
        this.devices= []
        this.devices= []
        let aux= this.houseSelected
        this.houseSelected= {}
        this.houseSelected= aux
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
          let routineMeta = new RoutineMeta(routineSlug)
          routine = new Routine(null, this.routineName, this.routineCreated, routineMeta)
          routine = await this.$createRoutine(routine)
          this.routineAdd = false
          this.setResult(routine)
        } catch (e) {
          this.setResult(e)
        }
        try {

          this.houseSelected.meta.homeRoutines.push(routine)
          await this.$modifyHome(this.houseSelected) //Modifico la casa y le agrego la rutina
        }catch (e) {
          this.setResult(e)
        }

        this.houseSelected = {};
        this.deviceSelected = {};
        this.actionSelected = {};
        this.roomSelected = {};
        this.deviceType = {};
        this.routineName = "";
        this.routineCreated = [];
        this.rooms= [];
        this.devices= [];
      }

    },

    DeleteDeviceFromRoutine(deviceAndAct){
      this.routineCreated.splice(this.routineCreated.indexOf(deviceAndAct),1)
    },
    async updateRooms() {
      try {
        this.rooms = await this.$getHomeRooms(this.houseSelected.id)
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
    margin-bottom: 20px;
  }

  .margin-button2 {
    margin-top: 50px;
  }

  .margin-button3 {
    margin-bottom: 50px;
  }


</style>