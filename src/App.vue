<template>
  <div id="app" class="dark:bg-gray-900">
    <NavbarSidebar v-if="!$route.meta.hideNavbar" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarSidebar from './components/NavbarSidebar.vue';

export default {
  name: 'App',
  components: {
    NavbarSidebar,
  },

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
