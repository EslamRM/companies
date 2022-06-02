<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
          class="font-general-medium text-base sm:text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          {{ projectInfo.clientHeading }}
        </p>
        <ul class="leading-loose">
          <li
            v-for="info in projectInfo.companyInfos"
            :key="info"
            class="font-general-regular text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
          >
            <span>{{ info.title }}: </span>
            <a
              href="#"
              :class="
                info.title == 'Website' || info.title == 'Phone'
                  ? 'hover:underline cursor-pointer'
                  : ''
              "
              aria-label="Project Website and Phone"
              >{{ info.details }}</a
            >
          </li>
        </ul>
      </div>
      <!-- Single project social sharing -->
      <div>
        <p
          class="font-general-medium text-base sm:text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.socialSharingsHeading }}
        </p>
        <div class="flex items-center gap-3 mt-5">
          <a
            v-for="social in projectInfo.socialSharings"
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
        {{ projectInfo.projectDetailsHeading }}
      </p>
      <p
        v-for="projectDetail in projectInfo.projectDetails"
        :key="projectDetail.id"
        class="font-general-regular mb-5 text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ projectDetail.details }}
      </p>
      <div class="mb-7">
        <p
          class="font-general-medium text-primary-dark dark:text-primary-light text-base sm:text-2xl font-bold mb-7"
        >
          {{ projectInfo.objectivesHeading }}
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-primary-light text-base sm:text-xl font-bold mb-4 pb-2 text-left border-b"
        >
          {{ categoryInfo.categoryHeading }}
        </p>
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-10">
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
  props: ["projectInfo", "categoryInfo"],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
