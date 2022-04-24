<template>
  <div
    style="display: flex; justify-content: space-between; margin: 20px auto"
    class="w-95"
  >
    <button type="button" class="btnBack btn w-45" @click="goPreviousPage(-1)">
      Back
    </button>
    <button
      :type="type"
      class="btn w-45"
      :class="!disabled && 'btn-primary'"
      :disabled="disabled"
      @click="goNextPage"
    >
      {{ primaryButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: [
    "location",
    "type",
    "primaryButton",
    "increse",
    "decrease",
    "disabled",
  ],
  methods: {
    goPreviousPage() {
      this.$router.go(-1);
      if (this.decrease === "true") {
        this.$store.commit("updateCompletedStep", -1);
      }
    },
    goNextPage() {
      if (this.type === "button") {
        this.$router.push(`/${this.location}`);
        if (this.increse === "true") {
          this.$store.commit("updateCompletedStep", 1);
        }
      } else {
        this.$emit("is-submit", true);
      }
    },
  },
};
</script>

<style>
.btnBack {
  border: 1px solid #bec6d0;
  box-sizing: border-box;
  border-radius: 2px;
  color: #5c6c7f;
}

.w-45 {
  width: 45%;
}
</style>
