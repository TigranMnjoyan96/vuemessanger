<template>
    <div class="v__contact__list">
        <v-contact-user
            v-for="item in contacts"
            :key="item.id"
            :contact="item"
            @toContactInfo="toContactInfo(item)"
        />
    </div>
</template>

<script>
    import vContactUser from './v-contact-user'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "v-conact-list",
        components: {
            vContactUser
        },
        computed: {
            ...mapState([
                'contacts'
            ])
        },
        methods: {
            ...mapActions([
                'FETCH_CONTACTS',
                'GET_USER_ID'
            ]),
            toContactInfo(contact) {
                this.$router.push({
                    name: 'contact',
                    query: {'id': contact.id}
                }),
             this.GET_USER_ID(contact)
            }
        },
        mounted() {
            this.FETCH_CONTACTS()
        }
    }


</script>

<style lang="less" scoped>
    .v__contact__list {
        height: 400px;
    }
</style>