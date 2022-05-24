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
      <div class="px-3 sm:px-4 py-3 sm:py-6 h-auto sm:h-80">
        <div
          class="font-general-semibold leading-normal text-md md:text-base lg:text-lg xl:text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
        >
          {{ company.name }}
        </div>
        <span
          v-for="(act, index) in company.activity"
          :key="index"
          class="inline-block pl-2 pr-2 py-1 m-1 justify-between items-center font-general-medium txt-mobile2 text-xs text-ternary-dark dark:text-ternary-light font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-100 hover:bg-purple-600 hover:text-gray-100"
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
        <div class="text-md xl:text-lg overflow-hidden">
          <div
            class="flex justify-start items-center mr-0 sm:mr-1 text-left mb-2"
          >
            <!-- {{company.img}} -->
            <img
              src="../../assets/icons/phone.svg"
              class="text-gray-500 icon-size mr-1 sm:mr-2"
            />
            <p
              class="font-general-medium text-md md:text-base lg:text-md xl:text-xl"
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
              class="font-general-medium text-md md:text-base lg:text-md xl:text-xl"
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
              class="font-general-medium text-md md:text-base lg:text-md xl:text-xl"
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
              class="font-general-medium text-md md:text-base lg:text-md xl:text-xl"
            >
              {{ company.city.name }} , {{ company.area.name }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center px-1 sm:px-2 pt-2 sm:pt-4 pb-1 sm:pb-2 text-sm font-semibold text-gray-700 cursor-pointer text-center sm:text-center"
      >
        <button
          :class="
            company.activePackage[0].name != 'Directory'
              ? 'text-xs py-2'
              : 'text-sm py-2.5'
          "
          class="col-6 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 m-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View Website
        </button>
        <button
          v-if="
            company.activePackage[0].name == 'Full' ||
            company.activePackage[0].name == 'Profile'
          "
          :class="
            company.activePackage[0].name != 'Directory'
              ? 'text-xs py-2'
              : 'text-sm py-2.5'
          "
          class="col-6 w-full ocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 m-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          View Profile
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["company"],
  components: {},
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
