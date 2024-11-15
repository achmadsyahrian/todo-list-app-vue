<template>
  <div id="app" class="dark:bg-gray-900">
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
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
