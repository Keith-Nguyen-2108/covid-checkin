<template>
  <div>
    <div class="w-95">
      <header-bar msg="Next: Personal Information" />
      <div class="health-checklist">
        <p class="text-c-primary-3">Please answer follow questions below:</p>
        <div v-for="item in questions" :key="item.id">
          <custom-container
            :arrData="answer"
            :idGrpRad="item.id"
            :msg="item.desc"
            :nameGrpRad="item.code"
            @add-answer="addAnswer"
          />
        </div>
      </div>
    </div>
    <hr />
    <custom-buttons
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
import CustomContainer from "@/components/CustomContainer.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import CustomButtons from "../components/CustomButtons.vue";
export default {
  name: "HealthCheckList",
  components: {
    HeaderBar,
    CustomContainer,
    CustomButtons,
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
      console.log(val);
      this.checkAnswer[i] = JSON.parse(val);
      console.log("checkAnswer", this.checkAnswer);
      if (this.listAnswer.length === this.checkAnswer.length) {
        this.$store.state.userInfor.statusCheckin = this.checkStatus();
      }
      for (let i = 0; i < this.questions.length; i++) {
        if (this.checkAnswer[i] === null || this.checkAnswer[i] === undefined) {
          this.disabled = true;
          break;
        } else this.disabled = false;
      }
    },
  },
};
</script>

<style scoped>
.health-checklist {
  margin-block: 30px;
}
</style>
