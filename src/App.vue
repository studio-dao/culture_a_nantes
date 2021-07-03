<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "../src/components/header.vue";

export default {
  name: "App",
  components: {
    Header

  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(242, 242, 242);
}
</style>
