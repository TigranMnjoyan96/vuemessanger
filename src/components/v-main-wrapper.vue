<template>
    <div class="row">
      <div class="main__wrapper">
        <v-head></v-head>
        <router-view></router-view>
        <v-bott-nav></v-bott-nav>
    </div>


  </div>
</template>

<script>
  import vHead from './layouts/v-header';
  import vBottNav from './layouts/v-bottom-nav';
export default {
  name: "HelloWorld",
  components: {
    vHead,
    vBottNav
  },
};

</script>

<style scoped lang="less">
  .main__wrapper {
    border: 1px solid black;
    width: 25%;
    margin: 0 auto !important;
  }
</style>
