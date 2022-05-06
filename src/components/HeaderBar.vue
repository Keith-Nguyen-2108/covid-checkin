<template>
  <div class="header">
    <div class="header__left-side">
      <h6>{{ $store.state.completedSteps }}.{{ title }}</h6>
      <span>{{ msg }}</span>
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

<style>
.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  align-items: center;
}

.header__left-side span {
  color: #5c6c7f;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

.header__left-side h6 {
  color: #003180;
  margin-block: 0;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
</style>
