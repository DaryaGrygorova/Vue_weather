<template>
  <nav>
    <router-link to="/">About</router-link>
    <router-link to="/weather">Weather</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $text-primary;

    &.router-link-exact-active {
      color: $text-accent;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
