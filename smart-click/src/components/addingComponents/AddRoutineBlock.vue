<template>
  <div>
    <v-btn class="font-weight-bold" height="100px" width="300px" color="success" elevation="3" x-large @click.stop="routineAdd = true" rounded>
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
                    label="Habitacion seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="roomSelected"
                    persistent-placeholder
                    placeholder="Seleccione una habitacion">
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
                    label="Accion seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    v-model="actionSelected"
                    persistent-placeholder
                    placeholder="Seleccione una accion">
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

    AddDevice(){
      var routine={
        device: this.deviceSelected,
        action: this.actionSelected,
      }
      this.routineCreated.concat(routine)
      this.routineCreated.push(routine)
      this.deviceSelected= {}
      this.roomSelected= {}
      this.deviceType= {}
      this.actionSelected= {}
    },
    AddRoutine(routine){
      if(routine == null)
        console.log("No completo la rutina completa" )
      else
        this.routineAdd = false,
        this.houseSelected = {},
        this.deviceSelected= {},
        this.actionSelected= {},
        this.roomSelected= {},
        this.deviceType= {},
        this.routineName="",

        this.routineCreated= []

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


</style>