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
/* .img-holder {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.img-holder:hover .overlay {
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
} */
</style>
