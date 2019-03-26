<template>
   <form @submit.prevent="onSubmit" class="jumbotron">
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Text</label> 
      <div class="col-8">
        <textarea type="text" cols="40" rows="10" required="required" v-model="comment.text" />
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import capitalize from 'lodash/capitalize'

export default {
  props: {
    comment: Object
  },

  methods: {
    onSubmit () {
      this.$emit('onSubmit')
    },
  }
}
</script>