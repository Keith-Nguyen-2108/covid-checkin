<template>
  <component :is="layout"> <router-view /> </component>
</template>

<script>
import NoNavbarLayout from "./NoNavbarLayout.vue";
import { markRaw, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "AppLayout",
  setup() {
    const layout = markRaw(NoNavbarLayout);
    const route = useRoute();
    watch(
      () => route.meta?.layout,
      async (metaLayout) => {
        try {
          const component =
            metaLayout && (await import(`@/layouts/${metaLayout}.vue`));
          console.log(component);
          console.log(layout.value);
          layout.value = component?.default || NoNavbarLayout;
        } catch (e) {
          layout.value = NoNavbarLayout;
        }
      },
      { immediate: true }
    );
    return { layout };
  },
};
</script>

<style></style>
'
