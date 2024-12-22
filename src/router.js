import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory('/my-website/'),
  routes,
})

router.beforeEach((to, from, next) => {
  const redirectPath = to.query.redirect
  if (redirectPath) {
    next(redirectPath)
  } else {
    next()
  }
})

export default router
