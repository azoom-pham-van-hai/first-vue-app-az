import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ListPosts from "./pages/ListPosts.vue";
import PostDetail from "./pages/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "ListPosts",
    component: ListPosts,
  },
  {
    path: "/posts/:postId",
    name: "PostDetail",
    component: PostDetail,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
