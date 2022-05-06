<template>
  <component :is="layout"> <router-view /> </component>
</template>

<script>
// import AppLayout from "@/layouts/AppLayout";
// import store from "./store";
const defaultLayout = "default";
export default {
  name: "App",
  computed: {
    layout() {
      // Sử dụng this.$route.meta.layout để kiểm tra xem trong route có khai báo meta tương ứng hay không?
      // Nếu không có khai báo layout -> sẽ hiển thị layout default
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
  // mounted() {
  //   // if back button is pressed
  //   window.onpopstate = function (event) {
  //     alert(
  //       "location: " +
  //         document.location +
  //         ", state: " +
  //         JSON.stringify(event.state)
  //     );
  //     store.commit("updateCompletedStep", -1);
  //   };
  // },
  // components: {
  //   AppLayout,
  // },
};
</script>
<style>
@import "./styles/index.css";
</style>
