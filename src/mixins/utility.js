export default {
  methods: {
    resizeImage (image, option) {
      var imageService = '//img2.storyblok.com/'
      var path = image.replace('//a.storyblok.com', '')
      return imageService + option + path
    },
    getGlobalSettings () {
      var reqUrl = 'https://api.storyblok.com/v1/cdn/stories/settings/global'
      return this.$http.get(reqUrl, {
        params: {
          token: process.env.API_TOKEN,
          env: process.env.DEPLOY_PRIME_URL,
          v: this.$apiTimestamp
        }
      }).then(response => {
        return response.data.story.content
      })
    },
    // get the slug from the link id
    resolveLinkById (id) {
      var reqUrl = 'https://api.storyblok.com/v1/cdn/links/' + id
      return this.$http.get(reqUrl, {
        params: {
          token: process.env.API_TOKEN,
          env: process.env.DEPLOY_PRIME_URL,
          v: this.$apiTimestamp
        }
      }).then(response => {
        return response.data.link.slug
      })
    }
  }
}
