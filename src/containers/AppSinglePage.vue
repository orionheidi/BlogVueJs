<template>
  <div>
    <SinglePage :post="post"></SinglePage>
  </div>
</template>

<script>
import SinglePage from '../components/SinglePage.vue'
import { posts } from '../services/posts'

export default {
  components: {
    SinglePage
      },

  data () {
    return {
      post: {}
    }
  },

  created () {
    this.$route.params.id && posts.get(this.$route.params.id)
      .then((response) => {
        this.post = response.data
      })
  },


  async get(){
      console.log('hej get all posts')
    try{
      const {data} = await posts.get(this.$route.params.id );
      this.post = this.posts.filter(c => c !== post)
      this.post = data;
      console.log(data)
    }catch(error){
      console.log(error);
    }
    
  },

}

//    deletePost (post) {
//       posts.remove(post.id)
//         .then((success) => {
//           this.posts = this.posts.filter(c => c !== post)
//         })
//     }


</script>