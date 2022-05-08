<template>

  <div class="home-view">
    <div class="buttons">
      <v-btn class="font-weight-bold" height="100px" width="300px" color="success" elevation="3" x-large
             @click.stop="houseAdd = true">
        <div class="icon-div">
          Agregar Casa
                <v-icon large>house</v-icon>
        </div>
      </v-btn>
      <v-dialog v-model="houseAdd" max-width="600px" height="600px">
        <v-card>

            <v-card-title>
              <h2>Agregue una nueva casa</h2>

            </v-card-title>
            <v-card-text>
              <v-text-field
                  label="New house name"
                  :rules="rules"
                  hide-details="auto"
                  v-model="nombreCasa"
              />
              <v-btn color="primary" @click="addHouse(nombreCasa)">
                Agregar Casa
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large @click.stop="houseRemove = true">
        <div class="icon-div">
          Eliminar Casa
          <v-icon large>delete_forever</v-icon>
        </div>
      </v-btn>
      <v-dialog v-model="houseRemove" max-width="600px" height="600px">
        <v-card>
            <v-card-title>
              <h2>Seleccione casa a eliminar</h2>
            </v-card-title>
            <v-card-text>
              <v-container fluid c>
                  <v-row aligned="center">
                    <v-col class="d-flex" cols="12" sm="10">
                      <v-select
                          :items="houses"
                          label="House selected:"
                          outlined class="house-selector-slider"
                          dense
                          v-model="houseDeleteSelected"
                          persistent-placeholder
                          placeholder="Seleccione casa a remover">
                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
                      <v-btn color="primary" @click.stop="confirmRemoveHouse=true">
                Eliminar casa
              </v-btn>
              <v-dialog v-model="confirmRemoveHouse" max-width="600px" height="600px">
                <v-card>
                    <v-card-title>
                      <h2>Esta seguro que desea eliminar {{ houseDeleteSelected }}</h2>
                    </v-card-title>

                    <v-card-text>
                        <v-btn color="primary" @click="removeHouse(houseDeleteSelected)" >
                            Eliminar
                        </v-btn>
                        <v-btn color="error"  @click.stop="confirmRemoveHouse=false">
                            Cancelar
                        </v-btn>
                    </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>

    <div class="buttons">
      <v-btn class="font-weight-bold align-self" height="100px" width="300px" color="success" elevation="3" x-large
             @click.stop="deviceAdd = true">
        <div class="icon-div">
          Agregar Dispositivo
          <v-icon large>devices
          </v-icon>
        </div>
      </v-btn>
      <v-dialog v-model="deviceAdd" max-width="600px" height="600px">
              <v-card>
                <v-card-title>
                  <h2>Agregue un nuevo dispositivo</h2>
                </v-card-title>
                <v-card-text>
                  <v-container fluid c>
                    <v-row aligned="center">
                      <v-col class="d-flex" cols="12" sm="10">
                        <v-select
                            :items="houses"
                            label="House selected:"
                            outlined class="house-selector-slider"
                            dense
                            v-model="deviceAddHouseSelected"
                            persistent-placeholder
                            placeholder="Selecciona casa ">
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid c>
                    <v-row aligned="center">
                      <v-col class="d-flex" cols="12" sm="10">
                        <v-select
                            :items="deviceAddHouseSelected.cuartos"
                            label="Room selected:"
                            outlined class="house-selector-slider"
                            dense
                            v-model="deviceAddRoomSelected"
                            persistent-placeholder
                            placeholder="elecciona cuarto">
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container fluid c>
                    <v-row aligned="center">
                      <v-col class="d-flex" cols="12" sm="10">
                        <v-select
                            :items="deviceMap"
                            label="Device selected:"
                            outlined class="house-selector-slider"
                            dense
                            v-model="deviceSelected"
                            persistent-placeholder
                            placeholder="Selecciona el dispositivo">
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-text-field
                      label="New device name"
                      :rules="rules"
                      hide-details="auto"
                      v-model="deviceName"
                  />
                  <v-btn color="primary" @click="addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected)">
                    Agregar Dispositivo
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-dialog>
      <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large @click.stop="deviceRemove = true">
        <div class="icon-div">
          Eliminar dispositivo
          <v-icon large>tv_off</v-icon>
        </div>
      </v-btn>
      <v-dialog v-model="deviceRemove" max-width="600px" height="600px">
            <v-card>
              <v-card-title>
                <h2>Elija dispositivo a eliminar</h2>
    
              </v-card-title>
              <v-card-text>
                <v-container fluid c>
                  <v-row aligned="center">
                    <v-col class="d-flex" cols="12" sm="10">
                      <v-select
                          :items="houses"
                          label="House selected:"
                          outlined class="house-selector-slider"
                          dense
                          v-model="deviceAddHouseSelected"
                          persistent-placeholder
                          placeholder="Selecciona casa">
                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container fluid c>
                  <v-row aligned="center">
                    <v-col class="d-flex" cols="12" sm="10">
                      <v-select
                          :items="deviceAddHouseSelected.cuartos"
                          label="Room selected:"
                          outlined class="house-selector-slider"
                          dense
                          v-model="deviceAddRoomSelected"
                          persistent-placeholder
                          placeholder="Selecciona cuarto">
                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container fluid c>
                  <v-row aligned="center">
                    <v-col class="d-flex" cols="12" sm="10">
                      <v-select
                          :items="deviceAddRoomSelected.roomDevices"
                          item-text="deviceName"
                          label="Device selected:"
                          outlined class="house-selector-slider"
                          dense
                          v-model="deviceDeleteSelected"
                          persistent-placeholder
                          placeholder="Selecciona dispositivo">
                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
                <v-btn color="primary" @click.stop="confirmRemoveDevice = true">
                    Eliminar dispositivo
                </v-btn>
                <v-dialog v-model="confirmRemoveDevice" max-width="600px" height="600px">
                <v-card>
                    <v-card-title>
                      <h2>Esta seguro que desea eliminar {{ deviceDeleteSelected.deviceName }}</h2>
                    </v-card-title>

                    <v-card-text>
                        <v-btn color="error" @click="removeDevice(deviceDeleteSelected)" >
                            Eliminar
                        </v-btn>
                        <v-btn color="primary"  @click.stop="confirmRemoveDevice=false">
                            Cancelar
                        </v-btn>
                    </v-card-text>
                </v-card>
              </v-dialog>
              </v-card-text>
            </v-card>
          </v-dialog>
    </div>

    <div class="buttons">
      <v-btn class="font-weight-bold" height="100px" width="300px" color="success" elevation="3" x-large>
        <div class="icon-div">
          Agregar Rutina
          <v-icon large>edit_calendar</v-icon>
        </div>
      </v-btn>
      <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large @click.stop="routineRemove = true">
        <div class="icon-div">
          Eliminar Rutina
          <v-icon large>event_busy</v-icon>
        </div>
      </v-btn>
       <v-dialog v-model="routineRemove" max-width="600px" height="600px">
          <v-card>
            <v-card-title>
              <h2>Elija rutina a eliminar</h2>

            </v-card-title>
            <v-card-text>
              <v-container fluid c>
                <v-row aligned="center">
                  <v-col class="d-flex" cols="12" sm="10">
                    <v-select
                        :items="houses"
                        label="House selected:"
                        outlined class="house-selector-slider"
                        dense
                        v-model="deviceAddHouseSelected"
                        persistent-placeholder
                        placeholder="Selecciona casa">
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
              <v-container fluid c>
                <v-row aligned="center">
                  <v-col class="d-flex" cols="12" sm="10">
                    <v-select
                        :items="deviceAddHouseSelected.cuartos"
                        label="Room selected:"
                        outlined class="house-selector-slider"
                        dense
                        v-model="deviceAddRoomSelected"
                        persistent-placeholder
                        placeholder="Selecciona cuarto">
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
              <v-container fluid c>
                <v-row aligned="center">
                  <v-col class="d-flex" cols="12" sm="10">
                    <v-select
                        :items="deviceAddRoomSelected.routines"
                        item-text="routineName"
                        label="Device selected:"
                        outlined class="house-selector-slider"
                        dense
                        v-model="deviceDeleteSelected"
                        persistent-placeholder
                        placeholder="Selecciona rutina">
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
              <v-btn color="primary" @click.stop="confirmRemoveRoutine = true">
                  Eliminar rutina
              </v-btn>
              <v-dialog v-model="confirmRemoveDevice" max-width="600px" height="600px">
              <v-card>
                  <v-card-title>
                    <h2>Esta seguro que desea eliminar {{ routineDeleteSeleceted.routineName }}</h2>
                  </v-card-title>

                  <v-card-text>
                      <v-btn color="error" @click="removeRoutine(routineDeleteSeleceted)" >
                          Eliminar
                      </v-btn>
                      <v-btn color="primary"  @click.stop="confirmRemoveRoutine=false">
                          Cancelar
                      </v-btn>
                  </v-card-text>
              </v-card>
            </v-dialog>
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>
  </div>
</template>

<script>
  import store from '@/store/store'
  export default {
    name: "HomeView",

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
        confirRemoveRoutine: false,

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
      addHosuse(text) {
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
          this.removeDevice = false
          this.deviceDeleteSelected = {}
        }
      },
      removeRoutine(routine) {
      if (routine == null)
        console.log("No selecciono Dispositivo")
      else {
        //AGREGAR DISPOSITIVOVO
        this.removeRoutine = false
        this.confirmRemoveRoutine = false
        this.removeRoutine = false
        this.routineDeleteSelected = {}
      }

      }
    }
  }
</script>

<style scoped>
  .home-view  {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    min-height: 530px;
  }

 .buttons {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 50px;
    font-size: 40px;

  }

 .icon-div {
   display: flex;
   align-content: center;
   flex-direction: column;
 }

</style>

