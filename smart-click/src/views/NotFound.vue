<template>
  <div>
    <h1>Not Found</h1>
    <p>Oooops we couldn't finde that page. Try going to <router-link :to="{name: 'Home'}">home</router-link></p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>