<template>
  <div class="container pt-4">
    <div class="card-deck">
      <template v-for="item in blok.items">
        <component :blok="item" :is="item.component" :key="item.id"></component>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>
