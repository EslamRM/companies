<template>
  <div class="w-full mt-20 mb-20">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left m-auto"
    >
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-3xl mb-2"
      >
        Register Company.
      </p>
      <p class="text-center">
        Already have an account?
        <router-link to="/login" class="text-indigo-500 ml-1"
          >Log In</router-link
        >
      </p>
      <form action="#" class="font-general-regular space-y-7 mt-8">
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Business Name</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Business Name"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="email"
            name="email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Phone</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="phone"
            name="phone"
            type="tel"
            required=""
            placeholder="Mobile"
            aria-label="Phone"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Landline</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="tel"
            required=""
            placeholder="Landline"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Trade License Number</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="tel"
            required=""
            placeholder="License"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
          >
            Upload Trade License Number</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="file"
            required=""
            placeholder="Upload"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Activities</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Activities"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Legal Status</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Legal Status"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Issued By</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Issued By"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Country</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Country"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >City</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="City"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="password"
            >Password</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="password"
            name="password"
            type="password"
            required=""
            placeholder="Password"
            aria-label="password"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="password"
            >Password</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="password"
            name="Password"
            type="password"
            required=""
            placeholder="Repeat Password"
            aria-label="password"
          />
        </div>
        <div>
          <Button
            title="Register"
            class="px-4 py-2.5 w-full text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Signup"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "../../components/reusable/Button";
export default {
  name: "RegisterCompany",
  components: { Button },
};
</script>
<style lang="scss" scoped></style>
