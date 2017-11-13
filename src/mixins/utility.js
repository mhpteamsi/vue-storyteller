import axios from 'axios'

export default {
  data () {
    return {
      api_token: 'b1Ucl4d8aQHRFtab6aczTgtt',
      api_version: '11'
    }
  },
  methods: {
    resizeImage (image, option) {
      var imageService = '//img2.storyblok.com/'
      var path = image.replace('//a.storyblok.com', '')
      return imageService + option + path
    },
    getGlobalSettings () {
      var reqUrl = 'https://api.storyblok.com/v1/cdn/stories/settings/global'
      return axios.get(reqUrl, {
        params: {
          token: this.api_token,
          env: process.env.NODE_ENV,
          v: this.api_version
        }
      }).then(response => {
        return response.data.story.content
      })
    },
    // get the slug from the link id
    resolveLinkById (id) {
      var reqUrl = 'https://api.storyblok.com/v1/cdn/links/' + id
      return axios.get(reqUrl, {
        params: {
          token: this.api_token,
          env: process.env.NODE_ENV,
          v: this.api_version
        }
      }).then(response => {
        return response.data.link.slug
      })
    }
  }
}
