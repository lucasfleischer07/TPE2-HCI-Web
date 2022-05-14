<template>
  <header>
    <div class="main-div">
      <div class="div-header">
        <router-link :to="{name: 'Home'}">
          <img class="logo_img" :src=logo_image alt="SmartClick_Logo">
        </router-link>
      </div>


      <div class="help-div">
        <div>
          <template>
            <v-container fluid c>
              <v-row aligned="center">
                <v-col class="d-flex" cols="12" sm="20">
                  <v-subheader>
                    <v-icon x-large>home</v-icon>
                  </v-subheader>
                  <v-select
                      :items="updateHouse"
                      label="Casa seleccionada:"
                      outlined class="house-selector-slider"
                      dense
                      @change="houseChange"
                      persistent-placeholder
                      height="50px"
                      placeholder="Seleccione una casa">
                  <template #append-item>
                      <div class="append color-back">
                        <v-btn color="primary"  @click.stop="houseAdd = true">
                          Agregar casa
                        </v-btn>
                        <v-dialog v-model="houseAdd" max-width="600px" height="600px" color="#f2f9fb">
                          <v-card @keyup.enter="addHouse(nombreCasa)" color="#f2f9fb">
                              <v-card-title color="#f2f9fb">
                                <h2>Agregue una nueva casa</h2>
                              </v-card-title>
                              <v-card-text color="#f2f9fb">
                                <v-text-field
                                  label="Nombre de la nueva casa"
                                  :rules="rules"
                                  hide-details="auto"
                                  v-model="nombreCasa"
                                  color="#f2f9fb"
                                />
                                <v-btn color="primary" @click="addHouse(nombreCasa)">
                                  Agregar Casa
                                </v-btn>
                              </v-card-text>
                          </v-card>
                        </v-dialog>
                      </div>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </div>

        <div class="help-buttons">
          <router-link :to="{name: 'Help'}">
            <v-btn class="ma-1" x-large color="primary"><v-icon large>help</v-icon></v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>



<script>

import {mapActions, mapState} from "vuex";
import {Home} from "@/Api/House";

export default {
  name: "HeaderBar",

  data() {
    return {
      logo_image: require('@/assets/logo.png'),


      houseAdd: false,
      nombreCasa: "",
      rules:[v => v.length >= 3 || 'Min 3 characters'],}
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
    updateHouse(){
      this.$getAllHouses(this.controller)
      return this.house}

  },

  methods: {
    ...mapActions("House", {
      $createHouse: "createHome",
      $getAllHouses: "getAllHomes",

    }),
    async createHouse(name) {
      const house = new Home(null, name, {});

      try {
        this.house = await this.$createHouse(house);
        this.house = Object.assign(new Home(), this.house);
        this.houseAdd= false;
        this.nombreCasa=""

      } catch (e) {
        console.log(e)
      }
    },
    async getAllHouses() {
      try {
        this.controller = new AbortController();
        await this.$getAllHouses(this.controller);
        this.controller = null;
      } catch (e) {
        this.setResult(e);
      }
    },

    houseChange(selected)
    {
      this.house.nombreCasa= selected.nombreCasa;
      this.house.codigoCasa= selected.codigoCasa;
      this.house.cuartos=selected.cuartos;
      this.house.routines=selected.routines;
    },
    addHouse(text)
    {
      if (text==="")
        console.log("Mal nombre de casa")
      else {
        //AGREGAR CASA
        this.houseAdd= false
      }
    }
  }
}
</script>



<style scoped>

  .main-div {
    display: flex;
    justify-content: space-between;
    background-color: #f2f9fb;
  }

 .div-header {
    text-align: left;
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
  }

  .help-div {
    display: flex;
    margin-top: 10px;
    margin-right: 10px;

  }

  .logo_img {
    height: 100px;
    width: 350px;
  }

  .help-buttons {
    display: block;
    margin-left: 100px;
    margin-top: 6px;
  }

  .house-selector-slider {
    display: flex;
    text-align: left;
  }

  .append {
    position: sticky;
    bottom: 0;
    font-weight: bold;
  }


</style>