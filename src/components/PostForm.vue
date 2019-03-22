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
        <textarea type="text" @keydown="limit( $event, 'myModel', 3)" v-model="post.text" />
        <!-- <input id="text" name="text" type="text" class="form-control here" required="required" v-model="post.text"> -->
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">

        <button name="reset" type="reset" class="btn btn-default">Reset</button>
        <p>&nbsp</p>
        <!-- <button name="preview" type="button" @click="preview" class="btn btn-default">Preview</button> -->
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

  //  data () {
  //       return {
  //           myModel: ''
  //       };
  //   },

//   watch: {
//     'inputModel': function(val, oldVal) {
//         if (val.length > 250) {
//             this.inputModel = oldVal
//         }
//     },
// },

  // data () {
   
  // },

  methods: {
    onSubmit () {
      this.$emit('onSubmit')
    },

  onReset () {
      this.$emit('onReset')
    },


    limit( event, dataProp, limit ) {
            if ( this[dataProp].length >= limit ) {
               event.preventDefault();
            }
        }

  //   preview () {
  //     alert(`
  //       Brand: ${this.car.brand}
  //       Model: ${this.car.model}
  //       Year: ${this.car.year}
  //       Maximum Speed: ${this.car.maxSpeed}
  //       Number of Doors: ${this.car.numberOfDoors}
  //       Engine: ${capitalize(this.car.model)}
  //       ${this.car.isAutomatic ? 'Automatic' : 'Manual'}
  //     `)
  //   }
  // }
}
}
</script>
