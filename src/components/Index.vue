<template>
  <div>
    <component :blok="story.content" :is="story.content.layout"></component>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
      accessToken: 'b1Ucl4d8aQHRFtab6aczTgtt'
    })
    window.storyblok.on('change', () => {
      this.getStory('draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory('draft')
      } else {
        this.getStory('published')
      }
    })
  },
  watch: {
    '$route': function () {
      if (window.storyblok.isInEditor()) {
        this.getStory('draft')
      } else {
        this.getStory('published')
      }
    }
  },
  methods: {
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

          // set up SEO meta data.
            // NOTE: you will probably need to use a prerenderer in order for search engines to pick this up.
            // https://www.netlify.com/docs/prerendering/
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
