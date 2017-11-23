<template>
  <transition name="fade">
    <component :blok="story.content" :is="story.content.layout"></component>
  </transition>
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
    window.storyblok.on('published', () => {
      this.clearCDNCache()
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
      // get timestamp
      var timestampReqUrl = 'https://nl1rjqs0be.execute-api.us-east-1.amazonaws.com/prod/storybloks_api_request_version'
      return this.$http.get(timestampReqUrl).then(timestampResponse => {
        Vue.prototype.$apiTimestamp = timestampResponse.data
        // use timestamp when requesting data from CDN
        var reqUrl = 'https://api.storyblok.com/v1/cdn/stories/' + this.$route.params.slug
        return this.$http.get(reqUrl, {
          params: {
            token: process.env.API_TOKEN,
            env: process.env.DEPLOY_PRIME_URL,
            v: this.$apiTimestamp
          }
        }).then(apiResponse => {
          this.story = apiResponse.data.story
          document.title = apiResponse.data.story.content.seo_title ? apiResponse.data.story.content.seo_title : apiResponse.data.story.name
          document.querySelector('meta[name="description"]').setAttribute('content', apiResponse.data.story.content.meta_description)
        }).catch(() => {
          this.$router.push('/page-not-found')
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

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
