<template>
  <div class="app-pagination">
    <div v-for="i in pagesCount" @click="setPage(i)" class="item">{{ i }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["total", "setPage"]);

const pagesCount = computed(() => {
  return props.total / 10;
});
</script>

<style scoped lang="scss">
.app-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;
  margin: auto;

  > .item {
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 50%;
    background-color: #dba39a;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }

  > .item:active {
    transform: translateY(3px);
    background-color: #d7604e;
  }
}
</style>
