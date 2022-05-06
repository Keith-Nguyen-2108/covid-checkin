<template>
  <div class="header">
    <div class="header__left-side">
      <h6 class="m-y-0 f-s-20 f-w-500">
        {{ $store.state.completedSteps }}.{{ title }}
      </h6>
      <span class="f-s-14 f-w-400 text-c-primary-1">{{ msg }}</span>
    </div>
    <div class="header__right-side">
      <progress-bar />
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";

export default {
  name: "HeaderBar",
  props: ["msg"],
  components: { ProgressBar },
  data() {
    return {
      title: "",
      currentStep: 0,
    };
  },
  created() {
    this.title = this.$route.name;
    // console.log(this.msg);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  align-items: center;
}

.header__left-side h6 {
  color: #003180;
}
</style>
