<template>
  <div>
    <v-btn class="font-weight-bold hover-btn" height="100px" width="300px" color="success" elevation="3" x-large @click.stop="routineAdd = true" rounded>
      <div class="icon-div">
        Agregar rutina
        <v-icon large>event_busy</v-icon>
      </div>
    </v-btn>
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
                    :items="myStore.houses"
                    item-text="nombreCasa"
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
                    :items="houseSelected.cuartos"
                    item-text="roomName"
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
                    :items="roomSelected.roomDevices"
                    item-text="deviceName"
                    :disabled="Object.entries(roomSelected).length ===  0"
                    @change="getDeviceActions"
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
                    :items="deviceType.actions"
                    label="Acción seleccionada:"
                    :disabled="Object.entries(deviceSelected).length ===  0"
                    outlined class="house-selector-slider"
                    dense
                    v-model="actionSelected"
                    persistent-placeholder
                    placeholder="Seleccione una acción">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-text-field
              label="Nombre de la nueva rutina"
              class="margin-button3"
              :rules="rules"
              hide-details="auto"
              v-model="routineName"
          />
          <v-btn :disabled="Object.entries(houseSelected).length ===  0 || Object.entries(roomSelected).length ===  0 || Object.entries(deviceSelected).length ===  0 || Object.entries(actionSelected).length ===  0" class="margin-button" color="primary" @click="AddDevice">
            Agregar dispositivo a la rutina
          </v-btn>
          <v-row>
            <div v-for="devAndAct in routineCreated" :key="devAndAct" class="device-and-actions">
              <v-card outlined>
                <span class="text-h6">{{devAndAct.device.id}}</span>
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
import {mapActions} from "vuex";
import {Routine} from "@/Api/Routine";
import {Home} from "@/Api/House";

export default {
  name: "AddRoutineBlock",

  data(){
    return {

      routineAdd: false,

      routineName: "",
      houseSelected: {},
      roomSelected: {},
      deviceSelected: {},
      actionSelected: {},
      deviceType: {},
      routineCreated: [],
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 characters'],


    }
  },

  methods: {
    ...mapActions("Routine",{
      $createRoutine: "createRoutine",
    }),
    ...mapActions("House", {
      $modifyHouse: "modifyHome",

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
        var actions = {
          device: { id: "1fbc9ada2d9b1641"}, //this.deviceSelected.deviceCode,
          actionName: "turnOn",
          params: [],
          meta: {}
        }
        this.routineCreated.push(actions)
        this.deviceSelected = {}
        this.roomSelected = {}
        this.deviceType = {}
        this.actionSelected = {}
      }
    },

    async AddRoutine() {
      if(!this.checkParam(this.routineCreated) )
        console.log("No completo la rutina completa" )
      else {
        try {

          let routine = new Routine(null, this.routineName, this.routineCreated, {})
          routine = await this.$createRoutine(routine)
          routine = Object.assign(new Home(), routine);
          this.houseSelected.meta.homeRoutines.push(routine)
          await this.$modifyHouse(this.houseSelected) //Modifico la casa y le agrego la rutina
          this.setResult(routine)
        } catch (e) {
          this.setResult(e)
        }
        this.routineAdd = false;
        this.houseSelected = {};
        this.deviceSelected = {};
        this.actionSelected = {};
        this.roomSelected = {};
        this.deviceType = {};
        this.routineName = "";
        this.routineCreated = [];
      }

    },
    getDeviceActions(myDevice){
      this.deviceType= store.devicesMap.find(
          device => device.id === myDevice.deviceCode)

    },
    DeleteDeviceFromRoutine(deviceAndAct){
      this.routineCreated.splice(this.routineCreated.indexOf(deviceAndAct),1)
    }
  }
}
</script>

<style scoped>

  .device-and-actions{
    padding: 20px 0 0 20px ;
  }

  .icon-div {
    display: flex;
    align-content: center;
    flex-direction: column;
  }

  .margin-button {
    margin-bottom: 20px;
  }

  .margin-button2 {
    margin-top: 50px;
  }

  .hover-btn:hover {
    opacity: 75%;
  }

  .margin-button3 {
    margin-bottom: 50px;
  }


</style>