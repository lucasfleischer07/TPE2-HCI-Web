<template>
  <div id="app">
    <header>
      <HeaderBar></HeaderBar>
    </header>
    <nav>
      <NavigationBar></NavigationBar>
    </nav>
    <router-view/>
  </div>
</template>


<script>
  import HeaderBar from "@/views/HeaderBar";
  import NavigationBar from "@/views/NavigationBar";

  export default {
    components: {
      HeaderBar,
      NavigationBar
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
