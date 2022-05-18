<template>
  <div class="main-div">
    <v-btn depressed icon class="trash_class" @click.stop="deleteModal"><v-icon color="error">delete_forever</v-icon></v-btn>
    <v-dialog v-model="deviceRemove" max-width="600px" height="600px">
      <v-card>
        <v-card-title>
          <h2>Esta seguro que desea eliminar "{{deviceEntity.name}}"</h2>
        </v-card-title>
        <input style="outline:none; cursor: none; color: transparent; width: 1px; height: 1px" ref="inputElem" @keypress="deleteModal" value="">
        <v-card-text>
          <v-btn class="padding-btn" color="error" @click="removeDevice" >
            Eliminar
          </v-btn>
          <v-btn color="grey"  @click.stop="deviceRemove=false">
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
      Cuarto agregado correctamente

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
import {Device} from "@/Api/Device";


export default {
  name: "RemoveDevice",
  props: {
  deviceEntity:{}
  },
  data() {
    return {
      snackbar:false,
      deviceRemove: false,
      confirmRemoveDevice:false,
      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },

  methods: {
    ...mapActions("Devices",{
      $removeDevice:"deleteDevice"
    }),
    ...mapActions("Routine",
        {
          $getRoutines:"getAllRoutine",
          $update:"modifyRoutine",
          $remove:"deleteRoutine"
        }),

    deleteModal() {
      this.deviceRemove = true;
      setTimeout(()=> this.$refs.inputElem.focus(), 300)
    },

    async removeDevice(){
      try {

      let device=Object.assign(new Device(),this.deviceEntity)
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
          await this.$update(aux)
        }
      }
      await this.$removeDevice(device.id)
        this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.setSnack("Dispositivo eliminado correctamente")
      this.confirmRemoveDevice = false
      this.deviceRemove = false
      this.deviceDeleteSelected = {}}
    catch (e) {
        console.log(e)
      }
      }
    },

}
class Rout{
  constructor(name,actions,meta) {
    this.name=name
    this.actions=actions
    this.meta=meta
  }
}
class Act{
  constructor(id,actionName,params) {
    this.device=new Dev(id)
    this.actionName=actionName
    this.params=params
    this.meta={}
  }
}
class Dev{
  constructor(id) {
    this.id=id
  }
}
export {Rout,Act,Dev}
</script>

<style scoped>

.main-div {
  position: relative;
  left: 80%;
  bottom: 60%;
}

.padding-btn {
  margin-right: 25px;
}

</style>