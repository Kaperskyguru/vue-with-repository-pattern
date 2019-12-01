<template>
  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <p>
            Posted by
            <a href="#">{{ username }}</a
            >.
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const PostRepository = Repository.get("posts");
const UserRepository = Repository.get("users");

export default {
  data() {
    return {
      post: {},
      username: ""
    };
  },

  created() {
    this.getPost();
  },
  updated() {
    this.getPostUsername(this.post.userId);
  },
  methods: {
    getPost: async function() {
      const { data } = await PostRepository.getPost(this.$route.params.id);
      this.post = data;
    },
    getPostUsername: async function(id) {
      const { data } = await UserRepository.getUser(id);
      this.username = data.username;
    }
  }
};
</script>

<style>
</style>