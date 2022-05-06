<template>
  <div class="navbar">
    <img src="../assets/logo_company.png" alt="" class="small-logo" />
    <span>
      <p>{{ $store.state.facility }}</p>
      <p>{{ formatDate() }}</p>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TopNavigation",
  computed: {
    ...mapState(["country"]),
  },
  methods: {
    formatDate() {
      const d = new Date();
      let date = ("0" + d.getDate()).slice(-2);
      let month = ("0" + (d.getMonth() + 1)).slice(-2);
      let year = d.getFullYear();

      let hours = d.getHours();
      hours =
        hours > 12 ? ("0" + (hours - 12)).slice(-2) : ("0" + hours).slice(-2);
      let ampm = d.getHours() > 12 ? "PM" : "AM";
      let minutes = d.getMinutes();
      minutes = minutes > 10 ? minutes : ("0" + minutes).slice(-2);

      return (
        date + "/" + month + "/" + year + " " + hours + ":" + minutes + ampm
      );
    },
  },
  // watch: {
  //   country(newValue, oldValue) {
  //     if (newValue !== oldValue) {
  //       console.log(newValue);
  //     }
  //   },
  // },
  // data() {
  //   return {
  //     selectCountry: "",$store.state.userInfor.facility
  //   };
  // },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  align-items: center;
  background: #f9fafb;
  border-bottom: 1px solid #f3f3f3;
}

.navbar span {
  text-align: right;
  padding-right: 20px;
}

.navbar p {
  font-size: 12px;
  color: #5c6c7f;
  margin-top: 0px;
  margin-bottom: 0px;
}

.small-logo {
  width: 100px;
  height: 35px;
  object-fit: contain;
  padding-left: 20px;
}
</style>
