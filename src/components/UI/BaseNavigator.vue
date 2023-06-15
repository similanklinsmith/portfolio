<template>
  <div class="nav-bar" id="navigator">
    <div class="logo title-S" @click="scrollToTop">
      <div class="image-logo">
        <img src="@/assets/images/portfolio_logo.png" alt="logo" />
      </div>
      DDIVDEEP
    </div>
    <div class="tabs">
      <router-link to="/" aria-label="home">
        <BaseTab :tabText="text['navigators']['home']" />
      </router-link>
      <router-link to="/about-me" aria-label="about-me">
        <BaseTab :tabText="text['navigators']['about']" />
      </router-link>
      <router-link to="/all-work" aria-label="all-work">
        <BaseTab :tabText="text['navigators']['work']" />
      </router-link>
      <div class="langs body-M">
        <span
          class="TH"
          @click="changeLanguage('th')"
          :style="lang == 'th' ? { color: '#7452FF', fontWeight: '600' } : {}"
          >TH</span
        >|<span
          class="EN"
          @click="changeLanguage('en')"
          :style="lang == 'en' ? { color: '#7452FF', fontWeight: '600' } : {}"
          >EN</span
        >
      </div>
    </div>
    <div class="burger-bar body-L" @click="toggleNav">
      <font-awesome-icon icon="fa-solid fa-bars-staggered" />
    </div>
  </div>
</template>

<script>
import BaseTab from "@/components/UI/BaseTab.vue";
export default {
  name: "BaseNavigator",
  components: {
    BaseTab,
  },
  data() {
    return {
      lang: null,
      text: null,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$cookies.set("lang", lang);
      window.location.reload();
      this.scrollToTop();
    },
    toggleNav() {
      this.$emit('toggleNav')
    }
  },
  beforeMount() {
    if (this.$cookies.get("lang")) {
      this.lang = this.$cookies.get("lang");
    } else {
      this.lang = "en";
    }
    this.text = require(`@/assets/langs/${this.lang}.json`);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.fixed {
  z-index: 8;
  top: 0%;
  position: fixed !important;
  background-color: rgba(252, 252, 255, 0.75) !important;
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%) !important;
  -webkit-backdrop-filter: blur(10px) saturate(100%) contrast(45%)
    brightness(130%) !important;
  box-shadow: 0 8px 32px 0 rgba(219, 210, 255, 0.37);
  transition: 0.3s all ease-in-out;
}
.nav-bar {
  transition: 0.3s all ease-in-out;
  position: relative;
  background: $light4;
  width: 100%;
  padding: 0 17.6rem;
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: $mainText;
    display: flex;
    column-gap: 1.2rem;
    align-items: center;
    cursor: pointer;
    .image-logo {
      width: 3.6rem;
      height: 3.6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.tabs {
  display: flex;
  column-gap: 0.8rem;
  height: 100%;
  .langs {
    display: flex;
    column-gap: 0.8rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 11.9rem;
    color: $mainText;
    span {
      cursor: pointer;
      transition: 0.3s all ease-in-out;
      &:hover {
        color: $primaryMain;
      }
    }
  }
}
.burger-bar {
  display: none;
}
@media (max-width: 64em) {
  .nav-bar {
    padding: 0 3.3rem;
  }
}
@media (max-width: 26.75em) {
  .nav-bar {
    padding: 0 1.8rem;
  }
  .tabs {
    display: none;
  }
  .burger-bar {
    display: block;
    color: $mainText;
  }
}
</style>
