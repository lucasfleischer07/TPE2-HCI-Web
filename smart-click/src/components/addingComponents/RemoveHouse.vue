<template>
  <div>
    <div class="delete-div">
      <v-btn class="delete-button" small color="error" elevation="3" fab rounded @click.stop="deleteModal"><v-icon>delete_forever</v-icon></v-btn>
    </div>
    <v-dialog v-model="houseRemove" max-width="600px" height="600px">
      <v-card>
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{ house_selected.name }}"</h2>
        </v-card-title>
        <input style="outline:none; cursor: none; color: transparent; width: 1px; height: 1px" ref="inputElem" @keypress="removeHouse" value="">
        <v-card-text>
          <v-btn class="padding-btn" color="error" @click="removeHouse()" >
            Eliminar
          </v-btn>
          <v-btn color="grey"  @click.stop="houseRemove=false">
            Cancelar
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RemoveHouse",
  props: {
  },
  data() {
    return {
      snackbar:false,
      houseRemove: false,
      rules: [v => !(v.empty) || 'Seleccione una casa'],
      house_selected:this.getHouse()
    }
  },


  computed: {
    ...mapState("House", {
      house: (state) => state.house,
    }),

  },


  methods: {
    ...mapActions("House", {
      $removeHouse: "deleteHome",
      $getRooms:"getHomeRooms"
      }),
    ...mapActions("Room",{
      $getDevices:"getDevices",
      $deleteRoom:"delete"
    }),
    ...mapActions("Devices",{
      $deleteDevice:"deleteDevice"
    }),

    deleteModal() {
      this.houseRemove = true;
      this.getHouse();
      setTimeout(()=> this.$refs.inputElem.focus(), 300)
    },

    async removeHouse() {
      try {
        await this.getHouse()
        let rooms=await this.$getRooms(this.house_selected.id)
        let devices
        for(let room of rooms){
          devices=await this.$getDevices(room.id)
          for(let device of devices){
            await this.$deleteDevice(device.id)
          }
          await this.$deleteRoom(room.id)
        }
        await this.$removeHouse(this.house_selected.id);
        this.$parent.selectHome({});
        await this.getHouse();
        this.$parent.setSnack("Casa eliminada correctamente");
      } catch (e) {
       // this.setResult(e);
      }

      this.confirmRemoveHouse = false
      this.houseRemove = false
      this.houseDeleteSelected = {}
    },

    async getHouse(){
      return this.house_selected=await this.$parent.getSelected()
    }
  }


}
</script>

<style scoped>
  .delete-div {
    display: flex;
    justify-content: flex-end;
    color: gray;
    align-items: center;
  }

  .delete-button {
     margin-left: 50px;
     margin-right: 5px;
     margin-bottom: 4px;
   }

  .padding-btn {
    margin-right: 25px;
  }

</style>