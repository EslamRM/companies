<template>
  <div class="mx-auto mb-20">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8" />

    <!-- Projects -->
    <ProjectsGrid />

    <!-- Load more projects button -->
    <div class="mt-5 sm:mt-20 flex justify-center">
      <router-link
        to="/projects"
        class="font-general-medium flex items-center px-2 sm:px-6 py-1 sm:py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white txt-mobile2 text-xs sm:text-xl duration-300"
        aria-label="More Projects"
      >
        <Button title="Show More" />
      </router-link>
    </div>
  </div>
</template>
<script>
import AppBanner from "@/components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import Button from "../components/reusable/Button.vue";

export default {
  name: "Home",
  components: {
    AppBanner,
    ProjectsGrid,
    Button,
  },
};
</script>
<style scoped></style>
