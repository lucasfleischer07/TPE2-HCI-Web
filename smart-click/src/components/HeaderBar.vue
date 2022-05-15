<template>
  <header>
    <div class="main-div">
      <div class="div-header" >
        <router-link class="logo_img" :to="{name: 'Home'} ">
          <img  :src=logo_image style="width: 100%" alt="SmartClick_Logo">
        </router-link>
      </div>


      <div class="help-div">
        <div class="selector-houses">
          <template>
            <v-container fluid c>
              <v-row aligned="center">
                <v-col class="d-flex" cols="12" sm="20">
                  <v-subheader>
                    <v-icon x-large>home</v-icon>
                  </v-subheader>
                  <v-select
                      :items="update"
                      label="Casa seleccionada:"
                      item-text="name"
                      outlined 
                      class="house-selector-slider"
                      dense
                      @change="selectHome"
                      return-object
                      persistent-placeholder
                      height="50px"
                      placeholder="Seleccione una casa">
                  <template #append-item>
                      <div class="append color-back">
                        <v-btn color="primary"  @click.stop="houseAdd = true">
                          Agregar casa
                        </v-btn>
                        <v-dialog v-model="houseAdd" max-width="600px" height="600px" color="#f2f9fb">
                          <v-card @keyup.enter="createHouse()" color="#f2f9fb">
                              <v-card-title color="#f2f9fb">
                                <h2>Agregue una nueva casa</h2>
                              </v-card-title>
                              <v-card-text color="#f2f9fb">
                                <v-text-field
                                  label="Nombre de la nueva casa"
                                  :rules="rules"
                                  hide-details="auto"
                                  v-model="nombreCasa"
                                />
                                <v-btn :disabled="nombreCasa.length < 3 || nombreCasa.length > 60" class="margin-top" color="primary" @click="createHouse()">
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

      myHouse: this.getAllHouses(),
      houseAdd: false,
      nombreCasa: "",
      rules: [v => v.length <= 60 || 'Máximo 60 caracteres', v => v.length >= 3 || 'Mínimo 3 caracteres'],
    }
  },

  computed: {
    ...mapState("House", {
          $house: "homes",
    }),
    update(){
        return this.$house
    },
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
      $changeCurrentHome: "changeCurrentHome"

    }),
    async createHouse() {
      let house = new Home(null,this.nombreCasa , {});

      try {
        await this.$createHouse(house);
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
    async selectHome(home){
      await this.$changeCurrentHome(home)
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
    width: 40%;
  }

  .help-div {
    display: flex;
    margin-top: 10px;
    margin-right: 10px;

  }

  .logo_img {
    width:100%;
    height:auto;
    max-width: 400px;
    min-width: 150px;

  }

  .help-buttons {
    display: block;

    margin-top: 6px;
  }

  .house-selector-slider {
    display: flex;
    text-align: left;
  }

  .selector-houses {
    margin-right: 100px;
  }

  .append {
    position: sticky;
    bottom: 0;
    font-weight: bold;
  }

  .margin-top {
    margin-top: 20px;
  }


</style>