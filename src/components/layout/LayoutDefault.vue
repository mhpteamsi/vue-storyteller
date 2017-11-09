<template>
  <div class="layout-default" v-editable="blok">
    <navbar />
    <div class="content-wrapper container">
      <template v-for="item in blok.body">
        <component :blok="item" :is="item.component" :key="item.id"></component>
      </template>
    </div><!-- /.container -->
    <site-footer />
  </div>
</template>

<script>
export default {
  props: ['blok']
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
