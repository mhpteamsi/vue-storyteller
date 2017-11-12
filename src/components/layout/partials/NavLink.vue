<template>
  <router-link v-if="isChild" :to="blok.slug.url" class="dropdown-item">{{blok.name}}</router-link>
  <li v-else class="nav-item">
    <router-link :to="blok.slug.url" class="nav-link">{{blok.name}}</router-link>
  </li>
</template>

<script>
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
    if (this.blok.slug.linktype === 'url') {
      this.nav_link = this.blok.slug.url
    } else {
      // do ajax request to get the path from this.blok.slug.id

      // var reqUrl = 'https://api.storyblok.com/v1/cdn/links'
      // axios.get(reqUrl, {
      //   params: {
      //     id: this.blok.slug.id,
      //     token: 'b1Ucl4d8aQHRFtab6aczTgtt',
      //     env: process.env.NODE_ENV,
      //     v: '9'
      //   }
      // }).then(response => {
      //   this.settings = response.data.story.content
      // })
    }
  }
}
</script>
