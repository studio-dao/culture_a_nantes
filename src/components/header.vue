<template>
  <div class="header_container">
    <div class="header_div_logo_CANTS">
      <router-link to="/"
        ><img
          class="header_logo_cants_img"
          src="@/assets/images/cants_logo_header.png"
          alt="logo_cants"
      /></router-link>
    </div>

    <nav class="nav_cat_musique">
      <div class="div_barre_bleue">
        <ul class="list_cat">
          <a href="#"><li>Musiques actuelles</li></a>
          <a href="#"><li>Classique</li></a>
          <a href="#"><li>Chanson</li></a>
        </ul>
      </div>
      <div class="div_barre_bleue">
        <ul class="list_cat">
          <a href="#"><li>Chorale</li></a>
          <a href="#"><li>Musique bretonne</li></a>
          <a href="#"><li>Spectacle musical</li></a>
        </ul>
      </div>
      <div class="div_barre_bleue">
        <ul class="list_cat">
          <a href="#"><li>Musiques du monde</li></a>
          <a href="#"><li>Fanfarre</li></a>
          <a href="#"><li>Lyrique</li></a>
        </ul>
      </div>
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
  /* nav */
  .nav_cat_musique {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: black;
  }
  .div_barre_bleue {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid rgb(109, 197, 220);
  }
  .list_cat {
    margin: 0px;
    padding: 5px;
    list-style: none;
  }
  .list_cat a {
    font-family: "LG.B";
    text-transform: uppercase;
    text-decoration: none;
    font-size: 10px;
    color: rgb(111, 111, 113);
  }
  .list_cat a:hover {
    color: rgb(169,169,170);
  }

  .list_cat li {
    margin: 0px 0px 5px 5px;
  }
}
</style>
