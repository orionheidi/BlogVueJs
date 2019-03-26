<template>
   <form @submit.prevent="onSubmit" @reset="onReset" class="jumbotron">
    <div class="form-group row">
      <label class="col-4 col-form-label" for="title">Title</label> 
      <div class="col-8">
        <input id="title" name="title" type="text" class="form-control here" required="required" minlength="2" v-model="post.title">
      </div>
    </div>
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Text</label> 
      <div class="col-8">
        <textarea type="text" cols="40" rows="10" required="required" maxlength="300" v-model="post.text" />
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="reset" type="reset" class="btn btn-primary mr-2">Reset</button>       
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import capitalize from 'lodash/capitalize'

export default {
  
  props: {
    post: Object
  },

  methods: {
    onSubmit () {
      this.$emit('onSubmit')
    },

  onReset () {
      this.$emit('onReset')
    },
  }
}
</script>
