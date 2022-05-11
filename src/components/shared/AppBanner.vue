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
    <div>
      <UpdateBanner />
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
import BannerSlider from "./bannerSlider";
import UpdateBanner from "../projects/UpdateLogo";
// url and title must is required

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
      // slides: [
      //   "https://source.unsplash.com/random/800x400?i=1",
      //   "https://source.unsplash.com/random/800x400?i=2",
      //   "https://source.unsplash.com/random/800x400?i=3",
      //   "https://source.unsplash.com/random/800x400?i=4",
      //   "https://source.unsplash.com/random/800x400?i=5",
      //   "https://source.unsplash.com/random/800x400?i=6",
      // ],
    };
  },
  components: {
    BannerSlider,
    UpdateBanner,
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
