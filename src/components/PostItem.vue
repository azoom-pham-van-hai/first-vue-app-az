<template>
  <div class="post-item">
    <p>
      <strong>{{ post.id }}. </strong>{{ post.title }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["post"]);
</script>

<style scoped>
.post-item {
  background: #fefcf3;
  box-shadow: 0 0 2px #dba39a;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  user-select: none;
}
</style>
