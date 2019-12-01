<template>
  <div class="container">
    <div class="row">
      <Post v-for="(post, i) in posts" :key="i" :posts="post" />
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Post from "./Post";
export default {
  name: "Posts",
  components: {
    Post
  },

  computed: {
    ...mapState(["posts"])
  },
  created() {
    this.$store.dispatch("getPosts", { self: this });
  },
  methods: {}
};
</script>

<style scoped>
</style>
