<template>
  <div>
    <div class="margin-div-button">
      <v-btn color="primary" elevation="3" fab @click.stop="deviceAdd = true"><v-icon>add</v-icon></v-btn>
    </div>
    <v-dialog v-model="deviceAdd" max-width="600px" height="600px" @click:outside="resetAdd" >
      <v-card @keyup.enter="addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected)">
        <v-card-title>
          <h2>Agregue un nuevo dispositivo en "{{deviceAddRoomSelected.name}}"</h2>
        </v-card-title>
        <v-card-text>
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
      <v-dialog v-model="nameError" max-width="480px" height="50px">
        <v-card style="background-color: #ff6666">
          <v-card-title style="justify-content: center; font-weight: bold">Nombre inválido</v-card-title>
          <v-btn class="close-button" @click="nameError=false" icon color="black" outlined><v-icon>close</v-icon></v-btn>
          <v-container style="padding-bottom: 12px; padding-top: 0px">
            <v-card-text style="justify-content: flex-start; text-align: initial">{{
                errorMsg
              }}</v-card-text>
          </v-container>
        </v-card>
      </v-dialog>
    </v-dialog>
    <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="#737373"
    >
      Dispositivo agregado correctamente

      <template v-slot:action="{ attrs }">
        <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>


  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import {Device} from "@/Api/Device";
import localStore from "@/store/localStore";


export default {
  name: "AddDevice",

  props: {
    deviceAddHouseSelected: {},
    deviceAddRoomSelected: {},
  },

  data() {
    return {
      snackbar:false,
      errorMsg:"",
      types:localStore.devicesImplemented,
      houseRooms:null,
      deviceAdd: false,
      nameError:false,
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
      let result
      try {
        result = await this.$updateRooms(house);
      }catch(e){
        if(e.code===99){
          this.$router.push('NotFound/')
        }
      }
      this.houseRooms=result;
    },

    async getAllHouses() {
      try {
        this.controller = new AbortController();
        await this.$getAllHouses(this.controller);
        this.controller = null;
      } catch (e) {
        if(e.code===99){
          this.$router.push('NotFound/')
        }
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
          this.deviceAdd = false,
              this.deviceSelected = {},
              this.deviceName = ""
          this.$parent.$parent.$parent.$parent.updateDevices()
          this.snackbar= !this.snackbar
        } catch (e) {
          if(e.code===2){
            this.errorMsg="El nombre seleccionado ya ha sido utilizado en otro dispositivo. Por favor elija otro nombre."
            this.nameError=true}
          if(e.code===1){
            this.errorMsg="El nombre puede tener letras, números o espacios solamente. Por favor elija otro nombre."
            this.nameError=true
          }
        }

      }
    },
    resetAdd(){
      this.deviceSelected = {},
      this.deviceName = ""
    }

  }
}
</script>

<style scoped>
  .margin-div-button {
    margin-top: 25px;
  }

  .close-button {
    position: absolute;
    right: 2%;
    top: 7%;
  }

  .margin-button {
    margin-top: 20px;
  }
</style>