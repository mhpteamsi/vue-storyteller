<template>
  <div>
    <component :blok="story.content" :is="story.content.layout"></component>
  </div>
</template>

<script>
import Utility from '@/mixins/utility'
import Vue from 'vue'

export default {
  name: 'Index',
  mixins: [Utility],
  data () {
    return {
      story: {
        content: {
          body: []
        }
      }
    }
  },
  created () {
    window.storyblok.init({
      accessToken: process.env.API_TOKEN
    })
    window.storyblok.on('change', () => {
      this.getStory('draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory('draft')
      } else {
        this.getCachedStory()
      }
    })
  },
  watch: {
    '$route': function () {
      if (window.storyblok.isInEditor()) {
        this.getStory('draft')
      } else {
        this.getCachedStory()
      }
    }
  },
  methods: {
    getCachedStory () {
      // get timestamp first so we can request a version that may already be cached in the CDN
      var timestampReqUrl = 'https://api.storyblok.com/v1/cdn/spaces/me'
      return this.$http.get(timestampReqUrl, {
        params: {
          token: process.env.API_TOKEN,
          v: Date.now()
        }
      }).then(timestampResponse => {
        Vue.prototype.$apiTimestamp = timestampResponse.data.space.version
        var reqUrl = 'https://api.storyblok.com/v1/cdn/stories/' + this.$route.params.slug
        return this.$http.get(reqUrl, {
          params: {
            token: process.env.API_TOKEN,
            env: process.env.DEPLOY_PRIME_URL,
            cv: this.$apiTimestamp
          }
        }).then(apiResponse => {
          this.story = apiResponse.data.story
          document.title = apiResponse.data.story.content.seo_title ? apiResponse.data.story.content.seo_title : apiResponse.data.story.name
          document.querySelector('meta[name="description"]').setAttribute('content', apiResponse.data.story.content.meta_description)
        })
      })
    },
    getStory (version) {
      window.storyblok.get({
        slug: this.$route.params.slug,
        version: version
      }, (data) => {
        this.story = {
          content: {
            body: []
          }
        }
        this.$nextTick(() => {
          this.story = data.story
          document.title = data.story.content.seo_title ? data.story.content.seo_title : data.story.name
          document.querySelector('meta[name="description"]').setAttribute('content', data.story.content.meta_description)
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
