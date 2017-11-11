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
          <li class="nav-item" v-for="story in stories" :key="story.id">
            <router-link :to="story.slug" class="nav-link">{{story.name}}</router-link>
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
      stories: []
    }
  },
  mounted () {
    var reqUrl = 'https://api.storyblok.com/v1/cdn/stories'
    axios.get(reqUrl, {
      params: {
        token: 'b1Ucl4d8aQHRFtab6aczTgtt',
        'filter_by[show_in_nav]': 1
      }
    }).then(response => {
      this.stories = response.data.stories
    })
  }
}
</script>
