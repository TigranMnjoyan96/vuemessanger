<template>
    <div class="conatiner">
        <div class="row">
            <div class="container">
                <div class="v__footer">
                    <router-link :to="{name: 'contacts'}"><i class="material-icons"> perons_pin</i></router-link>
                    <router-link :to="{name: 'home'}"><i class="material-icons"> perons_pin</i></router-link>
                    <router-link :to="{name: 'about'}"><i class="material-icons"> perons_pin</i></router-link>
                    <router-link :to="{name: 'users'}"><i class="material-icons"> perons_pin</i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-footer"
    }
</script>

<style scoped>
    .v__footer {
        background: grey;
    }
</style>
