<template>
  <div class="heading">
    <div class="heading-M">{{ heading }}</div>
    <div class="body-L">
      {{ subheading }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadingComp",
  props: ["heading", "subheading"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.heading {
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  .heading-M {
    color: $heading;
  }
  .body-L {
    color: $subHeading;
  }
}
</style>
