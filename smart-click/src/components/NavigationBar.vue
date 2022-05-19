<template>
  <div class="nav-bar">
    <nav class="nav-buttons">
      <router-link class="text-decoration-none" :to="{name: 'Devices'}">
        <v-btn x-large  class="nav-icons" >
          <v-icon>devices</v-icon>
          <span>Dispositivos</span>
        </v-btn>
      </router-link>

       <router-link class="text-decoration-none" :to="{name: 'Routines'}">
          <v-btn x-large  class="nav-icons" >
              <v-icon>calendar_month</v-icon>
              <span>Rutinas</span>
          </v-btn>
      </router-link>

      <router-link class="text-decoration-none" :to="{name: 'Settings'}">
          <v-btn x-large  class="nav-icons">
              <v-icon>settings</v-icon>
              <span>Configuración</span>
          </v-btn>
      </router-link>
    </nav>
  </div>
</template>




<script>
  export default {
    name: "NavigationBar",
  }
</script>





<style scoped>

  .nav-bar {
    display: block;
    background-color: dodgerblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .nav-icons {
    display: flex;
  }

  .nav-buttons{
    display: flex;
    justify-content: space-evenly;
  }



</style>