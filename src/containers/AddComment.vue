<template>
  <div>
    <CommentForm :post="post" :comment="comment" @onSubmit="onSubmit"></CommentForm>
  </div>
</template>

<script>
import CommentForm from '../components/CommentForm.vue'
import { posts } from '../services/posts'
import { comments } from '../services/comments'
import PostForm from '../components/PostForm.vue'

export default {
  components: {
    CommentForm,
    PostForm
  },

  data () {
    return {
      post: this.getDefaultPost(),
      comment: this.getDefaultComment(),
    }
  },

  created () {
    this.$route.params.id && posts.get(this.$route.params.id)
      .then((response) => {
        this.post = response.data
      })
  },

    methods:{
   onSubmit () {
      if (this.post.id) {
        console.log('baba')
        this.addComent()
      } else {
        console.log('deda faild')
      }
    },
  async addComent(){
      console.log('comment added to post')
    try{
    console.log(this.post.title)
      const {data: newComment} = await posts.addComment(this.post,this.comment);
    //  this.post.comments.push(this.comment)
      console.log(newComment);
    this.$router.push('/posts/$route.params.id')   
    }catch(error){
      console.log(error);
    }
    
  },
 


    getDefaultComment () {
      return {
        text: '',
      }
    },
    
    getDefaultPost () {
      return {
        title: '',
        text: '',
        comments: []
      }
    },
    
  },


}
</script>
