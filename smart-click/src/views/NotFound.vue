<template>
  <div class="main-page">
    <h1 style="padding-bottom: 20px">Página no encontrada</h1>
    <p >Oops no pudimos encontrar su página. Por favor trate ingresando a <router-link :to="{name: 'Home'}">página principal</router-link>. Si
    vuelve a fallar puede que el servidor este en mantenimiento.</p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
  .main-page {
    min-height: 580px;
    padding-top: 20px;
    background-image: url("@/assets/fondo1.jpg");
    background-repeat: repeat round;
  }
</style>