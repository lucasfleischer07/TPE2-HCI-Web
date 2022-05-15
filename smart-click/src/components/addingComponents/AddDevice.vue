<template>
  <div class="button">
    <v-btn class="font-weight-bold align-self hover-btn" height="100px" width="300px" color="success" elevation="3" x-large
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
                    outlined
                    class="house-selector-slider"
                    dense
                    return-object
                    required
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
          <v-btn :disabled=" Object.entries(deviceAddHouseSelected).length ===  0 || Object.entries(deviceAddRoomSelected).length ===  0 || Object.entries(deviceSelected).length ===  0 || deviceName.length < 3 || deviceName.length > 60" class="margin-button" color="primary" @click="addDevice(deviceName,deviceSelected,deviceAddHouseSelected,deviceAddRoomSelected)">
            Agregar Dispositivo
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
import {mapActions} from "vuex";
import {Device} from "@/Api/Device";

export default {
  name: "AddDevice",

    data() {
      return {


        deviceAdd: false,

        deviceAddHouseSelected: {},
        deviceAddRoomSelected: {},
        deviceSelected: {},
        deviceName: "",
        rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 characters'],

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

  .button {
    display: flex;
  }

  .icon-div {
    display: flex;
    align-content: center;
    flex-direction: column;
  }

  .margin-button {
    margin-top: 20px;
  }

  .hover-btn:hover {
    opacity: 75%;
  }

</style>