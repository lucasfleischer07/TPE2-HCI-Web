<template>
  <div class="nav-bar">
    <nav>
      <router-link to="/devices">
          <v-btn x-large color="primary" class="nav-icons">
              <v-icon>devices</v-icon>
              <span>Dispositivos</span>
          </v-btn>
      </router-link>

         <router-link to="/rutinas">
          <v-btn x-large color="primary" class="nav-icons">
              <v-icon>calendar_month</v-icon>
              <span>Rutinas</span>
          </v-btn>
      </router-link>
      <router-link to="/cuenta">
          <v-btn x-large color="primary" class="nav-icons">
              <v-icon>account_circle</v-icon>
              <span>Cuenta</span>
          </v-btn>
      </router-link>

      <router-link to="/configuracion">
          <v-btn x-large color="primary" class="nav-icons">
              <v-icon>settings</v-icon>
              <span>Configuracion</span>
          </v-btn>

      </router-link>

    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

  .nav-bar {
    display: flex;
    background-color: grey;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .nav-icons {
    display: inline-block;
    margin-right: 220px;
    /*margin-right: auto;*/
  }

</style>