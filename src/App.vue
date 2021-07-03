<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: "LG.B";
  src: local("LetterGothicStd-Bold"),
    url(./assets/fonts/LetterGothicStd-Bold.otf) format("otf");
}
@font-face {
  font-family: "LG.BS";
  src: local("LetterGothicStd-BoldSlanted"),
    url(./assets/fonts/LetterGothicStd-BoldSlanted.otf) format("otf");
}
@font-face {
  font-family: "LG.S";
  src: local("LetterGothicStd-Slanted"),
    url(./assets/fonts/LetterGothicStd-Slanted.otf) format("otf");
}
@font-face {
  font-family: "LG";
  src: local("LetterGothicStd"),
    url(./assets/fonts/LetterGothicStd.otf) format("otf");
}
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
