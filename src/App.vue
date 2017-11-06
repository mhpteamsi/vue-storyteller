<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

  // add variables here to customize Bootstrap
  $headings-font-weight:        400;

  $theme-colors: (
    primary: #42b983
  );

  @import "~bootstrap/scss/bootstrap";
</style>
