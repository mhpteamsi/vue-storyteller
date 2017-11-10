<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="../../../assets/logo.png" width="50" height="50" alt="Add your brand name here">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto bg-red">
          <li class="nav-item" v-for="link in links" :key="link.id">
            <router-link :to="link.slug" class="nav-link">{{link.name}}</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div><!-- /.container -->
  </nav>
</template>

<script>
// may need to change this to reference a root instance of axios
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      links: []
    }
  },
  mounted () {
    // this will probably be a huge request once there's alot of pages, but it works for now
    var reqUrl = 'https://api.storyblok.com/v1/cdn/links?token=KeYfBxUXGP0hQ7rVuWQuSwtt'

    axios.get(reqUrl).then(response => {
      var responseLinks = response.data.links

      this.links = Object.keys(responseLinks).reduce((r, k) => {
        return r.concat(responseLinks[k])
      }, [])
    })
  }
}
</script>
