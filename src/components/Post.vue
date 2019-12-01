<template>
  <div class="post-preview">
    <router-link :to="{ name: 'posts', params: { id: posts.id } }">
      <h2 class="post-title">
        {{ posts.title }}
      </h2>
      <h3 class="post-subtitle">
        {{ posts.body }}
      </h3>
    </router-link>
    <p class="post-meta">
      Posted by
      <a href="#">{{ username }}</a>
    </p>
    <hr />
  </div>
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const UserRepository = Repository.get("users");

export default {
  props: ["posts"],
  data() {
    return {
      username: "Kaperskyguru"
    };
  },
  created() {
    this.getPostUsername(this.posts.userId);
  },
  methods: {
    getPostUsername: async function(id) {
      const { data } = await UserRepository.getUser(id);
      this.username = data.username;
    }
  }
};
</script>

<style>
</style>