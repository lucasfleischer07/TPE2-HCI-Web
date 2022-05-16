<template>
  <div>
    <div class="delete-div">
      <v-btn class="delete-button" small color="error" elevation="3" fab rounded @click.stop="houseRemove = true"><v-icon>delete_forever</v-icon></v-btn>
    </div>
    <v-dialog v-model="houseRemove" max-width="600px" height="600px">
      <v-card @keyup.enter="removeHouse()">
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{ house_selected.name }}"</h2>
        </v-card-title>

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
import House from "@/store/module/House";

export default {
  name: "RemoveHouse",
  props: {
    house_selected: House,
  },
  data() {
    return {
      houseRemove: false,
      rules: [v => !(v.empty) || 'Seleccione una casa'],
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



    async removeHouse() {
      try {
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

      } catch (e) {
       // this.setResult(e);
      }

      this.confirmRemoveHouse = false
      this.houseRemove = false
      this.houseDeleteSelected = {}
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