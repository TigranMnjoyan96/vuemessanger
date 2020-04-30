<template>
    <div class="v__user__chat">
        <div class="all__messages">
            <v-message
                    v-for="item in messages"
                    :key="item.id"
                    :message="item"
            />
            <div class="input__field">
                <input
                        type="text"
                        class="v__user__chat__textfield"
                        v-model="textValue"
                        @keypress.enter="sendMessage"
                >
                <i class="material-icons" @click="sendMessage">send</i>
            </div>
        </div>
    </div>
</template>

<script>
    import VMessage from "./v-message";
    import {mapActions} from 'vuex'

    export default {
        name: "v-user-chat",
        components: {VMessage},
        component() {
            vMessage
            },
        // props: {
        //     messages: {
        //         type: Array,
        //         default: () => []
        //     },
        //     user: {
        //         type: Array,
        //         default: () => []
        //     }
        // },
        props: ['messages', 'user'],
        data() {
            return {
                textValue: ''
            }
        },
        methods: {
            ...mapActions(['SET_MESSAGES_TO_CHAT', 'FETCH_CHATS']),
            sendMessage(){
                let user = {...this.user}
                let chat = {
                    id: this.messages.length + 1,
                    time: new Date().toLocaleTimeString('en-Us', {
                        hour12: false,
                        hour: 'numeric',
                        minute: 'numeric'
                    }),
                    text: this.textValue,
                    type: 'own'
                }
                user.chat.push(chat)
                this.SET_MESSAGES_TO_CHAT({userId: user.id, chat: user})
                .then(() => {
                    this.FETCH_CHATS()
                    this.textValue = ''
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .v__user__chat {
        height: 400px;
        display: flex;
        .input__field {
            width: 90%;
            margin: 10px auto !important;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                border-radius: 10px;
                border: 1px solid black;
                padding: 5px !important;
                &:active, &:focus {
                    outline: none;
                }
            }
            i {
                margin-left: 5px !important;
            }
        }
  .all__messages {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 90%;
            margin: 0 auto !important;
        }
    }
</style>