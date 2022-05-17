<template>
  <div class="div-button-delete-room">
    <v-btn class="delete-button" color="error" elevation="3" fab rounded small @click.stop="removeRoom = true"><v-icon>delete_forever</v-icon></v-btn>
    <v-dialog v-model="removeRoom" max-width="600px" height="600px">
      <v-card @keyup.enter="deleteRoom()">
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{ room_selected.name }}"</h2>
        </v-card-title>

        <v-card-text>
          <v-btn class="padding-btn" color="error" @click="deleteRoom()" >
            Eliminar
          </v-btn>
          <v-btn color="grey"  @click.stop="removeRoom=false">
            Cancelar
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions} from "vuex";


export default {
  name: "RemoveRoom",

  props: {
    room_selected: {},
  },
  data(){
    return {
      removeRoom: false,
      dev:null
    }
  },

  methods: {
    ...mapActions("Room", {
      $deleteRoom: "delete",
      $getDevices: "getDevices",
    }),


    async deleteRoom() {
      try {
        let devices =await this.$getDevices(this.room_selected.id)
        for(let device of devices){
          await this.removeDevice(device)
        }
        await this.$deleteRoom(this.room_selected.id);
        this.removeRoom = false

      } catch (e) {
        console.log(e)
      }
      this.$parent.$parent.$parent.$parent.updateRooms()

    },




    ...mapActions("Devices",{
      $removeDevice:"deleteDevice"
    }),

    async removeDevice(device){
      await this.$removeDevice(device.id)
    }
  }

}
</script>

<style scoped>
  .delete-button {
    margin-left: 100px;
    margin-right: 5px;
  }

  .padding-btn {
    margin-right: 25px;
  }

  .div-button-delete-room {
    display: flex;
    width: auto;
    justify-content: end;
    margin-right: 50px;
    align-items: center;
  }

</style>