<template>
  <div class="main_home">
    <div class="div_event">
      <div class="div_date">
        <p class="date">01 NOVEMBRE 2021</p>
      </div>
      <div class="modale_list_event"></div>
    </div>
    <div class="footer_home">
      <img
        class="logo_cants"
        src="@/assets/images/logo.png"
        alt="logo_culture_a_nantes"
      />
      <p class="mentions_legales">
        application hébergée par ovh: 35 rue du capitaine fracasse 45700 BOURG
        TENON
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Home",
  components: {},
};
</script>

<!-- STYLE -->
<style>
@media only screen and (max-width: 768px) {
  .main_home {
    width: 100%;
    height: 100%;

    background: linear-gradient(
      -45deg,
      #6dc5dc 2.5%,
      #fff 2.5%,
      #fff 47.5%,
      #6dc5dc 47.5%,
      #6dc5dc 52.5%,
      #fff 52.5%,
      #fff 97.5%,
      #6dc5dc 97.5%
    );
    background-size: 15px 15px;
    background-position: 0 0;
  }
  .div_event {
    width: 100%;
    height: 80%;
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .div_date {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .date {
    font-family: "LG.B";
    font-size: 40px;
    color: #f01b8a;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    text-align: end;
  }
  .modale_list_event {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 75%;
    height: 100%;
    background-color: white;
  }

  /* footer */
  .footer_home {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
  }
  .logo_cants {
    width: 15%;
  }
  .mentions_legales {
    width: 40%;
    margin-left: 20px;
    font-family: "LG.B";
    font-size: 10px;
  }
}
</style>
