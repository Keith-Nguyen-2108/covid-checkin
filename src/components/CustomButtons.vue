<template>
  <div class="w-95 button__container">
    <button
      type="button"
      class="btn w-45 text-c-primary-1"
      id="btnBack"
      @click="goPreviousPage(-1)"
    >
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
  name: "CustomButtons",
  props: {
    location: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    primaryButton: {
      type: String,
      required: true,
    },
    increse: {
      type: String,
      required: true,
    },
    decrease: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
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

<style scoped>
.button__container {
  display: flex;
  justify-content: space-between;
  margin-block: 16px;
  position: static;
  inset: 0%;
}

#btnBack {
  border: 1px solid #bec6d0;
  box-sizing: border-box;
  border-radius: 2px;
  background: #fff;
}

.w-45 {
  width: 45%;
}

@media screen and (max-width: 550px) {
  .button__container {
    margin: 16px;
  }
}
</style>
