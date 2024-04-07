import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import FriendsView from '../views/FriendsView.vue'
import GroupsView from '../views/GroupsView.vue'
import LostView from '../views/LostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/',
      name: 'profile',
      component: ProfileView
    },{
      path: '/expenses',
      name: 'expenses',
      component: ExpensesView
    }, {
      path: '/friends',
      name: 'friends',
      component: FriendsView
    }, {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    }, 
    { 
      path: '/:pathMatch(.*)',
      component: LostView
    }
  ]
})

export default router
