<template>
  <section class="app-header container">
    <div class="logo">MosterToy</div>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/toy">Toys</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
  </section>
</template>
<script>
export default {
  name: "AppHeader",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
};
</script>
// <style lang="scss">
// .app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// .nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>
