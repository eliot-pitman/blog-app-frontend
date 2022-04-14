<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BlogApp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/signup">SignUp</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/login">LogIn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/posts">Posts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Posts/new">Create Post</a>
          </li>
          <li v-if="!!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/Logout">LogOut</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>

  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/test">Test</router-link>
    |
    <router-link to="/signup">SignUp</router-link>
    |
    <router-link to="/login">LogIn</router-link>
    |
    <router-link to="/Posts">Posts</router-link>
    |
    <router-link to="/Posts/new">Create Post</router-link>
  </nav> -->
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Rubik+Puddles&family=Rubik+Wet+Paint&family=UnifrakturMaguntia&display=swap");
#app {
  font-family: "Chelsea Market", cursive;
}

a.navbar-brand {
  font-family: "Rubik Wet Paint", cursive;
  font-size: 2.25cm;
}
li.nav-item {
  font-family: "Rubik Puddles", cursive;
  font-size: 1cm;
}
</style>
