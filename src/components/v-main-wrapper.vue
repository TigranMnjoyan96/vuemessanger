<template>
  <div class="container">
    <div class="col-md-6 m-auto card__item">
      <div class="card__header">
        <v-header />
        <router-view />
        <v-footer />
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from './layouts/header/v-header'
  import vFooter from './layouts/footer/v-footer'
export default {
  name: "HelloWorld",
  components: {
    vHeader,
    vFooter
  },
  computed: {
    fetchData() {
      return this.$store.commit('SET_USERS')
    }
  },
  mounted() {
    this.$store.dispatch('FETCH_DATA')
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .card__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
    marigin: 0 !important;
    padding: 0 !important
  }
  .card__item {
    margin-top: 5rem !important;
    border: 2px solid black;
  }
</style>
