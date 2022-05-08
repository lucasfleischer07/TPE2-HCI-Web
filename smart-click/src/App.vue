<template>
  <v-app>
    <div id="app">
      <HeaderBar></HeaderBar>
      <NavigationBar></NavigationBar>
      <router-view/>
      <FooterBar></FooterBar>
    </div>
  </v-app>
</template>


<script>
  import HeaderBar from "@/components/HeaderBar";
  import NavigationBar from "@/components/NavigationBar";
  import FooterBar from "@/components/FooterBar";


  export default {
    components: {
      HeaderBar,
      NavigationBar,
      FooterBar
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
