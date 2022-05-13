<template>
  <div>
    <v-btn class="font-weight-bold align-self" height="100px" width="300px" color="success" elevation="3" x-large
           @click.stop="deviceAdd = true" rounded>
      <div class="icon-div">
        Agregar Dispositivo
        <v-icon large>devices
        </v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="deviceAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected)">
        <v-card-title>
          <h2>Agregue un nuevo dispositivo</h2>
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
                    v-model="deviceAddHouseSelected"
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
                    :items="deviceAddHouseSelected.cuartos"
                    item-text="roomName"
                    label="Habitación seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    v-model="deviceAddRoomSelected"
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
                    :items="deviceMap"
                    item-text="deviceName"
                    label="Dispositivo seleccionado:"
                    outlined class="house-selector-slider"
                    dense
                    return-object
                    v-model="deviceSelected"
                    persistent-placeholder
                    placeholder="Seleccione el dispositivo">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-text-field
              label="Nombre del dispositivo nuevo"
              :rules="rules"
              hide-details="auto"
              v-model="deviceName"
          />
          <v-btn class="margin-button" color="primary" @click="addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected)">
            Agregar Dispositivo
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: "AddDevice",

    data() {
      return {
        deviceMap: store.devicesMap,
        houses: store.houses,

        deviceAdd: false,

        deviceAddHouseSelected: {},
        deviceAddRoomSelected: {},
        deviceSelected: {},
        deviceName: "",
        rules: [v => v.length <= 25 || 'Max 25 characters'],
      }
    },
    methods: {

      addDevice(text, deviceType, house, room) {
        if (text === "" || deviceType == null || house == null || room == null)
          console.log("Mal nombre de casa")
        else {
          //AGREGAR DISPOSITIVO
          this.deviceAdd= false,
          this.deviceAddHouseSelected= {},
          this.deviceAddRoomSelected= {},
          this.deviceSelected= {},
          this.deviceName= ""
        }
      }


    }
}
</script>

<style scoped>

  .icon-div {
    display: flex;
    align-content: center;
    flex-direction: column;
  }

  .margin-button {
    margin-top: 20px;
  }

</style>