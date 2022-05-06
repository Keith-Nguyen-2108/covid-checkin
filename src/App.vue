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
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  overflow-x: hidden;
  font-family: "Roboto";
}

a,
a:focus,
a:hover {
  color: initial;
  text-decoration: none;
}

.fw-b {
  font-weight: bold;
}

.w-95,
.navbar,
.container,
hr {
  width: 500px;
  margin: auto;
}

.container {
  background: #f5f6fa;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

hr {
  width: 500px;
  margin-inline: auto;
  border-block: 1px solid #f3f5f7;
}

.btn {
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  /* font-family: "Roboto"; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.btn-primary {
  background: #0062ff;
  color: white;
  border-radius: 2px;
}

.btn-primary:hover {
  background: #0454d4;
}

@media screen and (max-width: 550px) {
  .w-95 {
    width: auto;
    margin-left: 16px;
    margin-right: 16px;
  }
  .navbar,
  .container,
  hr {
    width: 100%;
  }
}
</style>
