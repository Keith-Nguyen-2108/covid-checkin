<template>
  <div class="container">
    <p
      :class="{ 'fw-b': id }"
      :style="
        name === 'city' || this.name === 'status'
          ? lighterTextColor
          : dakerTextColor
      "
    >
      {{ title }}:
    </p>
    <div v-for="(i, index) in this.arr" :key="i.id" style="margin-bottom: 16px">
      <input
        type="radio"
        :id="i.name + name"
        :value="i.value ? i.value : i.name"
        :name="name"
        :checked="index === defaultChecked"
        @click="(e) => onClickButton(e.target.value, id - 1)"
      />
      <label :for="i.name + name">{{ i.name }}</label
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomContainer",
  props: ["msg", "arr", "name", "id", "defaultChecked"],
  data() {
    return {
      title: "",
      dakerTextColor: { color: "#272D35", fontWeight: "500" },
      lighterTextColor: {
        color: "#475362",
        fontWeight: "400",
      },
    };
  },
  mounted() {
    this.title = this.id > 0 ? `${this.id}.${this.msg}` : this.msg;
    // this.onClickButton(
    //   this.array[0]?.value ? this.array[0]?.value : this.array[0]?.name,
    //   0
    // );
  },
  methods: {
    onClickButton(value, index) {
      if (this.name === "city" || this.name === "status") {
        this.$emit("update", value);
      } else this.$emit("add-answer", value, index);
    },
    // checkChoose(e) {
    //   if (this.name === "city") {
    //     this.$store.commit("setFacility", e.target.value);
    //   }
    //   else {
    //     this.checkAnswer = this.checkAnswer.push(e.target.value);
    //     console.log(this.checkAnswer);
    //   }
    //   console.log(this.$store.state.userInfor);
    // },
  },
  //   watch: {
  //     checkAnswer(newQuestion, oldQuestion) {
  //       if (this.checkAnswer.length === this.array.length) {
  //         this.disabled = false;
  //       }
  //     },
  //   },
};
</script>

<style scoped>
.container p {
  /* margin-top: 16px; */
  margin-block-start: 0;
  line-height: 24px;
  margin-bottom: 16px;
}

.container input[type="radio"] {
  width: 24px;
  height: 24px;
}

.container label {
  margin-left: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #272d35;
  height: fit-content;
  vertical-align: super;
}
</style>
