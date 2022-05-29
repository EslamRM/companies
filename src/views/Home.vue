<template>
  <div class="mx-auto mb-20">
    <AppBanner class="mb-5 sm:mb-8" />
    <ProjectsGrid />
  </div>
</template>
<script>
import AppBanner from "@/components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
export default {
  name: "Home",
  components: {
    AppBanner,
    ProjectsGrid,
  },
};
</script>
<style scoped></style>
