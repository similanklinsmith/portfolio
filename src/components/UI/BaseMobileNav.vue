<template>
  <BaseModal v-if="isToggled" @onClick="toggleCloseNav"/>
  <transition name="mobileNav" appear class="nav-animation">
    <div class="mobile-nav" :class="`${isToggled ? 'is-expanded' : ''}`">
      <div class="header">
        <div class="logo title-S" @click="scrollToTop">
          <div class="image-logo">
            <img src="@/assets/images/portfolio_logo.png" alt="logo" />
          </div>
          DDIVDEEP
        </div>
        <BaseButton
          :icon="'only-icon'"
          :style="'no-bg'"
          :size="'base'"
          @onClick="toggleCloseNav"
        >
          <template v-slot:icon>
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </template>
        </BaseButton>
      </div>
      <div class="menus">
        <div class="menu">
          <div class="label-S">Menu</div>
          <router-link to="/" aria-label="home">
            <BaseTab
              @onClick="toggleCloseNav"
              :tabText="text['navigators']['home']"
              :displayStyle="'button'"
            >
              <template v-slot:icon>
                <font-awesome-icon icon="fa-solid fa-house" />
              </template>
            </BaseTab>
          </router-link>
          <router-link to="/about-me" aria-label="about-me">
            <BaseTab
              @onClick="toggleCloseNav"
              :tabText="text['navigators']['about']"
              :displayStyle="'button'"
            >
              <template v-slot:icon>
                <font-awesome-icon icon="fa-solid fa-star" />
              </template>
            </BaseTab>
          </router-link>
        </div>
        <div class="language">
          <div class="label-S">Language</div>
          <BaseTab
            @onClick="changeLanguage('th')"
            :tabText="`TH | ${text['navigators']['thai']}`"
            :displayStyle="'button'"
            :style="
              lang == 'th'
                ? {
                    backgroundColor: '#DBD2FF',
                    borderRadius: '0.8rem',
                    color: '#7452FF',
                  }
                : {}
            "
          >
            <template v-slot:icon> 🇹🇭 </template>
          </BaseTab>
          <BaseTab
            @onClick="changeLanguage('en')"
            :tabText="`EN | ${text['navigators']['english']}`"
            :displayStyle="'button'"
            :style="
              lang == 'en'
                ? {
                    backgroundColor: '#DBD2FF',
                    borderRadius: '0.8rem',
                    color: '#7452FF',
                  }
                : {}
            "
          >
            <template v-slot:icon> 🇬🇧 </template>
          </BaseTab>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseModal from "@/components/UI/BaseModal.vue";
import BaseTab from "@/components/UI/BaseTab.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  name: "BaseMobileNav",
  emits: ["toggleCloseNav"],
  props: ["isToggled"],
  components: {
    BaseTab,
    BaseButton,
    BaseModal,
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
    toggleCloseNav() {
      this.$emit("toggleCloseNav");
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.nav-animation {
  transition: 0.3s all ease-in-out;
}
a:-webkit-any-link {
  color: $mainText;
}

a.router-link-active {
  color: $mainText !important;
  background-color: $primarySubtle;
  border-radius: 0.8rem;
}

a.router-link-exact-active {
  color: $primaryMain !important;
  background-color: $primarySubtle;
  border-radius: 0.8rem;
}

.heading-L {
  font-weight: 700;
  font-size: 32px;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: fixed;
  height: 100vh;
  width: 29.4rem;
  background-color: $light4;
  z-index: 10;
  top: 0%;
  right: 0%;
  transform: translateX(100%);
  &.is-expanded {
    transform: translateX(0);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1.8rem;
    height: 6.4rem;
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
  .menus {
    display: flex;
    flex-direction: column;
    padding: 0rem 2.4rem;
    row-gap: 1.6rem;
    .label-S {
      color: $description;
    }
    .menu,
    .language {
      display: flex;
      flex-direction: column;
      row-gap: 1.2rem;
    }
  }
}
</style>
