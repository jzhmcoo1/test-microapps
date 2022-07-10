<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <nav>
      <router-link to="/microapp-sub1"
        >MicroApp sub1</router-link
      >
      |
      <router-link to="/microapp-sub2"
        >MicroApp sub2</router-link
      >
    </nav>
    <div id="frame">123</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
