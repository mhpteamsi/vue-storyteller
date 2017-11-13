<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{blok.name}}
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <component v-for="item in blok.nav_links" :blok="item" :is-child="true" :is="item.component" :key="item.id"></component>
    </div>
  </li>
</template>

<script>
export default {
  props: ['blok']
}
</script>
