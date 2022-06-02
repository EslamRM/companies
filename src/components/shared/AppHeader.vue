<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-3 sm:my-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos -->
        <div>
          <router-link to="/"
            ><img
              v-if="theme === 'light'"
              src="@/assets/img/brands/round.jpg"
              class="w-7 md:w-16"
              alt="Dark Logo"
            />
            <img
              v-else
              src="@/assets/img/brands/round.jpg"
              class="w-7 md:w-16"
              alt="Light Logo"
            />
          </router-link>
        </div>
        <div class="flex">
          <!-- Small screen hamburger menu -->
          <div class="sm:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light pl-2"
              >
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  clip-rule="evenodd"
                ></path>
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks
        @closeit="closeMenu2($event)"
        :showModal="showModal"
        :isOpen="isOpen"
      />

      <!-- Header right section buttons -->
      <div class="hidden sm:flex justify-between items-center md:flex-row">
        <!-- Theme switcher large screen -->
        <a
          v-if="access"
          role="button"
          @click="logout()"
          class="font-general-medium block text-left sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
          >Logout</a
        >
        <router-link
          v-else
          to="/login"
          class="font-general-medium block text-left sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
          >Login</router-link
        >
        <router-link
          v-if="access"
          :to="{
            path: '/council',
            query: { name: name, id: userId },
          }"
        >
          <img
            alt=""
            :src="userImg"
            class="rounded-full cursor-pointer w-7 md:w-16 shadow-lg"
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppHeaderLinks,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState({
      access: (state) => state.auth.accesstoken,
      name: (state) => state.auth.name,
      userImg: (state) => state.auth.user_img,
      userId: (state) => state.auth.council_id,
    }),
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    closeMenu2(value) {
      console.log(value);
      this.isOpen = value;
    },
    logout() {
      try {
        this.$store.dispatch("LOGOUT").then((res) => {
          this.$router.push({ name: "Login" });
        });
      } catch (err) {
        console.log(err);
      }
    },
    updateTheme(theme) {
      this.theme = theme;
    },
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
</style>
