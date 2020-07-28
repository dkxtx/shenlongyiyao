import Vue from 'vue'
import Router from 'vue-router'

import person from '@/views/person'

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
  ]
})
