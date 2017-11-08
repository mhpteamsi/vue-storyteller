<template>
  <div v-editable="blok" class="jumbotron jumbotron-fluid p-0 text-white" :style="{ 'background-image': `url(${resizeImage(blok.image, '1600x0')})` }">
    <!-- d-flex and my-auto used for vertical centering -->
    <div class="jumbotron-overlay d-flex py-5">
      <div class="container my-auto">
        <h1 class="display-3">{{blok.headline}}</h1>
        <p class="lead">{{blok.lead}}</p>
      </div>
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

<style lang="scss" scoped>
  .jumbotron {
    background-size: cover;
    background-position: center;
  }
  .jumbotron-overlay {
    min-height: 400px;
    background-color: rgba(0,0,0,.3);
  }
</style>
