<template>
  <div class="post-item">
    <p>{{ post.id }}. {{ post.title }}</p>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-item {
  background: #fefcf3;
  box-shadow: 0 0 2px #dba39a;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
}
</style>
