<template>
  <div class="list-posts">
    <button type="button" @click="createPost" class="button">
      Create post
    </button>
    <p v-if="posts.length === 0" class="loading">Loading posts...</p>
    <div v-else class="list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="goToPostDetail(post.id)"
      ></post-item>
    </div>
    <app-pagination :total="total" :set-page="setPage"></app-pagination>
  </div>
</template>

<script setup>
import AppPagination from "../components/app/Pagination.vue";

import { onBeforeMount, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import { kyApi } from "../config/api";
import PostItem from "../components/PostItem.vue";
import { usePostStore } from "../store/posts";

const store = usePostStore();
const router = useRouter();

const { posts, total, currentPage, limit } = storeToRefs(store);

const { setPosts, setTotal, setPage, setLimit } = store;

const handleGetPosts = async () => {
  try {
    const response = await kyApi.get("posts", {
      searchParams: {
        _page: currentPage.value,
        _limit: limit.value,
      },
    });

    const resTotal = response.headers.get("x-total-count");
    setTotal(resTotal);
    const result = await response.json();
    setPosts(result);
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(handleGetPosts);

watch([currentPage], handleGetPosts);

const goToPostDetail = (postId) => {
  router.push(`posts/${postId}`);
};
</script>

<style scoped lang="scss">
.list-posts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;

  > .button {
    background-color: #dba39a;
    font-size: 20px;
  }

  > .loading {
    font-size: 28px;
  }

  > .list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  > .app-pagination {
    margin-top: 20px;
  }
}
</style>
