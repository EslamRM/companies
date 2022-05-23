<template>
  <div class="w-full mt-20 mb-20">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left m-auto"
    >
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-3xl mb-2"
      >
        Login.
      </p>
      <div>
        <label
          class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Username / Email</label
        >
        <div>
          <p class="mb-2 text-sm text-red-600 dark:text-red-500">
            {{ errorMessage }}
          </p>
        </div>
        <input
          :class="
            'password' in errors || failed
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          v-model="email"
          type="email"
          required=""
          placeholder="Your Username/Email"
          aria-label="Name"
        />
      </div>
      <div class="py-5">
        <label
          class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="email"
          >Password</label
        >
        <input
          :class="
            'password' in errors || failed
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="email"
          name="email"
          v-model="password"
          type="password"
          required=""
          placeholder="Your Password"
          aria-label="Email"
        />
      </div>
      <div>
        <button
          @click="login()"
          title="Login"
          class="px-4 w-full py-2.5 text-white text-sm sm:text-md tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
          type="button"
          aria-label="Send Message"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null,
      errorMessage: null,
      errors: {},
      failed: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState({
      access: (state) => state.auth.accesstoken,
      name: (state) => state.auth.name,
    }),
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.errorMessage = res.message;
          this.$router.push({
            name: "Home",
          });
        })
        .catch((err) => {
          if (err.response.data.errors) {
            this.errors = err.response.data.errors;
          } else {
            this.failed = true;
          }
          if (this.email || this.password) {
            this.errorMessage = err.response.data.message;
          } else {
            this.errorMessage = "Email and Password is Requird";
          }
          console.log(err.response.data.errors);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
