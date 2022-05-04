<template>
  <div class="nav-bar">
    <nav>

<!--      TODO: intento fallido de hacerlo dinamico-->
<!--      <div v-for="v in views" :key="v.id" class="nav-bar">-->
<!--      <router-link :to="{name: {path: v.name + 'View'}, params: {id: v.id}}">-->
<!--          <v-btn x-large color="primary" class="nav-icons">-->
<!--              <v-icon>{{ v.icon }}</v-icon>-->
<!--              <span>{{ v.name }}</span>-->
<!--          </v-btn>-->
<!--      </router-link>-->
<!--      </div>-->


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
    margin: 20px;
  }

  .nav-icons {
    display: inline-block;
    width:auto;
    margin-inline:20px;


    /*margin-right: auto;*/
  }

</style>