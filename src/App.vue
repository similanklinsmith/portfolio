<template>
  <div>
    <div class="nav-bar" id="navigator">
      <div class="logo title-S" @click="scrollToTop">
        <div class="image-logo">
          <img src="@/assets/images/portfolio_logo.png" alt="logo" />
        </div>
        DDIVDEEP
      </div>
      <div class="tabs">
        <router-link to="/" aria-label="home">
          <BaseTab :tabText="'Home'" />
        </router-link>
        <router-link to="/about-me" aria-label="about-me">
          <BaseTab :tabText="'About'" />
        </router-link>
        <!-- <div class="tab body-M">TH|EN</div> -->
      </div>
    </div>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="route" appear>
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
    <div class="footer" v-motion-slide-visible-once-bottom>
      <div class="col-1">
        <div class="logo-container">
          <div class="logo">
            <img src="@/assets/images/portfolio_logo.png" alt="logo" />
          </div>
          <div class="title-M">DDIVDEEP</div>
        </div>
        <div class="looking-more">
          <BaseButton
            :icon="'only-icon'"
            :style="'gray'"
            :size="'small'"
            @onClick="
              openLink(
                'https://www.linkedin.com/in/similan-klinsmith-a89379258/'
              )
            "
          >
            <template v-slot:icon>
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </template>
          </BaseButton>
          <BaseButton
            :icon="'only-icon'"
            :style="'gray'"
            :size="'small'"
            @onClick="openLink('https://github.com/similanklinsmith')"
          >
            <template v-slot:icon>
              <font-awesome-icon icon="fa-brands fa-github" />
            </template>
          </BaseButton>
          <a href="mailto:deep25952@gmail.com">
            <BaseButton :icon="'only-icon'" :style="'gray'" :size="'small'">
              <template v-slot:icon>
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </template>
            </BaseButton>
          </a>
        </div>
        <div class="copyright body-M">
          © 2023 Similan Klinsmith. All rights reserved. <span>DDIVDEEP</span>
        </div>
      </div>
      <div class="col-2">
        <div class="contact">
          <div class="label-L">Contact</div>
          <div class="contact-content body-M">
            <div class="email">Email: deep25952@gmail.com</div>
            <div class="tel">Tel: 063-598-3619</div>
            <div class="linkedin">LinkedIn: Similan Klinsmith</div>
          </div>
        </div>
        <div class="menu">
          <div class="label-L">Menu</div>
          <div class="menu-content body-M">
            <router-link to="/" aria-label="home">
              <div class="home">Home</div>
            </router-link>
            <router-link to="/about-me" aria-label="about-me">
              <div class="about">About</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTab from "@/components/UI/BaseTab.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  name: "App",
  components: {
    BaseTab,
    BaseButton,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      window.scrollY > document.getElementById("navigator").offsetTop
        ? document.getElementById("navigator").classList.add("fixed")
        : document.getElementById("navigator").classList.remove("fixed");
    });
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
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4.8rem 0 0rem;
  gap: 9rem;
}
.footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  width: 100%;
  padding: 6.4rem 17.6rem;
  background-color: $light1;
  .col-1 {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    .logo-container {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;
      .logo {
        width: 3.6rem;
        height: 3.6rem;
        img {
          width: 100%;
          height: 100%;
          max-width: 3.6rem;
          max-height: 3.6rem;
        }
      }
      .title-M {
        color: $mainText;
      }
    }
    .looking-more {
      display: flex;
      column-gap: 1.6rem;
    }
  }
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.4rem;
    .contact,
    .menu {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
      color: $mainText;
      width: 100%;
      .contact-content,
      .menu-content {
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
      }
    }
  }
}
</style>
