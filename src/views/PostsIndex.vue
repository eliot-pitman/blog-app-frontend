<script>
import axios from "axios";

export default {
  data: function () {
    return {
      posts: [],
      currentPosts: {},
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
    <div class="card col-sm-4 mb-4" style="width: 18rem">
      <img :src="`${post.image}`" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">post: {{ post.title }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a :href="`/posts/${post.id}`">click for more info</a>
      </div>
    </div>
  </div>
</template>

<style></style>
