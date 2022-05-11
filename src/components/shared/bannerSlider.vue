<template>
  <hooper>
    <slide class="relative">
      <img src="../../assets/img/c1.jpg" alt="" />
      <div class="text-center leading-8 company-txt">
        <h1
          class="font-general-semibold text-xl md:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
        >
          Azizi Real Estate Company
        </h1>
        <p
          class="font-general-medium mt-3 text-sm sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-200"
        >
          All You Want To Know About Our Companies is Here
        </p>
      </div>
    </slide>
    <slide class="relative">
      <img src="../../assets/img/c2.jpg" alt="" />
      <div class="text-center leading-8 company-txt">
        <h1
          class="font-general-semibold text-xl md:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
        >
          ATA Real Estate Company
        </h1>
        <p
          class="font-general-medium mt-3 text-sm sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-200"
        >
          All You Want To Know About Our Companies is Here
        </p>
      </div>
    </slide>
    <slide class="relative">
      <img src="../../assets/img/c3.webp" alt="" />
      <div class="text-center leading-8 company-txt">
        <h1
          class="font-general-semibold text-xl md:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
        >
          Food Company
        </h1>
        <p
          class="font-general-medium mt-3 text-sm sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-200"
        >
          All You Want To Know About Our Companies is Here
        </p>
      </div>
    </slide>
    <slide class="relative">
      <img src="../../assets/img/c4.jpg" alt="" />
      <div class="text-center leading-8 company-txt">
        <h1
          class="font-general-semibold text-xl md:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
        >
          SER Real Estate Company
        </h1>
        <p
          class="font-general-medium mt-3 text-sm sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-200"
        >
          All You Want To Know About Our Companies is Here
        </p>
      </div>
    </slide>
    <slide class="relative">
      <img src="../../assets/img/c4.jpg" alt="" />
      <div class="text-center leading-8 company-txt">
        <h1
          class="font-general-semibold text-xl md:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
        >
          Real Foodstuff Company
        </h1>
        <p
          class="font-general-medium mt-3 text-sm sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-200"
        >
          All You Want To Know About Our Companies is Here
        </p>
      </div></slide
    >
    <slide class="relative text-center">
      <img src="../../assets/img/c5.jpg" alt="" />
      <div class="text-center leading-8 company-txt">
        <h1
          class="font-general-semibold text-lg md:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
        >
          CRC Contracting Company
        </h1>
        <p
          class="font-general-medium mt-3 text-xs sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-200"
        >
          All You Want To Know About Our Companies is Here
        </p>
      </div></slide
    >
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
};
</script>
<style>
.hooper {
  height: 467px;
}
.hooper-pagination {
  display: none;
}
.hooper img {
  height: 467px;
  width: 100%;
  min-width: 100%;
}
.company-txt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 300px) {
  .hooper {
    height: 210px;
  }
}
</style>
