<template>
  <v-footer padless outlined>
    <v-col class="nav-class" cols="12">
      ® {{ new Date().getFullYear() }} - <strong>SmartClick</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
}
</script>

<style scoped>
    .nav-class {
      background-color: dodgerblue;
      text-align: center;
    }
</style>