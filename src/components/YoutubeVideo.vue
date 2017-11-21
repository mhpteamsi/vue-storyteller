<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="videoUrl" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    props: ['blok'],
    computed: {
      videoUrl () {
        return 'https://www.youtube.com/embed/' + this.blok.video_id + '?rel=0'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .embed-responsive {
    margin-bottom: 20px;
  }
</style>
