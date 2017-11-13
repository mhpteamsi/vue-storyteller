<template>
  <div v-editable="blok">
    <navbar :blok="settings.header_nav" />
    <template v-for="item in blok.body">
      <component :blok="item" :is="item.component" :key="item.id"></component>
    </template>
    <site-footer :blok="settings.footer_links" />
  </div>
</template>

<script>
import Utility from '@/mixins/utility'
export default {
  props: ['blok'],
  mixins: [ Utility ],
  data () {
    return {
      settings: {}
    }
  },
  mounted () {
    // get settings for navbar and footer
    this.getGlobalSettings().then(settings => {
      this.settings = settings
    })
  }
}
</script>
