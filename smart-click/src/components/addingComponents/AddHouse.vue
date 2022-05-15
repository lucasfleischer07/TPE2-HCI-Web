<template>
  <div>
    <v-btn class="font-weight-bold hover-btn" height="100px" width="300px" color="success" elevation="3" x-large
           @click.stop="houseAdd = true" rounded>
      <div class="icon-div">
        Agregar Casa
        <v-icon large>house</v-icon>
      </div>
    </v-btn>
    <v-dialog v-model="houseAdd" max-width="600px" height="600px">
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
    </v-dialog>


  </div>
</template>

<script>
import store from "@/store/store";
import { mapState, mapActions } from "vuex";
import { Home,HomeMeta } from "../../Api/House";

export default {
  name: "AddHouse",
  data() {
    return {

      houses: store.houses,
      houseAdd: false,
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
      const houseMeta= new HomeMeta();
      const house = new Home(null, name, houseMeta);

      try {
        this.house = await this.$createHouse(house);
        this.house = Object.assign(new Home(), this.house);
        this.houseAdd = false
        this.nombreCasa = ""
      } catch (e) {
        console.log(e)
      }

    },


  /*addHouse(text) {
      if (text === "")
        console.log("Mal nombre de casa")
      else {
        //AGREGAR CASA
        this.houseAdd = false
        this.nombreCasa = ""
      }
    },*/
  }
}

</script>

<style scoped>

/*  .buttons {*/
/*    display: flex;*/
/*    justify-content: space-evenly;*/
/*    padding-bottom: 50px;*/
/*    font-size: 40px;*/
/*  }*/
  .v-btn:focus::before {
    opacity: 0 !important;
  }

  .icon-div {
    display: flex;
    align-content: center;
    flex-direction: column;
  }

  .margin-button {
    margin-top: 20px;
  }

  .hover-btn:hover {
    opacity: 75%;
  }

</style>