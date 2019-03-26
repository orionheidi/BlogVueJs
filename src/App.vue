<template>
  <div id="app">
    <!-- <router-link to="/posts">App Posts</router-link>
    <router-link to="/add">ADD POST</router-link> -->
    <nav-bar />
      <!-- <router-view /> -->
    <div class="container">
      <div class="col-sm-10 offset-sm-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import AppPosts from './containers/AppPosts.vue'
// import AddPost from './containers/AddPost.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    // AddPost,
    NavBar
  }
}
</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

