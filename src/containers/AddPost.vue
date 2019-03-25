<template>
  <div>
    <PostForm :post="post" @onSubmit="onSubmit"  @onReset="resetForm"></PostForm>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue'
import { posts } from '../services/posts'

export default {
  components: {
    PostForm
  },

  data () {
    return {
      post: this.getDefaultPost()
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
        this.edit()
      } else {
        console.log('deda')
        this.addPost()
      }
    },
  async addPost(){
      console.log('post added')
    try{
    //   const {data} = await carService.getAll();
    //   this.cars = data;
  
      const {data: newPost} = await posts.create(this.post);
      this.post = {}
      console.log(newPost);
      this.$router.push('/posts')   
    }catch(error){
      console.log(error);
    }
    
  },
  async edit(){
      console.log('hej edit post')
    try{
    //   const {data} = await carService.getAll();
    //   this.cars = data;
   
      // console.log('Id of a car' + this.id)
      const {data: newPost2} = await posts.edit(this.post);
      // this.car = {}
      // this.car = newCar2;
      console.log(newPost2);
      this.$router.push('/posts')
    }catch(error){
      console.log(error);
    }
    
  },


    getDefaultPost () {
      return {
        title: '',
        text: '',
        comments: []
      }
    },
     resetForm () {
      this.post = this.getDefaultPost()
    },
  },


}
</script>

