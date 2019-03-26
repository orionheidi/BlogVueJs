<template>
  <div>
    <CommentForm :comment="comment" @onSubmit="addComent"></CommentForm>
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
      comments:[]
    }
  },

  created () {
    this.$route.params.id && posts.get(this.$route.params.id)
      .then((response) => {
        this.post = response.data
      })
  },

    methods:{

    async addComent(){
        console.log('comment added to post')
      try{
      console.log(this.post.id)
        const {data: newComment} = await posts.addComment(this.post,this.comment);
        console.log(this.post.text)
        // this.comments.push(this.comment)
        this.post.comments.push(this.comment)            
        console.log(newComment);
      this.$router.push('/posts')   
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
