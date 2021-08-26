<template>
 <form @submit.prevent="onWishSubmit">
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter wish" v-model="wish">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Tell why..." v-model="description">
  </div>
  <button type="submit" class="btn btn-block btn-primary">Add</button>
</form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'AddWish',
  data(){
      return {
        wish: '',
        description: ''
      }
  },
  methods:{
    ...mapActions(["addWishes"]),
    onWishSubmit() {
        this.addWishes({
          wish: this.wish,
          description: this.description
        })
    }
  }
}
</script>