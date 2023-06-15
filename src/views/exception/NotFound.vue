<template>
  <div class="not-found-container">
    <BaseVector
      class="not-found"
      :vectorStyle="'404'"
    />
  </div>
</template>

<script>
import BaseVector from "@/components/UI/BaseVector.vue";
export default {
  name: "NotFound",
  components: {
    BaseVector,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.not-found-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
