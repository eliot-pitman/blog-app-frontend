<script>
import axios from "axios";

export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      this.posts = response.data;
      console.log("All posts", this.posts);
    });
  },
};
</script>

<template>
  <h1>here are all posts</h1>
  <div v-for="post in posts" :key="post.id">
    <h2>post: {{ post.title }}</h2>
    <a :href="`/posts/${post.id}`">click for more info</a>
  </div>
</template>
