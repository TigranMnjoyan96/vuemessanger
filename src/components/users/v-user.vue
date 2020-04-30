<template>
    <div class="v__user" @click="toUserChat">
        <div class="v__user__avatar"></div>
        <div class="v__user__name">
            <b>{{user.name}}</b>
            <p class="word__spacing">{{user.chat[user.chat.length-1].text}}</p>
        </div>
        <div class="v__user__time">
            {{user.chat[user.chat.length-1].time}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-user",
        props: {
            user: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            toUserChat() {
                this.$router.push({
                    name: 'chat',
                    params: {'messages': this.user.chat, 'user': this.user}
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .v__user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px !important;
        width: 90%;
        margin: 0 auto !important;
        .v__user__avatar {
            background: lightgrey;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .v__user__name {
        flex: 1;
            margin-left: 10px !important;
        }
        .word__spacing {
            white-space: nowrap;
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>