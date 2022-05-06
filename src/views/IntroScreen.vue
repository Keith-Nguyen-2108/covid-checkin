<template>
  <div class="intro__screen w-95">
    <div class="header__intro">
      <img
        src="../assets/logo_company.png"
        alt="logo_company"
        class="big-logo"
      />
      <img src="../assets/shield.png" alt="" class="shield-image" />
    </div>
    <div class="content__intro">
      <h6>Welcome and thanks for checking in with Silicon Stack!</h6>
      <p>
        In light of COVID-19 there is a mandatory Check-In System in place, to
        ensure maximum safety for everyone who comes on premise. This check-in
        system is required for both visitors and employees and you will be
        required to check-in on each visit to the premises.
      </p>
    </div>
    <div class="btn--container">
      <button
        type="button"
        class="btn btn-primary"
        id="btnStart"
        @click="goToAnotherPage()"
      >
        Get started
      </button>
      <span>Version 1.0.1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroScreen",
  mounted() {
    this.$store.state.completedSteps = 0;
  },
  methods: {
    goToAnotherPage() {
      this.$router.push("/location");
      // window.open(
      //   "https://assets.kpmg/content/dam/kpmg/ie/pdf/2020/05/6232_COVID19_Return_to_Work_PDF_May_2020.pdf",
      //   "_blank"
      // );
    },
  },
  // setup() {
  //   const goToAnotherPage = () => {
  //     this.$router.go("/about");
  //   };
  //   return {
  //     goToAnotherPage,
  //   };
  // },
};
</script>

<style scoped>
.intro__screen {
  text-align: center;
}

.big-logo {
  width: 100%;
  height: 100px;
  margin-top: 40px;
  object-fit: contain;
}

.shield-image {
  width: 192px;
  margin-top: 16px;
  height: 206px;
  object-fit: contain;
}

.content__intro h6 {
  /* font-family: "Roboto"; */
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: initial;
  margin: 45px auto 0px;
  color: #272d35;
}

.content__intro p {
  /* font-family: "Roboto"; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: initial;
  color: #5c6c7f;
  margin-top: 12px;
  margin-bottom: 27px;
}

.btn--container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;
  inset: 0%;
}

#btnStart {
  width: 100%;
}

.intro__screen span {
  /* font-family: "Roboto"; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #afb9c5;
  margin-top: 8px;
  margin-bottom: 8px;

  display: inline-block;
}

@media screen and (max-width: 550px) {
  .big-logo {
    width: 170px;
    height: 59px;
  }
}
</style>
