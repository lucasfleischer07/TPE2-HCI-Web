<template>
  <div class="main-page">
    <h1>Not Found</h1>
    <p>Oooops no pudimos encontrar su página. Por favor trate yendo a <router-link :to="{name: 'Home'}">Página principal</router-link></p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
  .main-page {
    min-height: 530px;
    color: gray;
  }
</style>