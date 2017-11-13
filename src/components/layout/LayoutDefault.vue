<template>
  <div class="layout-default" v-editable="blok">
    <navbar :blok="settings.header_nav" />
    <div class="content-wrapper container">
      <template v-for="item in blok.body">
        <component :blok="item" :is="item.component" :key="item.id"></component>
      </template>
    </div><!-- /.container -->
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

<style lang="scss" scoped>
// sticky footer
.layout-default {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .navbar {
    flex-shrink: 0;
  }
  .content-wrapper {
    flex: 1 0 auto;
  }
  .site-footer {
    flex-shrink: 0;
  }
}
</style>
