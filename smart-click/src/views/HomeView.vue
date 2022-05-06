<template>

  <div class="home-view">
    <div class="buttons">
      <v-btn class="font-weight-bold" height="100px" width="300px" color="success" elevation="3" x-large>
        <div class="icon-div">
          Agregar Casa
          <v-icon large>house</v-icon>
        </div>
      </v-btn>
      <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large>
        <div class="icon-div">
          Eliminar Casa
          <v-icon large>delete_forever</v-icon>
        </div>
      </v-btn>
    </div>

    <div class="buttons">
      <v-btn class="font-weight-bold align-self" height="100px" width="300px" color="success" elevation="3" x-large>
        <div class="icon-div">
          Agregar Dispositivo
          <v-icon large>devices
          </v-icon>
        </div>
      </v-btn>
      <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large>
        <div class="icon-div">
          Eliminar dispositivo
          <v-icon large>tv_off</v-icon>
        </div>
      </v-btn>
    </div>

    <div class="buttons">
      <v-btn class="font-weight-bold" height="100px" width="300px" color="success" elevation="3" x-large>
        <div class="icon-div">
          Agregar Rutina
          <v-icon large>edit_calendar</v-icon>
        </div>
      </v-btn>
      <v-btn class="font-weight-bold" height="100px" width="300px" color="error" elevation="3" x-large>
        <div class="icon-div">
          Eliminar Rutina
          <v-icon large>event_busy</v-icon>
        </div>
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeView"
  }
</script>

<style scoped>
  .home-view  {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    min-height: 500px;
  }

 .buttons {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 50px;
    font-size: 40px;

  }

 .icon-div {
   display: flex;
   align-content: center;
   flex-direction: column;
 }

</style>

