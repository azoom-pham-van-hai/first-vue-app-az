<template>
  <div>
    <p v-if="!post || !user">Loading...</p>
    <div v-else class="post-detail">
      <h2 class="title">{{ post.title }}</h2>
      <h4 class="author">Author: {{ user.name }}</h4>
      <p class="content">{{ post.body }}</p>
      <div class="groupbtn">
        <router-link :to="`/posts/${previousPostId}`"
          ><button class="button">&larr; Previous</button></router-link
        >
        <router-link :to="`/posts/${nextPostId}`"
          ><button class="button">Next &rarr;</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onBeforeMount, ref, defineProps, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { kyApi } from "../config/api";
import { usePostStore } from "../store/posts";

const store = usePostStore();
const route = useRoute();

const post = ref({});
const user = ref({});
const { total } = storeToRefs(store);

const handleGetPost = async () => {
  try {
    const { postId } = route.params;
    const resPost = await kyApi.get(`posts/${postId}`).json();
    const resUser = await kyApi.get(`users/${resPost.userId}`).json();
    post.value = resPost;
    user.value = resUser;
  } catch (e) {}
};

onBeforeMount(handleGetPost);

const nextPostId = computed(() => {
  return post.value.id < total.value ? post.value.id + 1 : post.value.id;
});

const previousPostId = computed(() => {
  return post.value.id > 1 ? post.value.id - 1 : post.value.id;
});
</script>

<style scoped lang="scss">
.post-detail {
  background: #fefcf3;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  text-align: left;

  > .title {
    background-color: #f0dbdb;
    padding: 10px;
    border-radius: 5px;
  }

  > .author {
    margin: 10px 0 20px;
    text-decoration: underline;
    cursor: pointer;
  }

  > .groupbtn {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  > .groupbtn .button {
    background-color: #dba39a;
    height: fit-content;
    width: 120px;
    padding: 5px 10px;
    outline: none;
  }
}
</style>
