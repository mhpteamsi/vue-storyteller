<template>
  <div v-editable="blok" class="card mb-5 border-0">
    <img class="card-img-top" v-lazy="optimizedImage" alt="Card image cap">
    <div class="card-body px-0">
      <h4 class="card-title">{{blok.title}}</h4>
      <p class="card-text">{{blok.text}}</p>
    </div>
    <div class="card-action">
      <router-link :to="action_link" class="btn btn-block btn-outline-primary text-uppercase">
        {{blok.action_label}}
      </router-link>
    </div>
  </div>
</template>

<script>
  import Utility from '@/mixins/utility'
  export default {
    props: ['blok'],
    data () {
      return {
        action_link: ''
      }
    },
    computed: {
      optimizedImage () {
        return this.resizeImage(this.blok.image, '350x233')
      }
    },
    mounted () {
      if (this.blok.action_link.linktype === 'url') {
        this.action_link = this.blok.action_link.url
      } else if (this.blok.action_link.id) {
        this.resolveLinkById(this.blok.action_link.id).then(slug => {
          this.action_link = '/' + slug
        })
      }
    },
    mixins: [ Utility ]
  }
</script>
