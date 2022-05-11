<template>
  <div class="relative" v-if="banner">
    <img
      :src="banner"
      alt="profile_image"
      class="shadow-sm w-full rounded-lg council-banner"
    />
    <UpdateBanner @banner="getBanner($event)" class="updateBanner" />
    <UpdateLogo @logo="getLogo($event)" class="updatelogo" />
    <div class="mx-4 card2 card2-body blur2 shadow-blur mt-n4">
      <div class="row2 gx-4">
        <div class="grid grid-cols-2 lg:grid-cols-2">
          <div class="avatar avatar-xl relative mx-auto">
            <img
              :src="logo"
              alt="profile_image"
              class="shadow-sm w-full rounded-lg"
            />
          </div>
          <div class="my-auto">
            <div class="h-full">
              <h5
                class="mb-1 font-weight-bold text-dark font-general-medium txt-mobile sm:text-sm md:text-md"
              >
                Council Title
              </h5>
              <p
                class="text-sm font-weight-bold text-dark font-general-medium txt-mobile sm:text-sm"
              >
                Council Subtitle
              </p>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-3 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper relative end-0">
            <ul
              class="p-1 bg-transparent nav nav-pills nav-fill grid grid-cols-3 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-3"
              role="tablist"
            >
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link active hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/',
                    query: { id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="true"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Our Companies</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link active hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/our-members',
                    query: { id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="true"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Our Members</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/events',
                    query: { id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Events</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/gallary',
                    query: { id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Gallery</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  to="/council/contact-us"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Contact Us</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  to="/council/about-us"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >About Us</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  to="/council/settings"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Settings</span
                  ></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UpdateLogo from "../projects/UpdateLogo";
import UpdateBanner from "../projects/UploadBanner";
import instance from "../../store/axiosConfig.js";
export default {
  name: "council-header",
  data() {
    return {
      logo: null,
      banner: null,
    };
  },
  components: { UpdateLogo, UpdateBanner },
  methods: {
    check_banner() {
      this.$emit("check", this.banner);
    },
    getLogo(value) {
      this.logo = value;
    },
    getBanner(value) {
      this.banner = value;
    },
    get_council(id) {
      instance
        .get("/public/council/" + id)
        .then((res) => {
          console.log(res.data);
          this.logo = res.data.logo_image_path;
          this.banner = res.data.cover_image_path;
          this.check_banner();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.get_council(this.$route.query.id);
  },
};
</script>
<style>
.card2-body {
  flex: 1 1 auto;
  padding: 0.5rem;
}
@import "../../assets/css/council.css";
.updateBanner .upload {
  width: 40px;
  height: 40px;
  right: 15px;
  top: 80px;
}
.updatelogo .upload {
  width: 25px;
  height: 25px;
  left: 85px;
  margin-top: -13px;
  z-index: 111;
}
.updatelogo .upload svg {
  width: 15px;
}
@media (max-width: 768px) {
  .council-banner {
    height: 150px;
  }
  .nav-link {
    padding: 0;
  }
  .container {
    max-width: none;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
