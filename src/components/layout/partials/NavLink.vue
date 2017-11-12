<template>
  <router-link v-if="isChild" :to="nav_link" class="dropdown-item">{{blok.name}}</router-link>
  <li v-else class="nav-item">
    <router-link :to="nav_link" class="nav-link">{{blok.name}}</router-link>
  </li>
</template>

<script>
// may need to change this to reference a root instance of axios
import axios from 'axios'

export default {
  props: {
    blok: {},
    isChild: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      nav_link: ''
    }
  },
  mounted () {
    // TODO: move this to a mixin and add an option to get the slug from a links list object instead of doing an ajax request on each link
    if (this.blok.slug.linktype === 'url') {
      this.nav_link = this.blok.slug.url
    } else {
      // get the slug from the link id
      var reqUrl = 'https://api.storyblok.com/v1/cdn/links/' + this.blok.slug.id
      axios.get(reqUrl, {
        params: {
          token: 'b1Ucl4d8aQHRFtab6aczTgtt',
          env: process.env.NODE_ENV,
          v: '10'
        }
      }).then(response => {
        this.nav_link = response.data.link.slug
      })
    }
  }
}
</script>
