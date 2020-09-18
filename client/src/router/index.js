import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Lobby from '../views/Lobby.vue'
import Scoreboard from '../views/Scoreboard.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: Scoreboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
