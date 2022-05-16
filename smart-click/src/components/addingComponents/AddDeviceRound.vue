<template>
  <div>
    <div class="margin-div-button">
      <v-btn color="primary" elevation="3" fab @click.stop="deviceAdd = true"><v-icon>add</v-icon></v-btn>
    </div>
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
                    :items="this.$house"
                    item-text="name"
                    label="Casa seleccionada:"
                    outlined
                    class="house-selector-slider"
                    dense
                    return-object
                    required
                    v-model="deviceAddHouseSelected"
                    @change="houseRooms=updateRooms(deviceAddHouseSelected.id)"
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
                    :items="houseRooms"
                    item-text="name"
                    return-object
                    :disabled="Object.entries(deviceAddHouseSelected).length ===  0"
                    :rules="[v => !!v || 'Campo obligatorio']"
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
                    :items="types"
                    item-text="name"
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
          <v-btn :disabled=" Object.entries(deviceAddHouseSelected).length ===  0 || Object.entries(deviceAddRoomSelected).length ===  0 || Object.entries(deviceSelected).length ===  0 || deviceName.length < 3 || deviceName.length > 60" class="margin-button" color="primary" @click="addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected)">
            Agregar Dispositivo
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import {Device} from "@/Api/Device";
import localStore from "@/store/localStore";


export default {
  name: "AddDevice",

  data() {
    return {
      types:localStore.devicesImplemented,
      houseRooms:null,
      deviceAdd: false,
      deviceAddHouseSelected: {},
      deviceAddRoomSelected: {},
      deviceSelected: {},

      deviceName: "",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 characters'],

    }
  },
  computed: {

    ...mapState("House", {
      $house: "homes",
    }),
    ...mapState("Room",{
      $rooms: "rooms"
    }),

    canCreate() {
      return !this.house;
    },
    canOperate() {
      return this.house;
    },
    canAbort() {
      return this.controller;
    },
    updateHouse(){
      return this.$house;},


  },

  methods: {
    ...mapActions("House", {
      $getAllHouses: "getAllHomes",
      $updateRooms: "getHomeRooms"

    }),


    async updateRooms(house){
      let result=await this.$updateRooms(house);
      this.houseRooms=result;
    },

    async getAllHouses() {
      try {
        this.controller = new AbortController();
        await this.$getAllHouses(this.controller);
        this.controller = null;
      } catch (e) {
        this.setResult(e);
      }
    },
    ...mapActions("ProtoDevice", {
      $updateTypes: "getAllDevicesTypes",

    }),

    async updateTypes(){
      let result=await this.$updateTypes();
      this.types=result;
    },


    ...mapActions("Devices", {
      $createDevice: "createDevice",

    }),
    ...mapActions("Room", {
      $addDevice: "addDevice",

    }),
    async addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected) {
      if (deviceName === "" || deviceSelected == null || deviceAddHouseSelected == null || deviceAddRoomSelected == null)
        console.log("Mal nombre de casa")
      else {
        const device = new Device(null, deviceName, deviceSelected.id, {});

        try {
          this.device=await this.$createDevice(device);
          this.device = Object.assign(new Device(), this.device);
          let id=[this.deviceAddRoomSelected.id,this.device.id]
          await this.$addDevice(id)
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