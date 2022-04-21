<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function () {
    return {
      posts: [],
      currentPosts: {},
      titleFilter: "",
      boolean: true,
    };
  },
  created: function () {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      this.posts = response.data;
      console.log("All posts", this.posts);
    });
  },
  methods: {
    dateMethod: function (date) {
      return moment(date).fromNow();
    },
    filterPosts: function () {
      return this.posts.filter((post) => {
        var lowerTitle = post.title.toLowerCase();
        var lowerTitleFilter = this.titleFilter.toLowerCase();
        return lowerTitle.includes(lowerTitleFilter);
      });
    },
    sortedArray() {
      let sortedPosts = this.posts;
      sortedPosts = sortedPosts.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      return sortedPosts;
    },
  },
};
</script>

<template>
  <h1>here are all the posts</h1>
  <div class="row">
    <input v-model="titleFilter" type="text" list="titles" />
    <datalist id="titles">
      <option v-for="post in posts" v-bind:key="post.id">{{ post.title }}</option>
    </datalist>
    <button @click="sortedArray()">Sort by Title</button>
    <div v-for="post in filterPosts()" @click="currentPosts = post" v-bind:key="post.id" class="card col-sm-4 mb-4">
      <div class="card col-sm-4 mb-4" style="width: 18rem">
        <img :src="`${post.image}`" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">post: {{ post.title }}</h5>
          <h5 class="card-title">created: {{ dateMethod(post.created_at) }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a :href="`/posts/${post.id}`">click for more info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
