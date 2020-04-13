<template>
  <div id="app">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>


<script>
  import vMainWrapper from './components/v-main-wrapper'
  export default {
    components: {
      vMainWrapper
    }
  }
</script>
<style lang="less">
  @import "~bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
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
