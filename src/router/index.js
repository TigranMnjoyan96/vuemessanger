import Vue from "vue";
import VueRouter from "vue-router";
import vContactList from '../components/contacts/v-conact-list'
import vContactUserInfo from '../components/contacts/v-contact-user-info'
import vUserList from '../components/users/v-users-list'
import vUserChat from '../components/users/chat/v-user-chat'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: vContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: vContactUserInfo
  },
  {
    path: '/chats',
    name: 'chats',
    component: vUserList

  },
  {
    path: '/chat',
    name: 'chat',
    component: vUserChat,
    props: true

  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
