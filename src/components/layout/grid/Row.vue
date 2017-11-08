<template>
  <div class="row" v-editable="blok">
    <template v-for="item in blok.body">
      <component :blok="item" :is="item.component" :key="item.id"></component>
    </template>
  </div><!-- /.row -->
</template>

<script>
export default {
  props: ['blok']
}
</script>
