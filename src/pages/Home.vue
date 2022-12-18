<template>
  <div>
    <router-link to="/posts"
      ><button class="button">Go to posts</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.button {
  background-color: #dba39a;
  outline: none;
}
</style>
