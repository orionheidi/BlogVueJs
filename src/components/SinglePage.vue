<template>
<div class="mt-4">
    <router-link to="/posts">Go back</router-link>
    <hr/>
    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
         <h5 class="card-title">{{ post.text }}</h5>
           <p class="Created At">Created At formated: {{ post.createdAt | formatDate(null, 'YYYY-MM-DD') }}</p>
          <p class="Created At">Created At diff: {{ post.createdAt | diffForHumans }}</p>
      </div>
    </div>
    <h5>Comments:</h5>
     <div class="card col-md-4" v-for="comment in post.comments" :key="comment.id">
      <div class="card-body">
        <p class="card-text">Text: {{ comment.text }}</p>
      </div>
      </div>
     <div class="card-body">
        <router-link class="btn btn-danger" :to="`/posts/${post.id}/comments`">Add comment</router-link>
      </div>
  </div>
</template>

<script>
import { posts } from '../services/posts'
import { comments } from '../services/comments'
import CommentForm from './CommentForm.vue'
import {dateMixin} from '../mixins.js'

export default {
   components: {
    CommentForm
  },

  mixins: [dateMixin],

  props: {
    post: Object,
    comments: [],
    comment: Object
  },
}
</script>

<style>
</style>