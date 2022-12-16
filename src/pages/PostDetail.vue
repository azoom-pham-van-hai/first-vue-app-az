<template>
  <div>
    <p v-if="!post">Loading...</p>
    <div v-else class="post-item">
      <p>{{ post.id }}. {{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { kyApi } from "../config/api";

export default {
  name: "PostDetail",
  data: () => {
    return {
      post: undefined,
    };
  },

  async created() {
    const postId = this.$route.params.postId;
    const resPost = await kyApi.get(`posts/${postId}`).json();
    this.post = resPost;
  },
};
</script>

<style scoped>
.post-item {
  background: #fefcf3;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  text-align: left;
}
</style>
