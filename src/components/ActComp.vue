<template>
  <div class="act-component">
    <div class="label-L leading" @click="toggleAction">
      {{ leading }}
      <div v-if="isToggled == true">
        <font-awesome-icon icon="fa-solid fa-minus" class="icon body-L" />
      </div>
      <div v-else>
        <font-awesome-icon icon="fa-solid fa-plus" class="icon body-L" />
      </div>
    </div>
    <transition name="slide-vertical" appear>
      <div class="act-content body-M" v-if="isToggled == true">
        <slot name="content-act"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ActComp",
  props: ["isToggled", "leading"],
  methods: {
    toggleAction() {
      this.$emit("onToggle");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.act-component {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding: 1.6rem;
  .leading {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $mainText;
    transition: 0.25s all ease-in-out;
    &:hover,
    &:hover .icon {
      color: $primaryDarker;
    }
    .icon {
      transition: 0.25s all ease-in-out;
      color: $primaryMain;
    }
  }
  .act-content {
    padding: 0 2rem;
    color: $mainText;
  }
}
</style>
