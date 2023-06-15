<template>
  <div class="logo-container" :class="style">
    <div class="logo">
      <img
        v-if="style == 'portfolio'"
        src="@/assets/images/logo_card/portfolio_mini_logo.png"
        alt="portfolio logo"
      />
      <img
        v-if="style == 'momento'"
        src="@/assets/images/logo_card/momento.png"
        alt="momento logo"
      />
      <div v-if="style == 'internship'" class="body-M">I</div>
      <img
        v-if="style == 'twitter'"
        src="@/assets/images/logo_card/twitter.png"
        alt="twitter logo"
      />
      <div v-if="style == 'nerdystyle'" class="body-M">N</div>
      <img
        v-if="style == 'drive'"
        src="@/assets/images/logo_card/drive.png"
        alt="twitter logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoCardComp",
  props: ["style"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2.6rem;
  height: 2.6rem;
  min-width: 2.6rem;
  min-height: 2.6rem;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
.portfolio {
  background-color: $primaryMain;
}
.momento {
  background-color: $primaryDarker;
}
.internship {
  background-color: $dark4;
  color: $light4;
}
.twitter {
  background-color: #1da1f2;
}
.nerdystyle {
  background-color: #eb435f;
  color: $light4;
}
.drive {
  background-color: $primaryBG;
}
</style>
