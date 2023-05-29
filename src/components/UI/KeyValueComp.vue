<template>
  <div class="content-value">
    <div class="body-M leading-value">{{ leading }}</div>
    <div class="body-L value">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyValueComp",
  props: ["leading", "value"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.content-value {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  .leading-value {
    color: $description;
  }
  .value {
    color: $mainText;
  }
}
</style>
