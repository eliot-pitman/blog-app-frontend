<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPostsParams: { body: "" },
      errors: [],
      status: "",
    };
  },
  methods: {
    createPost: function () {
      console.log("make a new post");

      axios
        .post("http://localhost:3000/posts.json", this.newPostsParams)
        .then((response) => {
          console.log("success", response.data);
          this.posts.push(response.data);
          // this.$router.push("/");
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
  },
};
</script>

<template>
  <div class="posts-new">
    <form v-on:submit.prevent="createPost()">
      <h1>Make a post!!</h1>
      <div>
        <div class="post-group">
          title:
          <input type="text" v-model="newPostsParams.title" />
        </div>
        <div class="form-group post-group">
          <label for="exampleFormControlTextarea1">Body</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="newPostsParams.body"
          ></textarea>
          <small v-if="newPostsParams.body.length > 120" class="text-danger">
            Characters over: {{ newPostsParams.body.length - 120 }}
          </small>
          <small v-if="newPostsParams.body.length < 120">
            Characters remaining: {{ 120 - newPostsParams.body.length }}
          </small>
        </div>
        <div class="post-group">
          image:
          <input type="text" v-model="newPostsParams.image" />
        </div>
      </div>
      <input type="submit" value="createPost" />
    </form>
    <img v-if="status" v-bind:src="`https://http.cat/${status}`" alt="" />
  </div>
</template>
