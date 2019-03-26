<template>
  <div class="row">

    <div class="card col-md-4" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">Text: {{ post.text }}</p>
        <p class="Created At">Created At formated: {{ post.createdAt | formatDate(null, 'YYYY-MM-DD') }}</p>
        <p class="Created At">Created At diff: {{ post.createdAt | diffForHumans }}</p>
      </div>

   <div class="card-body">
        <router-link class="btn btn-danger mr-2" :to="`/edit/${post.id}`">Edit Post</router-link>
        <router-link  class="btn btn-danger" :to="`posts/${post.id}`">View Post</router-link>
         <button class="btn btn-danger mt-2" @click="onDelete(post)">Delete</button>
    </div>
    </div>
  </div>
</template>

<script>
import capitalize from 'lodash/capitalize'
import {dateMixin} from '../mixins.js'

export default {
  props: {
    posts: Array,
  },

  mixins: [dateMixin],

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