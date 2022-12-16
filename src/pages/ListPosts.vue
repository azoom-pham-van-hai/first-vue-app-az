<template>
  <div class="list-posts">
    <button type="button" @click="createPost" class="button">
      Create post
    </button>
    <p v-if="posts.length === 0">Loading</p>
    <div v-else>
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="goToPostDetail(post.id)"
      ></post-item>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { kyApi } from "../config/api";
import PostItem from "../components/PostItem.vue";
import { usePostStore } from "../store/posts";

const { posts, total, setPosts } = usePostStore();

const params = ref({
  page: 0,
  limit: 10,
});

onBeforeMount(async () => {
  const resPosts = await kyApi
    .get("posts", {
      searchParams: {
        _start: params.value.page,
        _limit: params.value.limit,
      },
    })
    .json();

  setPosts(resPosts);
});
</script>

<style scoped lang="scss">
.list-posts {
  .button {
    background-color: #dba39a;
  }
}
</style>
