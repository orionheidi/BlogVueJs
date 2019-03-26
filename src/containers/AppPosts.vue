<template>
  <div>
    <PostList :posts="posts" @onDelete="deletePost" ></PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { posts } from '../services/posts'

export default {
  components: {
    PostList
  },

  created () {
  this.$route.params.id && posts.get(this.$route.params.id)
    .then((response) => {
      this.post = response.data
    })
  },

  data () {
    return {
      posts: [],
      post:{}
    }
  },

  async created(){
      console.log('hej get all posts')
    try{
      const {data} = await posts.getAll();
      this.posts = data;
      console.log(data)
    }catch(error){
      console.log(error);
    }   
  },

  methods: {
  async deletePost (post){
  console.log('hej post id deleted')
    try{
      const {data} = await posts.remove(post.id);
      this.posts = this.posts.filter(c => c !== post)
  }catch(error){
      console.log(error);
  } 
},
  }
}
</script>
