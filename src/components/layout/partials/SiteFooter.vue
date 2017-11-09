<template>
  <footer class="site-footer py-4 bg-dark text-white">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex">
          <span class="w-100 text-uppercase text-center text-md-left">© 2017 Company Name Here. All Rights Reserved.</span>
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
  // global sticky footer settings
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin-bottom: 110px;
  }
</style>
<style lang="scss" scoped>
  // component sticky footer settings
  .site-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 110px;
    font-size: 14px;
  }

  // TODO: figure out how to use Bootstrap mixins here without reimporting Bootstrap
  @media (min-width: 768px) {
    body {
      margin-bottom: 80px;
    }

    .site-footer {
      min-height: 80px;
    }
  }

</style>
