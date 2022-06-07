<template>
  <div class="mx-auto mb-20">
    <AppBanner class="mb-5 sm:mb-8" />
    <CompaniesGrid />
  </div>
</template>
<script>
import AppBanner from "@/components/shared/AppBanner";
import CompaniesGrid from "../components/projects/CompaniesGrid.vue";
export default {
  name: "Home",
  components: {
    AppBanner,
    CompaniesGrid,
  },
};
</script>
<style scoped></style>
