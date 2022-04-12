<script>
import axios from "axios";

export default {
  data: function () {
    return { post: {}, message: "" };
  },
  created: function () {
    axios.get("http://localhost:3000/posts/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {
    destroyPost: function () {
      axios.delete("http://localhost:3000/posts/" + this.$route.params.id).then((response) => {
        console.log("post destroyed", response);
        this.message = "succesfully deleted";
        // this.$router.push("/posts");
      });
    },
  },
};
</script>

<template>
  <h1>{{ post.title }}</h1>
  <h1>{{ post.body }}</h1>
  <a href="image"><img :src="`${post.image}`" /></a>
  <p>{{ post.created_at }}</p>
  <a href="/posts/">back to posts</a>
  |
  <a :href="`/posts/${post.id}/edit`">edit</a>
  |
  <button @click="destroyPost()">delete post</button>
  <h1>{{ message }}</h1>
</template>
