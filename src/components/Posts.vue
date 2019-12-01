<template>
  <div class="row">
    <Post v-for="(post, i) in posts" :key="i" :posts="post" />
    <div class="col-lg-8 col-md-10 mx-auto">
      <div class="clearfix">
        <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
      </div>
    </div>
  </div>
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const PostRepository = Repository.get("posts");

import Post from "./Post";
export default {
  name: "Posts",
  components: {
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts: async function() {
      const { data } = await PostRepository.get();
      this.posts = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
