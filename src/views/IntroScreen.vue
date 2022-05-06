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
      <h6 class="f-s-20 f-w-500 text-c-primary-2">
        Welcome and thanks for checking in with Silicon Stack!
      </h6>
      <p class="f-s-14 f-w-400 text-c-primary-1">
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
      <span class="f-s-12 f-w-400">Version 1.0.1</span>
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
    },
  },
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
  text-align: initial;
  margin: 45px auto 0px;
}

.content__intro p {
  text-align: initial;
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
