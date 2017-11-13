<template>
  <router-link v-if="isChild" :to="nav_link" class="dropdown-item">{{blok.name}}</router-link>
  <li v-else class="nav-item">
    <router-link :to="nav_link" class="nav-link">{{blok.name}}</router-link>
  </li>
</template>

<script>

import Utility from '@/mixins/utility'

export default {
  mixins: [ Utility ],
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
    if (this.blok.slug.linktype === 'url') {
      this.nav_link = this.blok.slug.url
    } else {
      this.resolveLinkById(this.blok.slug.id).then(slug => {
        this.nav_link = '/' + slug
      })
    }
  }
}
</script>
