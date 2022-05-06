<template>
  <div>
<!--    TODO: Falta programar los botones-->
    <v-footer class="nav-class" padless>
      <v-row class="nav-class" justify="center" no-gutters>
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="nav-class">
          {{ link }}
        </v-btn>
        <v-col
            class="nav-class py-4 text-center white--text font-weight-bold" cols="12">
          {{ new Date().getFullYear() }} — <strong>SmartClick</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog']}
  }
}
</script>

<style scoped>
    .nav-class {
        background-color: dodgerblue;
    }
 
</style>