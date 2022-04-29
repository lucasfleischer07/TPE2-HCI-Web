<template>
  <div class="div-header">
    <router-link to="/">
      <img class="logo_img" :src=logo_image alt="SmartClick_Logo">
    </router-link>
    <div class="search-bar">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                  v-model="searcher"
                  label="Buscar"
                  outlined
                  clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>



<script>
export default {
  name: "HeaderBar",

  data() {
    return {
      logo_image: require('@/assets/logo.jpeg'),
      searcher: '',
    }
  }
}
</script>



<style scoped>

  .div-header {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .div-header .logo_img {
    height: 100px;
    width: 350px;
  }

  .search-bar {
    width: 900px;
    padding-top: 20px;
  }

</style>