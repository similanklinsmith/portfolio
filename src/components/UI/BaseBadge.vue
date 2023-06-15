<template>
  <div class="badge-container">
    <div class="body-S">{{ badgeText }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseBadge",
  props: ["badgeText"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.badge-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  background: $primaryBG;
  border-radius: 1.6rem;
  color: $primaryMain;
}
</style>
