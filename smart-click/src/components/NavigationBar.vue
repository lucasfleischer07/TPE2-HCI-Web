<template>
  <div class="nav-bar">
    <nav>
      <router-link :to="{name: 'Devices'}">
        <v-btn x-large  class="nav-icons" >
          <v-icon>devices</v-icon>
          <span>Dispositivos</span>
        </v-btn>
      </router-link>

       <router-link :to="{name: 'Routines'}">
          <v-btn x-large  class="nav-icons" >
              <v-icon>calendar_month</v-icon>
              <span>Rutinas</span>
          </v-btn>
      </router-link>

      <router-link :to="{name: 'Account'}">
          <v-btn x-large  class="nav-icons">
              <v-icon>account_circle</v-icon>
              <span>Cuenta</span>
          </v-btn>
      </router-link>

      <router-link :to="{name: 'Settings'}">
          <v-btn x-large  class="nav-icons">
              <v-icon>settings</v-icon>
              <span>Configuracion</span>
          </v-btn>
      </router-link>
    </nav>
  </div>
</template>




<script>
  import store from "@/store/store"
  export default {
    name: "NavigationBar",

    data() {
      return {
        views: store.views.slice(1,5),
      }
    }
  }
</script>





<style scoped>

  .nav-bar {
    display: block;
    background-color: dodgerblue;
    width: 100%;
    padding: 30px;
    margin-bottom: 30px;
  }

  .nav-icons {
    display: inline-block;
    width:auto;
    /*justify-content: space-evenly;*/
    margin-inline:80px;

  }

</style>