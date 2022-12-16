import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("posts", () => {
  const posts = ref([]);
  const total = ref(0);

  const setPosts = (newPosts) => {
    posts.value = newPosts;
  };

  const setTotal = (newTotal) => {
    total.value = newTotal;
  };

  return {
    posts,
    total,
    setPosts,
    setTotal,
  };
});
