<template>
  <router-link
    to="/projects/single-project"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer ml-2 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div class="bg-red-100 relative rounded-t-xl">
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-1 sm:px-4 py-1 sm:py-6 leading-none">
      <p
        class="font-general-semibold txt-mobile leading-normal text-sm sm:text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-0 sm:mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium txt-mobile2 text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["project"],
};
</script>
<style scoped>
@media screen and (max-width: 300px) {
  .txt-mobile {
    font-size: 9px;
  }
  .txt-mobile2 {
    font-size: 8px;
  }
}
</style>
