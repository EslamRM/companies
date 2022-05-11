<template>
  <div class="container mb-5">
    <p
      class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
    >
      Add Events
    </p>
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Name"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Location"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="date"
      required=""
      placeholder="Date"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Linke"
    />
    <label
      class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
      for="name"
      >Add Image</label
    >
    <UploadImg />
  </div>
</template>
<script>
import UploadImg from "../projects/UploadBanner";
export default {
  name: "add-events",
  components: {
    UploadImg,
  },
};
</script>
