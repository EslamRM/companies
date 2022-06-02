<template>
  <!-- Header links -->
  <div
    v-if="closeit"
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <a
      role="button"
      @click="closeMenu('/')"
      exact
      class="font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 pt-3 sm:pt-2"
      aria-label="Projects"
      >Home</a
    >
    <a
      role="button"
      @click="closeMenu('/councils')"
      class="font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Projects"
      >BCN</a
    >
    <a
      role="button"
      @click="closeMenu('/directory')"
      class="font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Projects"
      >Directory</a
    >
    <a
      role="button"
      @click="closeMenu('/directory')"
      class="font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Projects"
      >Events</a
    >
    <a
      role="button"
      @click="closeMenu('/directory')"
      class="font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Projects"
      >Media</a
    >
    <!-- <router-link
      to="/about"
      class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Me"
      >About Us</router-link
    > -->
    <a
      role="button"
      @click="closeMenu('/contact')"
      class="font-general-medium block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Contact</a
    >

    <a
      v-if="access"
      role="button"
      @click="logout()"
      class="font-general-medium block sm:hidden text-left sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      >Logout</a
    >
    <a
      v-else
      role="button"
      @click="closeMenu('/login')"
      class="font-general-medium block sm:hidden block text-left txt-mobile sm:text-sm md:text-md lg:text-base xl:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      >Login</a
    >
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      closeit: true,
    };
  },
  props: ["showModal", "isOpen"],
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState({
      access: (state) => state.auth.accesstoken,
    }),
  },
  methods: {
    closeMenu(url) {
      this.$emit("closeit", false);
      this.$router.push(url);
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
  },
};
</script>
<style lang="scss" scoped></style>
