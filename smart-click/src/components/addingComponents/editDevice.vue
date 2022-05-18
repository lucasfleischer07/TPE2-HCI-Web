<template>
  <div class="edit-button">
    <v-btn depressed icon color="primary" @click.stop="deviceEdit = true"><v-icon>edit</v-icon>
    </v-btn>
    <v-dialog v-model="deviceEdit" max-width="600px" height="600px" @click:outside="resetText">
      <v-card  @keyup.enter="editDevice(nameDevice)">
        <v-card-title>
          <h2>Editar nombre del dispositivo</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Nuevo nombre del dispositivo"
              :rules="rules"
              hide-details="auto"
              v-model="nameDevice"
          />
          <v-btn style="margin-top: 20px" :disabled="nameDevice.length < 3 || nameDevice.length > 60" class="margin-button" color="primary" @click="editDevice(nameDevice)">
            Cambiar nombre
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
    <v-snackbar v-model="snackbar" :timeout="2000" color="#737373"> Nombre editado correctamente
      <template v-slot:action="{ attrs }">
        <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import {Device} from "@/Api/Device";
import {mapActions} from "vuex";

export default {
  name: "editDevice",


  data() {
    return {
      snackbar:false,
      nameError: false,
      deviceEdit:false,
      nameDevice:"",
      errorMsg:"",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 characters'],
    }
  },
  props:{
    deviceEntity:Device,
  },

  methods:{
    ...mapActions("Devices",{
      $update:"modifyDevice"
    }),

    async editDevice(name){
      try {
    let aux=[this.deviceEntity.id,new EditDevice(name)]
      await this.$update(aux)
      this.deviceEdit=false
      this.snackbar=true}
      catch (e){
        if(e.code===99){
          this.$router.push('NotFound/')
        }
        if(e.code===2){
          this.errorMsg="El nombre seleccionado ya ha sido utilizado en otro dispositivo. Por favor elija otro nombre."
          this.nameError=true}
        if(e.code===1){
          this.errorMsg="El nombre solo puede tener letras,numeros o espacios. Por favor elija otro nombre."
          this.nameError=true
        }
      }
    },
    resetText(){
      this.nameDevice=""
    }
  }
}
class EditDevice {
  constructor(name) {
    this.name=name
    this.meta={}

  }

}
</script>

<style scoped>
  .edit-button {
    position: absolute;
    top: 1%;
    right: 60%;
  }
</style>