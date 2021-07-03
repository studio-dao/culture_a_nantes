<template>
  <div class="header_container">
    <div class="header_div_logo_CANTS">
      <img class="header_logo_cants_img" src="@/assets/images/cants_logo_header.png" alt="logo_cants"/>
    </div>
    <nav class="header_nav_musique">
      <router-link to="Musiquesactuelles">Musiques actuelles</router-link>
    </nav>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Header",
};
</script>

<!-- STYLE -->
<style>
@media only screen and (max-width: 768px) {
  .header_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header_div_logo_CANTS {
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .header_logo_cants_img {
    width: 250px;
  }
  .header_nav_musique {
    height: 100px;
    background-color: rgb(17, 17, 17);
  }
  .header_titre_categorie_zik {
    font-family: "LetterGothicStd";
    color: rgb(111, 111, 113);
  }
}
</style>
