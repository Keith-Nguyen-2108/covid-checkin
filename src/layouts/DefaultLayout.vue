<template>
  <div>
    <Navigation />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "DefaultLayout",
  components: {
    Navigation,
  },
};
</script>
