// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap'
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import LayoutHome from '@/components/layout/LayoutHome'
import LayoutDefault from '@/components/layout/LayoutDefault'
import LayoutBlank from '@/components/layout/LayoutBlank'
import Navbar from '@/components/layout/partials/Navbar'
import SiteFooter from '@/components/layout/partials/SiteFooter'
import Teaser from '@/components/Teaser'
import Hero from '@/components/Hero'
import CallToActionsDeck from '@/components/CallToActionsDeck'
import CallToActionItem from '@/components/CallToActionItem'

Vue.config.productionTip = false

Vue.use(StoryblokVue)

Vue.component('layout-home', LayoutHome)
Vue.component('layout-default', LayoutDefault)
Vue.component('layout-blank', LayoutBlank)
Vue.component('navbar', Navbar)
Vue.component('site-footer', SiteFooter)
Vue.component('teaser', Teaser)
Vue.component('hero', Hero)
Vue.component('call-to-actions-deck', CallToActionsDeck)
Vue.component('call-to-action-item', CallToActionItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
