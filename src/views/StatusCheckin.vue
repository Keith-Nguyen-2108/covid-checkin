<template>
  <div class="w-95 status__checkin">
    <img
      :src="
        isSuccess === 'Successful' ? statusArray[0].img : statusArray[1].img
      "
      class="status__image"
    />

    <h6 class="text-c-primary-2">
      {{
        isSuccess === "Successful" ? statusArray[0].title : statusArray[1].title
      }}
    </h6>
    <p class="f-s-16 f-w-400 text-c-primary-1">
      {{
        isSuccess === "Successful" ? statusArray[0].desc : statusArray[1].desc
      }}
    </p>
    <p
      v-if="isSuccess !== 'Successful'"
      class="f-s-16 f-w-400 text-c-primary-1"
      style="margin-top: 20px"
    >
      Please call your Silicon Stack Line Manager or Meeting Host immediately to
      advise.
    </p>
    <button
      class="f-s-16 f-w-400 text-c-primary-1"
      type="button"
      @click="this.$router.push('/')"
    >
      Done
    </button>
  </div>
</template>

<script>
import failedImg from "../assets/failed.png";
import successImg from "../assets/success.png";
export default {
  name: "StatusCheckin",
  computed: {
    isSuccess() {
      let status = this.$store.state.userInfor.statusCheckin;
      // console.log(status);
      return status;
    },
  },
  data() {
    return {
      statusArray: [
        {
          id: 1,
          title: "Check-In Successful!",
          img: successImg,
          desc: "Thank you for completing. You can now safely enter the office. Please be sure to check-in on each office visit. Have a great day!",
        },
        {
          id: 2,
          title: "Check-In Failed!",
          img: failedImg,
          desc: "To prevent the possible spread of COVID and ensure the safety of you and your colleagues, you’re not eligible to enter our Silicon Stack site at this time. ",
        },
      ],
    };
  },
  methods: {
    start() {
      if (this.isSuccess === "Successful") {
        this.$confetti.start();
        setTimeout(() => this.$confetti.stop(), 3000);
      }
    },
  },
  mounted() {
    this.start();
  },
};
</script>

<style>
.status__checkin {
  text-align: center;
}

.status__image {
  width: 140px;
  height: 140px;
  margin-top: 70px;
}

.status__checkin h6 {
  margin-block: 20px;
  font-size: 22px;
}

.status__checkin p {
  width: 250px;
  word-break: break-word;
  margin: auto;
}

.status__checkin button {
  background: #ffffff;
  border: 1px solid #bec6d0;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 8px 60px;
  margin-top: 32px;
  margin-bottom: 86px;
}
</style>
