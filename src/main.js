// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap'
import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import VueLazyload from 'vue-lazyload'
import LayoutHome from '@/components/layout/LayoutHome'
import LayoutDefault from '@/components/layout/LayoutDefault'
import LayoutBlank from '@/components/layout/LayoutBlank'
import Navbar from '@/components/layout/partials/Navbar'
import NavGroup from '@/components/layout/partials/NavGroup'
import NavLink from '@/components/layout/partials/NavLink'
import SiteFooter from '@/components/layout/partials/SiteFooter'
import FooterLink from '@/components/layout/partials/FooterLink'
import Row from '@/components/layout/grid/Row'
import Column from '@/components/layout/grid/Column'
import Markdown from '@/components/Markdown'
import ImageBlock from '@/components/ImageBlock'
import Teaser from '@/components/Teaser'
import Hero from '@/components/Hero'
import CallToActionsDeck from '@/components/CallToActionsDeck'
import CallToActionItem from '@/components/CallToActionItem'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(StoryblokVue)
Vue.use(VueLazyload)

Vue.component('layout-home', LayoutHome)
Vue.component('layout-default', LayoutDefault)
Vue.component('layout-blank', LayoutBlank)
Vue.component('grid-row', Row)
Vue.component('grid-column', Column)
Vue.component('markdown', Markdown)
Vue.component('image-block', ImageBlock)
Vue.component('navbar', Navbar)
Vue.component('nav-group', NavGroup)
Vue.component('nav-link', NavLink)
Vue.component('site-footer', SiteFooter)
Vue.component('footer-link', FooterLink)
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
