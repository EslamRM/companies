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
    <div class="flex lg:hidden justify-between items-center -mt-16 px-3">
      <div class="flex justify-center items-center">
        <div class="avatar avatar-xl relative mx-auto">
          <img
            :src="logo"
            alt="profile_image"
            class="shadow-sm w-full rounded-lg"
          />
        </div>
        <h5
          class="ml-2 font-weight-bold text-gray-200 font-general-medium txt-mobile sm:text-sm md:text-md"
        >
          {{ $route.query.name }}
        </h5>
      </div>
      <div
        role="button"
        class="h-6 w-6 rounded-full bg-gray-100 flex justify-center items-center"
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
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#6366f1"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              /></svg></span
        ></router-link>
      </div>
    </div>
    <!-- <CouncilSide
      :openSide="openCouncilLinks"
      @closeSide="getSideAction($event)"
    /> -->
    <div class="mx-0 lg:mx-4 card2 card2-body blur2 shadow-blur c-header">
      <div class="flex gx-4 items-center">
        <div class="flex gx-4 d-council">
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
              class="bg-transparent nav nav-pills nav-fill justify-center items-center gap-3 sm:gap-12 md:gap-3 lg:gap-0"
              role="tablist"
            >
              <!-- grid grid-cols-3 lg:gap-0 gap-6 -->
              <li class="nav-item">
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
              <li class="nav-item flex md:hidden">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      @click="showMenu = !showMenu"
                      type="button"
                      class="inline-flex font-general-medium justify-center w-full rounded-md nav-link shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hoverfocus:outline-none"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      {{ selectedRoute }}
                    </button>
                  </div>
                  <div
                    v-if="showMenu"
                    class="origin-top-right absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      <router-link
                        class="text-sm text-gray-700 mb-0 nav-link active hover:text-indigo-600"
                        data-bs-toggle="tab"
                        :to="{
                          path: '/council/our-members',
                          query: {
                            name: $route.query.name,
                            id: $route.query.id,
                          },
                        }"
                        role="tab"
                        aria-selected="true"
                        ><span
                          @click="
                            (showMenu = !showMenu), (selectedRoute = 'Members')
                          "
                          class="ms-1 p-4 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                          >Members</span
                        ></router-link
                      >
                      <router-link
                        class="text-sm text-gray-700 mb-0 nav-link active hover:text-indigo-600"
                        data-bs-toggle="tab"
                        :to="{
                          path: '/council/companies',
                          query: {
                            name: $route.query.name,
                            id: $route.query.id,
                          },
                        }"
                        role="tab"
                        aria-selected="true"
                        ><span
                          @click="
                            (showMenu = !showMenu),
                              (selectedRoute = 'Companies')
                          "
                          class="ms-1 pb-4 font-general-medium block text-center txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg"
                          >Companies</span
                        ></router-link
                      >
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item hidden md:flex">
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
              <li class="nav-item hidden md:flex">
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
              <li class="nav-item">
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
              <li class="nav-item">
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
              <li class="nav-item">
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
                class="nav-item hidden md:flex"
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
      selectedRoute: "Members",
      showMenu: false,
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
    getSideAction(value) {
      this.openCouncilLinks = value;
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
@import "../../assets/css/council.css";
.card2-body {
  flex: 1 1 auto;
  padding: 0.5rem;
}
.c-select {
  background-image: none;
  border: 0;
  padding: 0;
  outline: none;
  color: #344767;
}
.c-select:focus {
  border: 0;
  outline: none;
  box-shadow: none;
  outline-offset: unset;
}
.c-select * {
  padding: 0px 30px;
}
.updateBanner .upload {
  width: 40px;
  height: 40px;
  right: 15px;
  top: 80px;
}
.updatelogo .upload {
  width: 25px;
  height: 25px;
  left: 8%;
  top: 50px;
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
    left: 5%;
    top: 100px;
  }
  .c-header {
    margin-top: -20px;
  }
}
@media (max-width: 768px) {
  .c-header {
    padding-bottom: 15px;
  }
  .council-banner {
    height: 150px;
  }
  .nav-link {
    padding: 0;
  }
  .container {
    max-width: none;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (max-width: 600px) {
  .nav-item .router-link-exact-active.router-link-active {
    background-color: unset !important;
    color: #5951e6 !important;
    border-radius: 10px !important;
  }
  .updatelogo .upload {
    left: 13%;
    top: 50px;
  }
}
</style>
