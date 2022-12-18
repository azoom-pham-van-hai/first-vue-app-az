import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("posts", () => {
  const posts = ref([]);
  const total = ref(0);
  const currentPage = ref(0);
  const limit = ref(10);

  const setPosts = (newPosts) => {
    posts.value = newPosts;
  };

  const setTotal = (newTotal) => {
    total.value = newTotal;
  };

  const setPage = (newPage) => {
    currentPage.value = newPage;
  };

  const setLimit = (newLimit) => {
    limit.value = newLimit;
  };

  return {
    posts,
    total,
    currentPage,
    limit,
    setPosts,
    setTotal,
    setPage,
    setLimit,
  };
});
