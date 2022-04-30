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

  </div>

</template>



<script>
export default {
  name: "HeaderBar",

  data() {
    return {
      logo_image: require('@/assets/logo.png'),
      searcher: '',
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

</style>