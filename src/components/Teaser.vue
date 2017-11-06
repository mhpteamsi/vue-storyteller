<template>
  <div class="teaser">
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the sidebar can
    show the right component.
    -->
    <div v-editable="blok" class="teaser__inner">
      <h1 class="text-center my-5">
        <!--
        You can access every attribute you
        define in the schema in the blok variable
        -->
        {{blok.headline}}
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>
