<template>
    <div class="v__header">
        <div class="v__header__back d-flex p-3" @click="goBack" v-if="!isChat">
            <span class="d-flex goback">
                <i class="material-icons">keyboard_arrow_left</i>
                <p class="backroute">back</p>
            </span>
        </div>
        <div class="user__info" v-if="!isChat">
            <span>{{currentUser.name}}</span>
        </div>
        <div class="v__chat" v-if="isChat"><h2 style="text-align: center">Chat</h2></div>
        <div class="right__side" v-if="!isChat">

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'head-section',
        computed: {
            ...mapState(['currentUser']),
            isChat() {
                return this.$route.path === '/'
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .v__header {
        background: lightgrey;
        display: flex;
        align-items: center;
        height: 80px;
         div{
            flex: 1;
        }
        .right__side {
            flex: .25;
        }
        .goback {
            cursor: pointer;
        }
        .v__chat {
            width: 120%;
            text-align: center;
        }
    }
</style>