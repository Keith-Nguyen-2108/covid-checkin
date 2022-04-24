<template>
  <GradientProgress
    :diameter="diameter"
    :total-steps="totalSteps"
    :completed-steps="$store.state.completedSteps"
    :animate-speed="animateSpeed"
    :stroke-width="strokeWidth"
    :inner-stroke-width="innerStrokeWidth"
    :stroke-linecap="strokeLinecap"
    :start-color="startColor"
    :stop-color="stopColor"
    :inner-stroke-color="innerStrokeColor"
    :timing-func="timingFunc"
  >
    <span style="font-size: 12px"
      >{{ $store.state.completedSteps }} of {{ totalSteps }}</span
    >
  </GradientProgress>
</template>

<script>
import GradientProgress from "vue3-radial-progress";
export default {
  name: "ProgressBar",
  components: {
    GradientProgress,
  },
  data() {
    return {
      // completedSteps: 1,
      totalSteps: 3,
      animateSpeed: 1000,
      diameter: 50,
      strokeWidth: 3,
      innerStrokeWidth: 3,
      strokeLinecap: "round",
      startColor: "#00C58E",
      stopColor: "#00E0A1",
      innerStrokeColor: "#f2f2f2",
      timingFunc: "linear",
    };
  },
};
</script>

<style></style>
