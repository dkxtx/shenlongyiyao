import Vue from 'vue'
import Router from 'vue-router'

import person from '@/views/person'
import bind from '@/views/bind'
import verify from '@/views/verify'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'person',
    component: person
  },
  {
    path: '/person',
    name: 'person',
    component: person
  },
  {
    path: '/bind',
    name: 'bind',
    component: bind
  },
  {
    path: '/verify',
    name: 'verify',
    component: verify
  },
  ]
})
