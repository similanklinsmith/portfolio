<template>
  <div class="skill">
    <div class="leading-icon body-M">
      <font-awesome-icon :icon="`fa-solid ${icon}`" />
    </div>
    <KeyValueComp :leading="leading" :value="value" />
  </div>
</template>

<script>
import KeyValueComp from "./UI/KeyValueComp.vue";
export default {
  name: "SkillComp",
  components: { KeyValueComp },
  props: ["icon", "leading", "value"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.skill {
  display: flex;
  padding: 2.4rem 3.2rem;
  column-gap: 2.4rem;
  border-radius: 1.2rem;
  background-color: $light4;
  .leading-icon {
    min-width: 4.8rem;
    min-height: 4.8rem;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: $secondary4;
    color: $secondaryMain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 64em) {
  .skill {
    flex-direction: column;
    row-gap: 2.4rem;
    width: 24.5rem;
  }
}
@media (max-width: 26.75em) {
  .skill {
    flex-direction: row;
    width: 100%;
    padding: 2.4rem 2.4rem;
  }
}
</style>
