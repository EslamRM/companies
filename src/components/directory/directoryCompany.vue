<template>
  <div>
    <div
      class="shadow-lg relative hover:shadow-xl cursor-pointer ml-2 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    >
      <img
        class="w-full Cimg cursor-pointer"
        src="../../assets/img/c4.jpg"
        alt="Sunset in the mountains"
      />
      <UpdateLogo />
      <div class="px-3 sm:px-4 py-3 sm:py-6 leading-none">
        <div
          class="font-general-semibold leading-normal text-sm sm:text-md md:text-base lg:text-lg xl:text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
        >
          {{ company.name }}
        </div>
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
              https://www.echo-marine.net
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
              Dubai
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
