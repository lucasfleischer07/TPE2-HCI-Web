<template>
  <div>
    <v-btn class="font-weight-bold hover-btn" height="100px" width="300px" color="success" elevation="3" x-large @click.stop="routineAdd = true" rounded>
      <div class="icon-div">
        Agregar rutina
        <v-icon large>event_busy</v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="routineAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="AddRoutine(routineCreated)">
        <v-card-title>
          <h2>Cree una nueva rutina</h2>

        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Nombre de la nueva rutina"
              :rules="rules"
              hide-details="auto"
              v-model="routineName"
          />
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
                    outlined class="house-selector-slider"
                    dense
                    v-model="actionSelected"
                    persistent-placeholder
                    placeholder="Seleccione una acción">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-btn class="margin-button" color="primary" @click="AddDevice()">
            Agregar dispositivo a la rutina
          </v-btn>
          <v-row>

            <div v-for="devAndAct in routineCreated" :key="devAndAct" class="device-and-actions">
              <v-card outlined>
                <span class="text-h6">{{devAndAct.device.deviceName}}</span>
                <v-btn depressed icon class="trash_class" @click="DeleteDeviceFromRoutine(devAndAct)">
                  <v-icon  color="error" >delete_forever</v-icon>
                </v-btn>
                <h3>{{devAndAct.action}}</h3>
              </v-card>
            </div>
          </v-row>
          <v-btn class="margin-button2" color="primary" @click="AddRoutine()">
            Crear Rutina
          </v-btn>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from "@/store/store";
import {mapActions} from "vuex";
import {Routine} from "@/Api/Routine";
import {Home} from "@/Api/House";

export default {
  name: "AddRoutineBlock",

  data(){
    return {
      myStore: store,

      routineAdd: false,

      routineName: "",
      houseSelected:{},
      roomSelected: {},
      deviceSelected: {},
      actionSelected: {},
      deviceType: {},
      routineCreated: [],

      rules: [v => v.length <= 25 || 'Max 25 characters'],

    }
  },

  methods: {
    ...mapActions("Routine",{
      $createRoutine: "createRoutine",
    }),
    ...mapActions("House", {
      $modifyHouse: "modifyHome",

    }),

  //EL DEVICE ESTA HARCODEADO PERO ANDA
    AddDevice(){
      if(!this.houseSelected || !this.roomSelected  || !this.deviceSelected  || !this.actionSelected ){
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

    async AddRoutine(){
      if(this.routineCreated == null)
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

        this.routineAdd = false,
            this.houseSelected = {},
            this.deviceSelected = {},
            this.actionSelected = {},
            this.roomSelected = {},
            this.deviceType = {},
            this.routineName = "",

            this.routineCreated = []
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


</style>