<template>
  <div>
    <div class="add-button-padding">
      <v-btn color="primary" elevation="3" fab rounded @click.stop="routineAdd = true"><v-icon>add</v-icon></v-btn>
    </div>
    <v-dialog v-model="routineAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="AddRoutine(routineCreated)">
        <v-card-title>
          <h2>Cree una neva rutina</h2>

        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Nombre de la rutina nueva"
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
                    label="Cuarto seleccionado:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="roomSelected"
                    persistent-placeholder
                    placeholder="Seleccione un cuarto">
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
                    placeholder="Seleccione un cuarto">

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
          <v-btn color="primary" @click="AddDevice()">
            Agregar dispositivo a la rutina
          </v-btn>
          <v-row v-for="devAndAct in routineCreated" :key="devAndAct">
            <v-icon>{{getIcon(devAndAct.device)}}</v-icon>
          </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: "AddRoutine",


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
      routineCreated: []
    }
  },
  computed: {
    getIcon(myDevice){
      return store.devicesMap.find(
          device => device.id === myDevice.deviceCode)
    }
  },

  methods: {
    AddDevice(){
      var routine={
        device: this.deviceSelected,
        action: this.actionSelected,
      }
      this.routineCreated.concat(routine)
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

    }
  }
}
</script>

<style scoped>

</style>