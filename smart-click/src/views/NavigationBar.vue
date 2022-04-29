<template>
  <div class="navigation-bar">
    <nav>
<!--      TODO: falta ver el to de cada uno de estos.-->
      <router-link to="/">Dispositivos</router-link>
      <router-link to="/about">Rutinas</router-link>
      <router-link to="/about">Cuenta</router-link>
      <router-link to="/about">Configuracion</router-link>


    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>