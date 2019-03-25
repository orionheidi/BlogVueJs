<template>
  <div class="row">

    <div class="card col-md-4" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">Text: {{ post.text }}</p>
         <p class="Created At">Created At: {{ post.createdAt }}</p>
      </div>

      <div class="card-body">
        <router-link class="btn btn-danger" :to="`/edit/${post.id}`">Edit Post</router-link>&nbsp
        <button class="btn btn-danger" @click="onDelete(post)">Delete</button>&nbsp &nbsp
        <router-link class="btn btn-danger" :to="`posts/${post.id}`">View Post</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import capitalize from 'lodash/capitalize'
import {mixin1,mixin2} from '../mixins.js'
export default {
  props: {
    posts: Array,
     mixins: [mixin1,mixin2],
  },

  methods: {
    capitalize (str) {
      return capitalize(str)
    },

    onDelete(post) {
      this.$emit('onDelete',post)
    }
  }

  
}
</script>