<template>
  <center>
    <h1>{{blok.title}}</h1>
    <p>{{blok.description}}</p>
  </center>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin-top: 100px;
  }
</style>
