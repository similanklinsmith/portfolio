<template>
  <div class="attachment body-M" @click="onClick">
    <div class="leading">
      <div class="leading-icon">
        <font-awesome-icon :icon="`fa-solid fa-${leadingIcon}`" />
      </div>
      <div
        class="content"
        :style="isActive == false ? { color: '#DBDBE7 !important' } : {}"
      >
        {{ content }}
      </div>
    </div>
    <div class="trailing-icon" v-if="isTrailing">
      <font-awesome-icon icon="fa-solid fa-arrow-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseAttachment",
  props: {
    isTrailing: Boolean,
    leadingIcon: String,
    content: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.attachment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  .leading {
    display: flex;
    column-gap: 1.2rem;
    align-items: center;
    .leading-icon {
      height: 4rem;
      width: 4rem;
      min-width: 4rem;
      border-radius: 0.8rem;
      background-color: $light2;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $description;
      transition: 0.3s all ease-in-out;
    }
    .content {
      transition: 0.3s all ease-in-out;
      color: $mainText;
    }
  }
  .trailing-icon {
    color: $primaryMain;
  }
  &:hover {
    .leading {
      .leading-icon {
        background-color: $secondary4;
        color: $secondaryMain;
      }
      .content {
        color: $secondaryMain;
      }
    }
  }
}
</style>
