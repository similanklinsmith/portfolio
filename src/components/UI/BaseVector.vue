<template>
  <div>
    <div class="container-vector" v-if="vectorStyle == 'not-found'">
      <div class="image-vector">
        <img src="@/assets/images/not_found.png" alt="not found" />
      </div>
      <div class="vector-content">
        <div class="leading label-L">{{ text["vector"]["not-found"] }}</div>
        <div class="body-M">{{ text["vector"]["not-found-desc"] }}</div>
      </div>
    </div>
    <div class="container-vector" v-if="vectorStyle == '404'">
      <div class="image-vector">
        <img src="@/assets/images/404.png" alt="404 not found" />
      </div>
      <div class="vector-content">
        <div class="leading label-L">{{ text["vector"]["404"] }}</div>
        <div class="body-M">{{ text["vector"]["404-desc"] }}</div>
        <BaseButton
          :icon="'no-icon'"
          :style="'primary'"
          :size="'base'"
          :buttonText='text["vector"]["404-button"]'
          @onClick="$router.replace('/')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  name: "BaseVector",
  props: ["vectorStyle"],
  components: { BaseButton },
  data() {
    return {
      lang: null,
      text: null,
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
.container-vector {
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  align-items: center;
  .image-vector {
    width: 22.1rem;
    height: 22.1rem;
    min-width: 22.1rem;
    min-height: 22.1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .vector-content {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
    align-items: center;
    color: $description;
  }
}
</style>
