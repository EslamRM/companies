<template>
  <div>
    <div
      class="shadow-lg relative hover:shadow-xl cursor-pointer ml-2 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    >
      <a target="blank" :href="company.website"
        ><img
          class="w-full Cimg cursor-pointer"
          :src="company.logo.desktop_image"
          alt="Sunset in the mountains"
      /></a>
      <UpdateLogo />
      <div class="px-3 sm:px-4 py-3 sm:py-6 leading-none h-80">
        <div
          class="font-general-semibold leading-normal text-sm sm:text-md md:text-base lg:text-lg xl:text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
        >
          {{ company.name }}
        </div>
        <span
          v-for="(act, index) in company.activity"
          :key="index"
          class="inline-block pl-4 pr-2 py-2 m-1 justify-between items-center font-general-medium txt-mobile text-xs md:text-md lg:text-base xl:text-xs text-ternary-dark dark:text-ternary-light font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-100 hover:bg-purple-600 hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 inline-block mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <span>{{ act.title }}</span>
        </span>
        <div class="text-xs sm:text-sm md:text-md lg:text-base xl:text-lg">
          <div
            class="flex justify-start items-center mr-0 sm:mr-1 text-left mb-2"
          >
            <!-- {{company.img}} -->
            <img
              src="../../assets/icons/phone.svg"
              class="text-gray-500 icon-size mr-1 sm:mr-2"
            />
            <p
              class="font-general-medium txt-mobile text-xs md:text-md lg:text-base xl:text-lg text-ternary-dark dark:text-ternary-light"
            >
              {{ company.phone_number }}
            </p>
          </div>
          <div
            class="flex justify-start items-center text-left mb-2 mr-0 sm:mr-1"
          >
            <img
              src="../../assets/icons/mail.svg"
              class="text-gray-500 icon-size mr-1 sm:mr-2"
            />
            <p
              class="font-general-medium txt-mobile text-xs md:text-md lg:text-base xl:text-lg text-ternary-dark dark:text-ternary-light"
            >
              {{ company.email }}
            </p>
          </div>
          <div
            class="flex justify-start items-center mr-0 sm:mr-1 text-left mb-2"
          >
            <img
              src="../../assets/icons/web.svg"
              class="text-gray-500 icon-size mr-1 sm:mr-2"
            />
            <p
              class="font-general-medium txt-mobile text-xs md:text-md lg:text-base xl:text-lg text-ternary-dark dark:text-ternary-light"
            >
              <a target="blank" :href="company.website">{{
                company.website
              }}</a>
            </p>
          </div>
          <div
            class="flex justify-start items-center mr-0 sm:mr-1 text-left mb-2"
          >
            <img
              src="../../assets/icons/location.svg"
              class="text-gray-500 icon-size mr-1 sm:mr-2"
            />
            <p
              class="font-general-medium txt-mobile text-xs md:text-md lg:text-base xl:text-lg text-ternary-dark dark:text-ternary-light"
            >
              {{company.city.name}} , {{company.area.name}}
            </p>
          </div>
        </div>
      </div>
      <div
        class="px-3 sm:px-6 pt-2 sm:pt-4 pb-1 sm:pb-2 bg-gray-200 text-sm font-semibold text-gray-700 cursor-pointer text-center sm:text-center"
      >
        <span
          class="inline-block bg-gray-200 txt-mobile text-sm font-semibold text-gray-700"
          >Shipping Services</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import UpdateLogo from "../projects/UpdateLogo";
export default {
  props: ["company"],
  components: {
    UpdateLogo,
  },
};
</script>
<style>
.update_dlogo .upload {
  width: 35px;
  height: 35px;
  right: 10px;
  margin-top: -52px;
  top: 0;
}
.icon-size {
  width: 15px;
  height: 15px;
}
.Cimg {
  border-radius: 30px 30px 0 0;
}
@media screen and (max-width: 300px) {
  .icon-size {
    width: 8px;
    height: 8px;
  }
  .Cimg {
    border-radius: 10px 10px 0 0;
  }
}
</style>
