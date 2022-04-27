<template>
  <div class="navbar">
    <img src="../assets/logo_company.png" alt="" class="small-logo" />
    <span>
      <p>{{ $store.state.facility }}</p>
      <p>07/06/2020 08:00PM</p>
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

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  align-items: center;
  background: #f9fafb;
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
