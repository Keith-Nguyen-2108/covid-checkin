<template>
  <div class="w-95">
    <Header msg="Next: Personal Information" />
    <div class="health-checklist">
      <p>Please answer follow questions below:</p>
      <div v-for="(item, index) in questions" :key="item.id">
        <Container
          :array="answer"
          :id="item.id"
          :msg="item.desc"
          :name="item.code"
          :index="index"
          @add-answer="addAnswer"
        />
      </div>
    </div>
    <hr style="border-block: 1px solid #f3f5f7" class="w-95" />
    <Button
      location="personal-information"
      primaryButton="Next"
      type="button"
      increse="true"
      decrease="true"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import Button from "../components/Button.vue";
export default {
  name: "HealthCheckList",
  components: {
    Header,
    Button,
    Container,
  },
  data() {
    return {
      questions: [],
      // index: 0,
      answer: [
        { id: 1, name: "Yes", value: "true" },
        { id: 2, name: "No", value: "false" },
      ],
      disabled: true,
      checkAnswer: [],
      listAnswer: [],
    };
  },
  mounted() {
    this.questions = this.$store.state.country?.questionList;
    this.$store.state.country?.questionList.map((item) =>
      this.listAnswer.push(item.answer)
    );
  },
  methods: {
    checkStatus() {
      let status = "Successful";
      for (let i = 0; i < this.listAnswer.length; i++) {
        if (this.checkAnswer[i] !== this.listAnswer[i]) {
          status = "Failed";
          break;
        }
      }
      return status;
    },
    addAnswer(val, i) {
      this.checkAnswer[i] = JSON.parse(val);
      // console.log("checkAnswer", this.checkAnswer);
      if (this.listAnswer.length === this.checkAnswer.length) {
        this.$store.state.userInfor.statusCheckin = this.checkStatus();
        // let statusCheckin = this.checkStatus();
        // this.$store.commit("setUserInfro", statusCheckin);
        // console.log(this.$store.state.userInfor);
      }

      // console.log("listAnswer", this.$store.state.userInfor.statusCheckin);
      // console.log("store answer",this.$store.country?);
      for (let i = 0; i < this.questions.length; i++) {
        if (this.checkAnswer[i] === null || this.checkAnswer[i] === undefined) {
          this.disabled = true;
          break;
        } else this.disabled = false;
      }
      // this.disabled = this.checkAnswer.map(item => Object.keys(item).length ===0 ? false)
    },
  },
};
</script>

<style>
.health-checklist,
.contact-infor {
  margin-block: 30px;
}

.health-checklist p,
.contact-infor p {
  /* margin-block: 0; */
  color: #475362;
}
</style>
