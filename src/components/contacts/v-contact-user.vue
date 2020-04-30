<template>
    <div class="containerr pt-3">
        <div class="v__contact__user" @click="toContactInfo">
            <div class="v__user__info">
                <div class="v__user__avatar__name">
                    <div class="v__user__avatar"></div>
                    <div class="v__user__name">
                        <span class="contact__name">{{contact.name}}</span>
                    </div>
                </div>
                <div :class="{'v__user__online': contact.status === 'online', 'v__user__offline': contact.status === 'offline'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-contact-user",
        props: {
            contact: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            toContactInfo() {
                this.$emit('toContactInfo')
            }
        }
    }
</script>

<style lang="less" scoped>
    .containerr {
        width: 90%;
        margin: 0 auto !important;
        .v__user__avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: lightgrey;
        }
        .contact__name {
            cursor: pointer;
        }
        .v__user__avatar__name {
            display: flex;
            width: 35%;
            align-items: center;
        }
        .v__user__name {
            padding-left: 10px !important;
        }
        .v__user__online {
            width: 10px;
            height: 10px;
            background: green;
            border-radius: 50%;
        }
        .v__user__offline {
            width: 10px;
            height: 10px;
            background: red;
            border-radius: 50%;
        }
        .v__user__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>