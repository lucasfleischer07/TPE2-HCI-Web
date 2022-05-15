<template>
  <div class="add-button">
    <div class="rooms-alignment">
      <h1 class="text-rooms" >Habitaciones:</h1>
      <v-btn color="primary" elevation="3" fab rounded @click.stop="roomAdd = true"><v-icon>add</v-icon></v-btn>
    </div>
    <v-dialog v-model="roomAdd" max-width="600px" height="600px">
      <v-card @keyup.enter="createRoom(roomName)">
        <v-card-title>
          <h2>Agregue una nueva habitación</h2>
        </v-card-title>
        <v-card-text>
          <v-container fluid c>
            <v-row aligned="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-select
                    :items="houses"
                    label="Casa seleccionada:"
                    outlined class="house-selector-slider"
                    dense
                    v-model="houseSelected"
                    persistent-placeholder
                    placeholder="Selecciona casa ">
                </v-select>
              </v-col>
            </v-row>
          </v-container>

          <v-text-field
              label="Nombre de la habitación"
              :rules="rules"
              hide-details="auto"
              v-model="roomName"
          />
          <v-btn :disabled=" Object.entries(houseSelected).length ===  0 || roomName.length < 3 || roomName.length > 60" class="margin-button" color="primary" @click="createRoom(roomName)">
            Agregar habitación
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from "@/store/store";
import { mapActions } from "vuex";
import {Room} from "@/Api/Room";

export default {
  name: "AddRoom",
  data() {
    return {

      houses: store.houses,
      roomAdd: false,
      houseSelected: {},
      roomName: "",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 caracteres'],
    }
  },


  methods: {
    ...mapActions("Room", {
      $createRoom: "create"
    }),


    async createRoom(roomName) {
      const room = new Room(null, roomName, null);

      try {
        this.room = await this.$createRoom(room);
        this.room = Object.assign(new Room(), this.room);
        this.roomAdd = false
        this.roomName = ""
      } catch (e) {
        console.log(e)
      }
    }


  }
}

</script>

<style scoped>

.margin-button {
  margin-top: 20px;
}

.add-button {
  padding-right: 6px;
  justify-content: flex-end;
  padding-bottom: 10px;
}

.text-rooms{
  color: grey;
  font-weight: lighter;
  margin-top: 16px;
}

.rooms-alignment{
  display: flex;
  justify-content: space-between;
  padding-right: 90px;
  padding-left: 10px;
  align-items: flex-end;
}

</style>