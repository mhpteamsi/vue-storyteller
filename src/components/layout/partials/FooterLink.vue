<template>
  <span>
    <span v-if="index > 0" class="text-muted">&nbsp;/</span>
    <router-link :to="nav_link">{{blok.name}}</router-link>
  </span>
</template>

<script>

import Utility from '@/mixins/utility'

export default {
  mixins: [ Utility ],
  props: ['blok', 'index'],
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
