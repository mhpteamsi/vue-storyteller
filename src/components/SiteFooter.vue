<template>
  <footer class="site-footer py-4 bg-dark text-white">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex">
          <span class="w-100 text-uppercase text-center text-md-left">{{blok.copyright}}</span>
        </div>
        <div class="col-md-6 d-flex">
          <span class="w-100 text-uppercase text-center text-md-right">
            <a href="#">Privacy Policy</a>
            <span class="text-muted">/</span>
            <a href="#">Contact Us</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>

<style lang="scss">
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin-bottom: 80px;
  }
</style>
<style lang="scss" scoped>
  .site-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    font-size: 14px;
  }
</style>
