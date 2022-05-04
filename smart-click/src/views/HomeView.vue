<template>

  <div class="homeView">
    <v-btn width="200px" color="primary" elevation="3" fab rounded x-large>Agregar Casa</v-btn> <br>
    <br> <br>
    <v-btn width="250px" color="primary" elevation="3" fab rounded x-large>Eliminar Casa</v-btn> <br>
    <br> <br>
    <v-btn width="300" color="primary" elevation="3" fab rounded x-large>Agregar Dispositivo</v-btn> <br>
    <br> <br> <br>
    <v-btn width="350" color="primary" elevation="3" fab rounded x-large>Eliminar dispositivo</v-btn> <br>
<!--     <br> <br> <br> -->
  </div>
</template>

<script>
  export default {
    name: "HomeView"
  }
</script>

<style scoped>
  .homeView  {
  background-color: #2196f3;
  min-height: 700px;
  font-family: "helvetica neue";
  background: url(../assets/fondo3.png), #2196f3;
  background: url(../assets/fondo3.png),
    -webkit-gradient(linear, right top, left top, from(#2196f3), to(#009688));
  background: url(//.assets/fondo3.png),
    linear-gradient(to left, #2196f3, #009688);
  }


</style>

