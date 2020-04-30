<template>
    <div class="v__contact__user__info">
        <div class="info__avatar"></div>
        <div class="info__content">
            <div class="info__name">
                <span>{{contactPhone.phone}}</span>
            </div>
            <div class="info__tools">
                <button class="btn btn-success p-2 m-1">Call</button>
                <button class="btn btn-primary p-2" @click="checkChats">Start Chat</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "v-contact-user-info",
        computed: {
            ...mapState(['contacts', 'chats'])
        },
        data() {
            return {
                contactPhone: {}
            }
        },
        methods: {
            ...mapActions(['FETCH_CHATS']),
            checkChats() {
                if(!this.chats.length) {
                    this.FETCH_CHATS()
                    .then(() => {
                        this.toChat()
                    })
                } else {
                    this.toChat()
                }
            },
            toChat() {
                this.chats.map(chat => {
                    if(chat.id === this.$route.query.id) {
                        this.$router.push({
                            name: 'chat',
                            params: {'messages': chat.chat, 'user': chat},
                            query: {'id': this.contactPhone}
                        })
                    }
                })
            }
        },
        mounted() {
            this.contacts.find(e => {
             if(e.id === this.$route.query.id) {
                 this.contactPhone = e
             }
            })
        }
    }
</script>

<style lang="less" scoped>

    .v__contact__user__info {
        height: 400px;
        .info__avatar {
            width: 90%;
            height: 250px;
            margin: 30px auto !important;
            padding-top: 30px;
            background: lightgrey;
        }
        .info__content {
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: 0 auto !important;
        }
    }
</style>