<template>
  <div
    @click="onClick"
    class="body-M"
    :class="
      displayStyle == 'underlined'
        ? 'tab-undelined'
        : displayStyle == 'button'
        ? 'tab-button'
        : ''
    "
  >
    <slot name="icon" class="body-M"></slot>
    {{ tabText }}
  </div>
</template>

<script>
export default {
  name: "BaseTab",
  props: {
    tabText: { type: String },
    displayStyle: {
      type: String,
      default: "underlined",
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.icon {
  color: $primaryMain;
}
.tab-undelined {
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
.tab-button {
  display: flex;
  padding: 1.2rem 1.6rem;
  width: 100%;
  /* background: $primarySubtle; */
  border-radius: 0.8rem;
  align-items: center;
  column-gap: 1.2rem;
  cursor: pointer;
}
</style>
