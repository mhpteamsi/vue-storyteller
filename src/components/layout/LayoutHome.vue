<template>
  <div v-editable="blok">
    <navbar :blok="settings.header_nav" />
    <template v-for="item in blok.body">
      <component :blok="item" :is="item.component" :key="item.id"></component>
    </template>
    <site-footer :blok="settings.footer_nav" />
  </div>
</template>

<script>
// may need to change this to reference a root instance of axios
import axios from 'axios'

export default {
  props: ['blok'],
  data () {
    return {
      settings: {}
    }
  },
  mounted () {
    // get settings for navbar and footer
    var reqUrl = 'https://api.storyblok.com/v1/cdn/stories/settings/global'
    axios.get(reqUrl, {
      params: {
        token: 'b1Ucl4d8aQHRFtab6aczTgtt',
        env: process.env.NODE_ENV,
        v: '10'
      }
    }).then(response => {
      this.settings = response.data.story.content
    })
  }
}
</script>
