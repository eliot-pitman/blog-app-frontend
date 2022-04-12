<script>
import axios from "axios";

export default {
  data: function () {
    return { post: {}, message: "Post Edit" };
  },
  created: function () {
    axios.get("http://localhost:3000/posts/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {
    updatePost: function () {
      axios.patch("http://localhost:3000/posts/" + this.$route.params.id + ".json", this.post).then((response) => {
        console.log("success", response.data);
        // this.post.push(response.data);
      });
    },
  },
};
</script>

<template>
  <div class="posts-create">
    <form v-on:submit.prevent="updatePost()">
      <h1>Update a post!!</h1>
      <div>
        <div class="post-group">
          title:
          <input type="text" v-model="post.title" />
        </div>
        <div class="post-group">
          body:
          <input type="text" v-model="post.body" />
        </div>
        <div class="post-group">
          image:
          <input type="text" v-model="post.image" />
        </div>
        <div class="post-group">
          user_id:
          <input type="text" v-model="post.user_id" />
        </div>
      </div>
      <input type="submit" value="updatePost" />
    </form>
    <a href="/posts">back to posts</a>
  </div>
</template>
