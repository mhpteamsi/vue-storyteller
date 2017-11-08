<template>
  <div v-editable="blok" class="card mb-5 border-0">
    <img class="card-img-top" :src="resizeImage(blok.image, '350x0')" alt="Card image cap">
    <div class="card-body px-0">
      <h4 class="card-title">{{blok.title}}</h4>
      <p class="card-text">{{blok.text}}</p>
    </div>
    <div class="card-action">
      <router-link :to="blok.action_link" class="btn btn-block btn-outline-primary text-uppercase">{{blok.action_label}}</router-link>
    </div>
  </div>
</template>

<script>
  import utility from '@/mixins/utility'
  export default {
    props: ['blok'],
    mixins: [ utility ]
  }
</script>
