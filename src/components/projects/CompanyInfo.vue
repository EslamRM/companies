<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
          class="font-general-medium text-base sm:text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          {{ CompanyInfo.clientHeading }}
        </p>
        <ul class="leading-loose">
          <li
            class="font-general-regular text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
          >
            <span>Name: </span>
            <a href="#" aria-label="Project Website and Phone">{{
              CompanyInfo.name
            }}</a>
          </li>
          <li
            class="font-general-regular text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
          >
            <span>Email: </span>
            <a href="#" aria-label="Project Website and Phone">{{
              CompanyInfo.email
            }}</a>
          </li>
          <li
            class="font-general-regular text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
          >
            <span>Phone: </span>
            <a href="#" aria-label="Project Website and Phone">{{
              CompanyInfo.phone
            }}</a>
          </li>
          <li
            class="font-general-regular text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
          >
            <span>Services:</span>
            <a href="#" aria-label="Project Website and Phone"
              >{{ CompanyInfo.services }}:</a
            >
          </li>
          <li
            class="font-general-regular text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
          >
            <span>Website: </span>
            <a href="#" aria-label="Project Website and Phone">{{
              CompanyInfo.website
            }}</a>
          </li>
        </ul>
      </div>
      <!-- Single project social sharing -->
      <div>
        <p
          class="font-general-medium text-base sm:text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ CompanyInfo.socialSharingsHeading }}
        </p>
        <div class="flex items-center gap-3 mt-5">
          <a
            v-for="social in CompanyInfo.socialSharings"
            :key="social.id"
            :href="social.url"
            target="__blank"
            aria-label="Share Project"
            class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            ><i :data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i
          ></a>
        </div>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-base sm:text-2xl font-bold mb-7"
      >
        {{ CompanyInfo.projectDetailsHeading }}
      </p>
      <p
        v-for="projectDetail in CompanyInfo.projectDetails"
        :key="projectDetail.id"
        class="font-general-regular mb-5 text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ projectDetail.details }}
      </p>
      <div class="mb-7">
        <p
          class="font-general-medium text-primary-dark dark:text-primary-light text-base sm:text-2xl font-bold mb-7"
        >
          {{ CompanyInfo.objectivesHeading }}
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-primary-light text-base sm:text-xl font-bold mb-4 pb-2 text-left border-b"
        >
          {{ categoryInfo.categoryHeading }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="item in categoryInfo.categoryProducts" :key="item.id">
            <img
              :src="item.img"
              class="rounded-xl cursor-pointer"
              :alt="item.title"
            />
            <h5
              class="font-general-regular text-primary-dark dark:text-primary-light text-sm font-bold my-1 text-left"
            >
              {{ item.title }}
            </h5>
            <p class="text-sm">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";

export default {
  props: ["CompanyInfo", "categoryInfo"],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
