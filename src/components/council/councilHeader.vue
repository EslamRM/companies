<template>
  <div class="relative" v-if="banner">
    <img
      :src="banner"
      alt="profile_image"
      class="shadow-sm w-full rounded-lg council-banner"
    />
    <UpdateBanner
      v-if="councilId == $route.query.id"
      @banner="getBanner($event)"
      class="updateBanner"
    /><UpdateLogo
      v-if="councilId == $route.query.id"
      @logo="getLogo($event)"
      class="updatelogo"
    />
    <div class="mx-0 md:mx-4 card2 card2-body blur2 shadow-blur c-header">
      <div class="grid lg:flex gx-4">
        <div
          class="grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-1 mx-auto sm:mr-auto"
        >
          <div class="avatar avatar-xl relative mx-auto">
            <img
              :src="logo"
              alt="profile_image"
              class="shadow-sm w-full rounded-lg"
            />
          </div>
          <div class="my-auto c-name">
            <div class="h-full">
              <h5
                class="mb-1 font-weight-bold text-dark font-general-medium txt-mobile sm:text-sm md:text-md"
              >
                {{ $route.query.name }}
              </h5>
            </div>
          </div>
        </div>
        <div class="mx-auto my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper relative end-0">
            <ul
              class="p-1 m-3 bg-transparent nav nav-pills nav-fill flex-row flex lg:gap-0 gap-3 justify-center"
              role="tablist"
            >
              <!-- grid grid-cols-3 lg:gap-0 gap-6 -->
              <li class="sm:flex-auto basis-1/4">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >About</span
                  ></router-link
                >
              </li>
              <li class="sm:flex-auto basis-1/4">
                <router-link
                  class="px-0 py-1 mb-0 nav-link active hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/companies',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="true"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Companies</span
                  ></router-link
                >
              </li>
              <li class="sm:flex-auto basis-1/4">
                <router-link
                  class="px-0 py-1 mb-0 nav-link active hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/our-members',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="true"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Members</span
                  ></router-link
                >
              </li>
              <li class="sm:flex-auto basis-1/4">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/events',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Events</span
                  ></router-link
                >
              </li>
              <li class="sm:flex-auto basis-1/4">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/media',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Media</span
                  ></router-link
                >
              </li>
              <li class="sm:flex-auto basis-1/4">
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/contact-us',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                    >Contact</span
                  ></router-link
                >
              </li>
              <li
                class="sm:flex-auto basis-1/4"
                v-if="councilId == $route.query.id"
              >
                <router-link
                  class="px-0 py-1 mb-0 nav-link hover:text-indigo-600"
                  data-bs-toggle="tab"
                  :to="{
                    path: '/council/settings',
                    query: { name: $route.query.name, id: $route.query.id },
                  }"
                  role="tab"
                  aria-selected="false"
                  ><span
                    class="ms-1 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
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
import { mapState } from "vuex";
export default {
  name: "council-header",
  data() {
    return {
      logo: null,
      banner: null,
    };
  },
  components: { UpdateLogo, UpdateBanner },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState({
      councilId: (state) => state.auth.council_id,
    }),
  },
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
          this.logo = res.data.data.logo.thumbnail_image;
          this.banner = res.data.data.cover.desktop_image;
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
  left: 51%;
  top: 120px;
  background: #eee;
  color: #00f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
}
.updatelogo .upload svg {
  width: 15px;
}
@media (min-width: 976px) {
  .c-name {
    margin-right: -35px;
  }
  .updatelogo .upload {
    left: 11%;
    top: 100px;
  }
  .c-header {
    margin-top: -20px;
  }
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
