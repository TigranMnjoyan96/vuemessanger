<template>
    <div class="v__messages">
        <div :class="className">
            <p>{{message.text}}</p>
            <p>{{message.time}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-message",
        props: {
            message: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            className() {
                return {
                    'chat__own': this.message.type === 'own',
                    'chat__others': this.message.type === 'others'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .chat__own {
        text-align: right;
        background: lightblue;
        word-wrap: break-word;
        width: 70%;
        margin-left: auto !important;
        margin-bottom: 5px !important;
        margin-top: 5px !important;
        padding: 10px !important;
        border-radius: 5px;
    }
    .chat__others {
        background: lightgrey;
        word-wrap: break-word;
        text-align: left;
        width: 70%;
        margin: 10px 0 !important;
        padding: 10px !important;
        border-radius: 5px;
    }
</style>