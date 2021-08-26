<template>
  <div>
    <ul class="list-group mt-5">
      <li class="list-group-item list-group-item-action" v-for="wish in wishesList" :key="wish.id">

        <div class="d-flex w-100 justify-content-between">
          <h3>{{wish.wish}}</h3>

          <small class="text-danger delete" @click="deleteWish(wish.id)">&#10005;</small>
        </div>
        <p>{{wish.description}}</p>

      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: 'Wishes',
    methods: {
      ...mapActions(["fetchWishes", "deleteWish"])
    },
    computed: mapGetters(["wishesList"]),
    created() {
      this.fetchWishes()
    }
  }
</script>

<style>
 .delete {
   font-size: 18px;
   cursor: pointer;
 }
</style>