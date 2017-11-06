<template>
  <div v-editable="blok">
    <navbar />
    <template v-for="item in blok.body">
      <component :blok="item" :is="item.component" :key="item.id"></component>
    </template>
    <site-footer />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
