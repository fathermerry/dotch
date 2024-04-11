import { createRouter, createWebHistory } from 'vue-router'
import GuestView from '../views/GuestView.vue'
import ProfileView from '../views/ProfileView.vue'
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import GroupsView from '../views/GroupsView.vue'
import WalletView from '../views/WalletView.vue'
import NewExpenseView from '../views/NewExpenseView.vue'
import LostView from '../views/LostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guest',
      component: GuestView
    },{
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },{
      path: '/home',
      name: 'home',
      component: HomeView
    }, {
      path: '/friends',
      name: 'friends',
      component: FriendsView
    }, {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    }, {
      path: '/wallet',
      name: 'wallet',
      component: WalletView
    }, {
      path: '/new-expense',
      name: 'new-expense',
      component: NewExpenseView
    }, 
    { 
      path: '/:pathMatch(.*)',
      component: LostView
    }
  ]
})

export default router
