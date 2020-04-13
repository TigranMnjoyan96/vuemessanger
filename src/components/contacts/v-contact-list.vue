<template>
    <div class="container">
        <div class="row">
            <v-contact-user />
        </div>
    </div>
</template>

<script>
    import vContactUser from './v-contact-user'
    export default {
        name: "v-contact-list",
        components: {
            vContactUser
        }
    }
</script>

<style scoped>

</style>
