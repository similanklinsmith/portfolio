<template>
  <div class="experience">
    <div class="leading">
      <div class="icon label-L">{{ emoji }}</div>
      <div class="leading-text">
        <div class="label-L">{{ leading }}</div>
        <div class="label-S">{{ period }}</div>
      </div>
    </div>
    <div class="lower-text body-M">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkComp",
  props: ["emoji", "leading", "period", "content"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.experience {
  background-color: $light4;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem;
  row-gap: 1.6rem;
  width: 100%;
  .leading {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    align-items: center;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      background-color: $primaryBG;
    }
    .leading-text {
      display: flex;
      flex-direction: column;
      row-gap: 0.2rem;
      .label-L {
        color: $primaryMain;
      }
      .label-S {
        color: $dark4;
      }
    }
  }
  .lower-text {
    color: $mainText;
    text-align: center;
  }
}
</style>
