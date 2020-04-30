<template>
    <div class="v__user__list">
        <v-user
                v-for="item in chats"
                :key="item.id"
                :user="item"
        />
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    import vUser from './v-user'
    export default {
        name: "v-users-list",
        components: {
            vUser
        },
        computed: {
          ...mapState(['chats'])
        },
        methods: {
            ...mapActions(['FETCH_CHATS', 'GET_USER_ID'])
        },
        mounted() {
            this.FETCH_CHATS()
            this.GET_USER_ID()
        }
    }
</script>

<style lang="less" scoped>
    .v__user__list {
        height: 400px;
    }
</style>