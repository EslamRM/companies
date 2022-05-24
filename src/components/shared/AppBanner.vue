<template>
  <div>
    <div
      class="flex flex-col sm:justify-between items-center text-center sm:flex-row"
    >
      <!-- Banner left contents -->
      <!-- <div class="w-full text-left leading-8">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Azizi Real Estate Company
      </h1>
      <p
        class="font-general-medium mt-3 text-md sm:text-xl  xl:text-xl text-center sm:text-left leading-none text-gray-400"
      >
        All You Want To Know About Our Companies is Here
      </p>
    </div> -->

      <!-- Banner right illustration -->

      <BannerSlider />
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
import BannerSlider from "./bannerSlider";

export default {
  name: "Home",
  components: {
    BannerSlider,
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>
<style scoped></style>
