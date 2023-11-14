<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/weather">Weather</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
