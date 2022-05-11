<template>
  <div>
    <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large @click.stop="deviceRemove = true">
      <div class="icon-div">
        Eliminar dispositivo
        <v-icon large>tv_off</v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="deviceRemove" max-width="600px" height="600px">
      <v-card @keyup.enter="removeDevice(deviceDeleteSelected)">
        <v-card-title>
          <h2>Elija dispositivo a eliminar</h2>

        </v-card-title>
        <v-card-text>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="houses"
                    item-text="nombreCasa"
                    label="Casa seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="deviceDeleteHouseSelected"
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
                    :items="deviceDeleteHouseSelected.cuartos"
                    item-text="roomName"
                    label="Cuarto seleccionado:"
                    outlined class="house-selector-slider"
                    return-object
                    dense
                    v-model="deviceDeleteRoomSelected"
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
                    :items="deviceDeleteRoomSelected.roomDevices"
                    item-text="deviceName"
                    label="Dispositivo seleccionado:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="deviceDeleteSelected"
                    persistent-placeholder
                    placeholder="Seleccione un dispositivo">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-btn color="primary" @click.stop="confirmRemoveDevice = true">
            Eliminar dispositivo
          </v-btn>
          <v-dialog v-model="confirmRemoveDevice" max-width="600px" height="600px">
            <v-card @keyup.enter="removeDevice(deviceDeleteSelected)">
              <v-card-title>
                <h2>Esta seguro que desea eliminar "{{ deviceDeleteSelected.deviceName }}"</h2>
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
</template>

<script>
import store from "@/store/store";

export default {
  name: "RemoveDevice",

  data() {
    return {
      houses: store.houses,

      deviceRemove: false,
      confirmRemoveDevice:false,

      deviceDeleteHouseSelected: {},
      deviceDeleteRoomSelected: {},

      deviceDeleteSelected: {},


      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },
  methods: {

    removeDevice(device){
      if (device == null)
        console.log("No selecciono Dispositivo")
      else {
        //AGREGAR DISPOSITIVOVO
        this.confirmRemoveDevice = false
        this.deviceRemove = false
        this.deviceDeleteHouseSelected= {}
        this.deviceDeleteRoomSelected= {}
        this.deviceDeleteSelected = {}
      }
    }
  }

}
</script>

<style scoped>

</style>