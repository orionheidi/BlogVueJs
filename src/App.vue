<template>
  <div id="app">
    <router-link to="/posts">App Posts</router-link>
        <router-view />
    <!-- <div class="container">
      <div class="col-sm-10 offset-sm-1">
        <router-view />
      </div> -->
    </div>
  </div>
</template>

<script>

import AppPosts from './containers/AppPosts.vue'

export default {
  name: 'app',
  components: {
    AppPosts
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

