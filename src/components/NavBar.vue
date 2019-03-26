<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <router-link to="/home" class="navbar-brand">Post App</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Post</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        Sample app
      </span>
    </div>
  </nav>
</template>

<script>
import AppPosts from '../containers/AppPosts.vue'
import AddPost from '../containers/AddPost.vue'

export default {
   components: {
    AppPosts,
    AddPost,  
  }
}
</script>
