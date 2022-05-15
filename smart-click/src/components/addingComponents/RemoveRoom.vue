<template>
  <div class="div-button-delete-room">
    <v-btn class="delete-button" color="error" elevation="3" fab rounded small @click.stop="removeRoom = true"><v-icon>delete_forever</v-icon></v-btn>
    <v-dialog v-model="removeRoom" max-width="600px" height="600px">
      <v-card @keyup.enter="deleteRoom()">
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{ room_selected.routineName }}"</h2>
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
    room_selected: {}

  },
  data(){
    return {
      removeRoom: false,
    }
  },

  methods: {
    ...mapActions("Room", {
      $deleteRoom: "delete",
    }),

    async deleteRoom(){
      try {
        //TODO: Esta harcodeado esto
        await this.$deleteRoom("4c3c5705b8af92af");
        this.removeRoom = false
      } catch (e) {
        console.log(e)
      }

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