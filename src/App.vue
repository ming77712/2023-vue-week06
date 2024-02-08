<template>
  <RouterView />
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "./assets/all.scss";

nav {

  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
