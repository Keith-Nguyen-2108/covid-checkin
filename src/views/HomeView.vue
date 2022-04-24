<template>
  <div class="home">
    <IntroScreen />
  </div>
</template>

<script>
// @ is an alias to /src
import IntroScreen from "./IntroScreen.vue";

// import { computed } from "vue";
export default {
  name: "HomeView",
  components: {
    IntroScreen,
  },

  // created() {
  //   console.log(this.$route.name);
  // },
  // setup() {
  //   const routeName = computed(() => {
  //     return useRoute().name;
  //   });
  //   return { routeName };
  // },
};
</script>
