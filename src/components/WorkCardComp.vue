<template>
  <div class="work">
    <div class="leading">
      <div class="top">
        <LogoCardComp :style="logoStyle" />
        <div class="badges">
          <BaseBadge v-for="badge, index in badges" :key="index" :badgeText="badge"/>
        </div>
      </div>
      <div class="content">
        <div class="title-L">{{ title }}</div>
        <div class="body-M">{{ year }}</div>
      </div>
    </div>
    <BaseButton
      :icon="'no-icon'"
      :style="'secondary'"
      :size="'small'"
      :buttonText="buttonText"
      @onClick="cardClickAction"
    />
  </div>
</template>

<script>
import BaseBadge from "@/components/UI/BaseBadge.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import LogoCardComp from "@/components/LogoCardComp.vue";
export default {
  name: "WorkCardComp",
  components: {
    LogoCardComp,
    BaseBadge,
    BaseButton,
  },
  props: ["title", "year", "badges", "logoStyle", "buttonText"],
  methods: {
    cardClickAction() {
      this.$emit('cardClickAction')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.work {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.4rem;
  min-height: 27.8rem;
  height: 27.8rem;
  background-color: $light4;
  border-radius: 1.2rem;
  transition: 0.3s all ease-in-out;
  &:hover {
    box-shadow: 0px 8px 16px rgba(219, 210, 255, 0.2);
  }
  .leading {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    .top {
      display: flex;
      justify-content: space-between;
      .badges {
        display: flex;
        column-gap: 0.4rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      row-gap: 0.4rem;
      .title-L {
        color: $mainText;
      }
      .body-M {
        color: $primaryLighter;
      }
    }
  }
}
</style>
