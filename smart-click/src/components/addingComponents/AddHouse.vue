<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="2000" color="#737373"> Casa agregada correctamente
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
    <v-btn class="font-weight-bold hover-btn" height="100px" width="300px" color="success" elevation="3" x-large
           @click.stop="houseAdd = true" rounded >
      <div class="icon-div">
        Agregar Casa
        <v-icon large>house</v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="houseAdd" max-width="600px" height="600px" @click:outside="resetText">
      <v-card  @keyup.enter="createHouse(nombreCasa)">
        <v-card-title>
          <h2>Agregue una nueva casa</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Nombre de nueva casa"
              :rules="rules"
              hide-details="auto"
              v-model="nombreCasa"
          />
          <v-btn :disabled="nombreCasa.length < 3 || nombreCasa.length > 60" class="margin-button" color="primary" @click="createHouse(nombreCasa)">
            Agregar Casa
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

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Home,HomeMeta } from "../../Api/House";

export default {
  name: "AddHouse",
  data() {
    return {
      snackbar:false,
      nameError:false,
      houseAdd: false,
      errorMsg:"",
      nombreCasa: "",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 caracteres'],
    }
  },

  computed: {
    ...mapState("House", {
      house: (state) => state.house,
    }),
    canCreate() {
      return !this.house;
    },
    canOperate() {
      return this.house;
    },
    canAbort() {
      return this.controller;
    },

  },

  methods: {
    ...mapActions("House", {
      $createHouse: "createHome",

    }),
    async createHouse(name) {
      let houseMeta= new HomeMeta(4);
      let house = new Home(null, name, houseMeta);
      try {
        await this.$createHouse(house);
        this.houseAdd = false
        this.nombreCasa = ""
        this.snackbar= !this.snackbar
      } catch (e) {
        if(e.code===99){
          this.$router.push('NotFound/')
        }
        if(e.code===2){
          this.errorMsg="El nombre seleccionado ya ha sido utilizado en otra casa. Por favor elija otro nombre."
          this.nameError=true}
        if(e.code===1){
          this.errorMsg="El nombre puede tener letras, números o espacios solamente. Por favor elija otro nombre."
          this.nameError=true
        }
      }
      this.$parent.selectHome(this.house);


    },

    resetText(){
      this.nombreCasa = ""
    }

  }
}

</script>

<style scoped>

  .icon-div {
    display: flex;
    align-content: center;
    flex-direction: column;
  }

  .margin-button {
    margin-top: 20px;
  }

  .close-button {
    position: absolute;
    right: 2%;
    top: 7%;
  }

  .hover-btn:hover {
    opacity: 75%;
  }

</style>