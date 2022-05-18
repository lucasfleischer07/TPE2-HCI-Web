<template>
  <div class="add-button">
    <div class="rooms-alignment">
      <h1 class="text-rooms" >Habitaciones:</h1>
      <v-btn color="primary" elevation="3" fab rounded @click.stop="roomAdd = true"><v-icon>add</v-icon></v-btn>
    </div>
    <v-dialog v-model="roomAdd" max-width="600px" height="600px" @click:outside="resetText">
      <v-card @keyup.enter="createRoom(roomName)">
        <v-card-title>
          <h2>Agregue una nueva habitación en "{{houseSelected.name}}"</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Nombre de la habitación"
              :rules="rules"
              hide-details="auto"
              v-model="roomName"
          />
          <v-btn :disabled="roomName.length < 3 || roomName.length > 60" class="margin-button" color="primary" @click="createRoom(roomName)">
            Agregar habitación
          </v-btn>
        </v-card-text>
      </v-card>
      <v-dialog v-model="nameError">
        <v-card>
          <v-card-title>Nombre ya usado para una habitacion</v-card-title>
        </v-card>
      </v-dialog>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {Room} from "@/Api/Room";

export default {
  name: "AddRoom",

  props: {
    houseSelected: {},
  },

  data() {
    return {
      nameError:false,
      roomAdd: false,
      roomName: "",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 caracteres'],
    }
  },

  computed: {
    ...mapState( "House", {
      $house: "homes",
    })
  },

  methods: {
    ...mapActions("Room", {
      $createRoom: "create",
      $getRooms:"getAll",
    }),
    ...mapActions("House",{
      $addHomeRoom : "addHomeRoom"
    }),


    async createRoom(roomName) {
      let room = new Room(null, roomName, null);

      try {

        room =(await this.$createRoom(room));
        room = Object.assign(new Room(), room);
        let array= [this.houseSelected.id,room.id]
        await this.$addHomeRoom(array)
        this.roomAdd = false
        this.roomName = ""
        await this.$getRooms()
        this.$parent.updateRooms()
      } catch (e) {
        if(e.code==2){
          this.nameError= true
        }
      }

    },
    resetText(){
      this.roomName = ""
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