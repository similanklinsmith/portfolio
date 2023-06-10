<template>
  <teleport to="#portal-target">
    <div class="modal" @click="onClick"></div
  ></teleport>
</template>

<script>
export default {
  name: "BaseModal",
  emits: ["onClick"],
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: $overlay;
  z-index: 9;
}
</style>
