<template>
  <div>
    <div class="margin-div-button">
      <v-btn color="primary" elevation="3" fab @click.stop="deviceAdd = true"><v-icon>add</v-icon></v-btn>
      <p class="text">AGREGAR DISPOSITIVO</p>
    </div>
    <v-dialog v-model="deviceAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="addDevice()">
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
          <v-btn class="margin-button" color="primary" @click="addDevice()">
            Agregar Dispositivo
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
import store from "@/store/store";
import {mapActions} from "vuex";
import {Device} from "@/Api/Device";

export default {
  name: "AddDeviceRound",

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
    ...mapActions("Devices", {
      $createDevice: "createDevice",

    }),
    ...mapActions("Room", {
      $addDevice: "addDevice",

    }),
    async addDevice() {
      if (this.deviceName === "" || this.deviceSelected == null || this.deviceAddHouseSelected == null || this.deviceAddRoomSelected == null)
        console.log("Mal nombre de casa")
      else {
        const type={
          id: "c89b94e8581855bc"  //SACAR ESTO DESPUES, ESTA HARDCODEADO
        }
        const device = new Device(null, this.deviceName, type/*this.deviceSelected*/, {});

        try {
          this.device = await this.$createDevice(device);
          this.device = Object.assign(new Device(), this.device);
          //this.$addDevice(this.deviceAddRoomSelected.id,this.device.id) FALTA HACER
        } catch (e) {
          console.log(e)
        }
        this.deviceAdd = false,
            this.deviceAddHouseSelected = {},
            this.deviceAddRoomSelected = {},
            this.deviceSelected = {},
            this.deviceName = ""
      }
    }
  }
}
</script>

<style scoped>
  .text{
    display: inline;
    padding-left: 10px;
    color: grey;
    font-size: 17px;
  }

  .margin-div-button {
    margin-top: 25px;
  }

  .margin-button {
    margin-top: 20px;
  }
</style>