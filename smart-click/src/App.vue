<template>
  <v-app>
    <div id="app">
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <nav>
        <NavigationBar></NavigationBar>
      </nav>
      <router-view/>
      <footer>
        <FooterBar></FooterBar>
      </footer>
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
  //Ver que color de fondo quiere la gente
  //background-color: ;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
