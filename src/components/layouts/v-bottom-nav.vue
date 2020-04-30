<template>
    <div class="v__bottom__nav p-3">
        <div class="v__bottom__content">
            <router-link :to="{name: 'contacts'}">
                <i class="material-icons">person_pin</i>
            </router-link>
            <router-link :to="{name: 'chats'}">
                <i class="material-icons">chat</i>
            </router-link>
            <router-link :to="{name: 'contacts'}">
                <i class="material-icons">settings</i>
            </router-link>
            <router-link :to="{name: 'contacts'}">
                <i class="material-icons">call</i>
            </router-link>
            <router-link :to="{name: 'contacts'}">
                <i class="material-icons">home</i>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom-nav"
    }
</script>

<style lang="less" scoped>
    .v__bottom__nav {
        background: lightgrey;
        width: 100%;
        .v__bottom__content {
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
    }
</style>