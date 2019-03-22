<template>
<div class="mt-4">
    <router-link to="/posts">Go back</router-link>
    <hr/>

    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
         <h5 class="card-title">{{ post.text }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from '../services/posts'
export default {
  props: {
    post: Object
  },


}
</script>

<style>
</style>