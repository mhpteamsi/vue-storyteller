<template>
  <div :class="['col-' + blok.breakpoint + '-' +  blok.column_size]" v-editable="blok">
    <template v-for="item in blok.body">
      <component :blok="item" :is="item.component" :key="item.id"></component>
    </template>
  </div><!-- /.container -->
</template>

<script>
export default {
  props: ['blok']
}
</script>
