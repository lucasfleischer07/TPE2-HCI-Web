<template>
  <div class="div-header">
    <router-link :to="{name: 'Home'}">
      <img class="logo_img" :src=logo_image alt="SmartClick_Logo">
    </router-link>
    <div class="search-bar">
      <v-form class="form">
            <v-col cols="0" sm="0">
              <v-text-field
                  v-model="searcher"
                  label="Buscar"
                  outlined
                  clearable
              ></v-text-field>
            </v-col>
      </v-form>
      <v-btn><v-icon>search</v-icon></v-btn>
    </div>
<!--    Div vacio para que me quede mas a la derecha la barra de buscador-->
    <div></div>
    <div class="dark-help-buttons">
      <router-link :to="{name: 'Help'}">
        <v-btn large color="primary"><v-icon>help</v-icon></v-btn>
      </router-link>
      <v-btn large color="primary" @click="$vuetify.theme.dark = !$vuetify.theme.dark"><v-icon>dark_mode</v-icon></v-btn>
    </div>
    <div >
      <template >
        <v-container fluid c>
          <v-row aligned="center">
            <v-col
                class="d-flex"
                cols="12"
                sm="10"
            >
              <v-subheader>
                <v-icon>home</v-icon>
              </v-subheader>
              <v-select
                  :items="houses"
                  label="House selected:"
                  outlined class="house-selector-slider"
                  dense
                  @change="houseChange"
                  persistent-placeholder="false"
                  placeholder="select house"
              >
              <template #append-item>

                  <div class="append">
                    <v-btn color="primary" @click="addHouse">
                      Add House
                    </v-btn>
                  </div>
                </template>
              </v-select>
            </v-col>


          </v-row>
        </v-container>
      </template>

    </div>

  </div>

</template>



<script>
import store from "@/store/store.js"

export default {
  name: "HeaderBar",

  data() {
    return {
      logo_image: require('@/assets/logo.png'),
      houses: store.houses,
      house: store.house,
    }
  },
  methods: {
    houseChange(selected)
    {
      this.house.nombreCasa= selected.nombreCasa;
      this.house.codigoCasa= selected.codigoCasa;
      this.house.cuartos=selected.cuartos;
    },
    addHouse()
    {
      //Aca deberiamos ver como agregar una casa, puede ser un pop-up
    }
  }
}
</script>



<style scoped>

  .div-header {
    text-align: left;
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
  }

  .div-header .logo_img {
    height: 100px;
    width: 350px;
  }

  .search-bar {
    width: auto;
    padding: 10px;
    display: flex;

  }

  .form {
    width: 500px;
  }

  .dark-help-buttons {
    display: block;
    padding: 3px;
    margin: 3px;
  }

  .house-selector-slider {
    display: flex;
    text-align: left;
  }

  .append {
    position: sticky;
    bottom: 0;
    background: white;
  }

</style>