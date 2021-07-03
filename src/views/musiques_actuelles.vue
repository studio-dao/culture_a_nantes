<template>
  <div class="mus_act_main">
    <div class="main_musact">
      <CompMusActuelles/>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
import CompMusActuelles from "../components/comp_mus_actuelles.vue";

export default {
  name: "MusiquesActuelles",

  components: {
    CompMusActuelles,
  },
};
</script>

<!-- STYLE -->
<style></style>
