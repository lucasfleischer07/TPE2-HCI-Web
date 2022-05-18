<template>
  <div class="div-button-delete-room">
    <v-btn class="delete-button" color="error" elevation="3" fab rounded small @click.stop="deleteModal"><v-icon>delete_forever</v-icon></v-btn>
    <v-dialog v-model="removeRoom" max-width="600px" height="600px">
      <v-card>
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{ room_selected.name }}"</h2>
        </v-card-title>
        <input style="outline:none; cursor: none; color: transparent; width: 1px; height: 1px" ref="inputElem" @keypress="deleteModal" value="">
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
    <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="success"
    >
      Se elimino correctamente la habitacion

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
import {mapActions} from "vuex";
import {Act, Rout} from "@/components/addingComponents/RemoveDevice";


export default {
  name: "RemoveRoom",

  props: {
    room_selected: {},
  },
  data(){
    return {
      snackbar:false,
      removeRoom: false,
      dev:null
    }
  },

  methods: {
    ...mapActions("Room", {
      $deleteRoom: "delete",
      $getDevices: "getDevices",
    }),
    ...mapActions("Routine",
        {
          $getRoutines:"getAllRoutine",
          $update:"modifyRoutine",
          $remove:"deleteRoutine"
        }),

    deleteModal() {
      this.removeRoom = true;
      this.$parent.$parent.$parent.$parent.updateRooms()
      setTimeout(()=> this.$refs.inputElem.focus(), 300)
    },


    async deleteRoom() {
      try {
        let devices =await this.$getDevices(this.room_selected.id)
        for(let device of devices){
          await this.removeDevice(device)
        }
        await this.$deleteRoom(this.room_selected.id);
        this.removeRoom = false
        this.snackbar= !this.snackbar
      } catch (e) {
        if(e.code===99){
          this.$router.push('NotFound/')
        }
      }
      this.$parent.$parent.$parent.$parent.updateRooms()

    },




    ...mapActions("Devices",{
      $removeDevice:"deleteDevice"
    }),

    async removeDevice(device){
      let routines=await this.$getRoutines()
      for(let routine of routines){
        let acts=[]
        for(let action of routine.actions){
          if(device.id !== action.device.id){
            acts.push(new Act(action.device.id,action.actionName,action.params))}
        }
        if(Object.entries(acts).length==0){
          await this.$remove(routine.id)
        }else{

          let aux=[routine.id,new Rout(routine.name,acts,routine.meta)]
          await this.$update(aux)}
      }
      await this.$removeDevice(device.id)
      this.confirmRemoveDevice = false
      this.deviceRemove = false
      this.deviceDeleteSelected = {}
    }
  },

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