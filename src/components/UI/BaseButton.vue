<template>
  <div
    v-if="icon == 'no-icon'"
    @click="btnAction"
    :class="`label-L ${style} ${size} ${icon}`"
  >
    <font-awesome-icon icon="fa-free fa-arrow-right" class="icon" /><span>{{
      buttonText
    }}</span>
  </div>
  <div
    v-if="icon == 'only-icon'"
    @click="btnAction"
    :class="`label-L ${style} ${size} ${icon}`"
    :style="size == 'base' ? { width: '4.8rem' } : { width: '4rem' }"
  >
    <slot name="icon" class="label-L"></slot>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["size", "style", "icon", "buttonText"],
  emits: ["onClick"],
  methods: {
    btnAction() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.white,
.gray,
.primary,
.secondary,
.no-bg,
.disabled {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  width: auto;
  background: $light4;
  flex: none;
  position: relative;
  transition: 0.25s all ease-in-out;
  overflow: hidden;
  width: fit-content;
  color: $mainText;
  cursor: pointer;
  .icon,
  span {
    margin: 0;
    flex-shrink: 0;
  }
  .icon {
    position: absolute;
    margin-left: -100%;
    transition: all 0.25s ease-in-out;
    font-size: 1.6rem;
    opacity: 0;
  }
  span {
    transition: 0.25s all ease-in-out;
  }
  &:hover .icon {
    margin-left: 0;
    opacity: 1;
  }
  &:hover span {
    opacity: 0;
    margin-right: -100%;
  }
}
.white {
  &:hover {
    background-color: $light2;
  }
}
.gray {
  &:hover {
    background-color: $light0;
  }
}
.no-bg {
  background-color: none;
}
.no-icon {
  border-radius: 5rem;
}
.only-icon {
  border-radius: 50%;
}
.gray {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  width: auto;
  background: $light2;
  flex: none;
  position: relative;
  transition: 0.25s all ease-in-out;
  overflow: hidden;
  width: fit-content;
  color: $description;
}
.base {
  height: 4.8rem;
}
.small {
  height: 4rem !important;
}
</style>
