<template>
  <div :class="weight" />
</template>

<script>
export default {
  name: "BaseLine",
  props: ["weight"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.thin {
  height: 0.01rem;
  background: $light1;
}
.normal {
  height: 0.02rem;
  background: $light1;
}
.bold {
  height: 0.03rem;
  background: $light1;
}
</style>
