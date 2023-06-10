<template>
  <div>
    <BaseNavigator @toggleNav='isToggled = true' />
    <BaseMobileNav :isToggled="isToggled" @toggleCloseNav="isToggled = false" />
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
          <div class="label-L">{{ text["footer"]["contact"] }}</div>
          <div class="contact-content body-M">
            <div class="email">
              {{ text["footer"]["email"] }}: deep25952@gmail.com
            </div>
            <div class="tel">{{ text["footer"]["tel"] }}: 063-598-3619</div>
            <div class="linkedin">LinkedIn: Similan Klinsmith</div>
          </div>
        </div>
        <div class="menu">
          <div class="label-L">{{ text["footer"]["menu"] }}</div>
          <div class="menu-content body-M">
            <router-link to="/" aria-label="home">
              <div class="home">{{ text["footer"]["home"] }}</div>
            </router-link>
            <router-link to="/about-me" aria-label="about-me">
              <div class="about">{{ text["footer"]["about"] }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseMobileNav from "@/components/UI/BaseMobileNav.vue";
import BaseNavigator from "@/components/UI/BaseNavigator.vue";
import BaseTab from "@/components/UI/BaseTab.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  name: "App",
  components: {
    BaseNavigator,
    BaseTab,
    BaseButton,
    BaseMobileNav,
  },
  data() {
    return {
      lang: null,
      text: null,
      isToggled: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    openLink(link) {
      window.open(link, "_blank");
    },
    changeLanguage(lang) {
      this.$cookies.set("lang", lang);
      window.location.reload();
      this.scrollToTop();
    },
  },
  beforeMount() {
    if (this.$cookies.get("lang")) {
      this.lang = this.$cookies.get("lang");
    } else {
      this.lang = "en";
    }
    this.text = require(`@/assets/langs/${this.lang}.json`);
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
@media (max-width: 64em) {
  .footer {
    padding: 6.4rem 3.3rem;
    .col-2 {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
    }
  }
}
@media (max-width: 26.75em) {
  .footer {
    display: flex;
    flex-direction: column;
    padding: 6.4rem 1.8rem;
    .col-2 {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
    }
  }
}
</style>
