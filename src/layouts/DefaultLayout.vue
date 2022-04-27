<template>
  <div>
    <top-navigation />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation.vue";
export default {
  name: "DefaultLayout",
  components: {
    TopNavigation,
  },
};
</script>
