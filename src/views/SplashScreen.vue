<template>
  <div class="pop-up flex-col-center" v-if="!isLoaded">
    <div class="flex-col-center">
      <div class="image">
        <client-only>
          <Vue3Lottie
            animationLink="https://assets4.lottiefiles.com/packages/lf20_sjcbakkb.json"
            :speed="0.5"
            class="lottie"
          />
        </client-only>
      </div>
      <div class="label-L">{{ text["splash"]["loading"] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      lang: null,
      isLoaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
      }
    };
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
.flex-col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pop-up {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 12;
  background-color: $primaryBG;
  padding: 2.4rem 1.6rem;
  color: $primaryDarker;
  .image {
    width: 15rem;
    height: 15rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
