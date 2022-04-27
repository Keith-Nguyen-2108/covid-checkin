<template>
  <div class="container">
    <p :class="{ 'fw-b': id }" style="margin-bottom: 1rem">{{ title }}:</p>
    <div v-for="i in this.array" :key="i.id">
      <input
        type="radio"
        :id="i.name + name"
        :value="i.value ? i.value : i.name"
        :name="name"
        @click="(e) => onClickButton(e.target.value, index)"
      />
      <label :for="i.name + name">{{ i.name }}</label
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomContainer",
  props: ["msg", "array", "name", "id", "index"],
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    this.title = this.id > 0 ? `${this.id}.${this.msg}` : this.msg;
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

<style>
.fw-b {
  font-weight: bold;
}

.container {
  background: #f5f6fa;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.container p {
  /* margin-top: 16px; */
  margin-block-start: 0;
  line-height: 24px;
}

.container input[type="radio"] {
  margin-bottom: 20px;
}

.container label {
  margin-left: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #272d35;
}
</style>
