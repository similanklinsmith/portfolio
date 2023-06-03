<template>
  <div class="tab body-M">{{ tabText }}</div>
</template>

<script>
export default {
  name: "BaseTab",
  props: ["tabText"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.tab {
  height: 100%;
  width: 11.9rem;
  text-align: center;
  transition: 0.3s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: $primaryMain;
    -webkit-box-shadow: 0rem 0.16rem 0rem $primaryMain;
    -moz-box-shadow: 0rem 0.16rem 0rem $primaryMain;
    box-shadow: 0rem 0.16rem 0rem $primaryMain;
  }
}
</style>
