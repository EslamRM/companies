<template>
  <div class="w-full">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl text-left card2 mx-auto"
    >
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
      >
        Settings
      </p>
      <form action="#" class="font-general-regular space-y-7 card2-body">
        <div>
          <label
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Name</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
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
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Phone Number</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="phone"
            type="tel"
            required=""
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Landline</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="landline"
            type="tel"
            required=""
            placeholder="Landline"
          />
        </div>
        <div>
          <label
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="website"
            >Website</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="website"
            name="website"
            type="text"
            required=""
            placeholder="Website"
            aria-label="website"
          />
        </div>
        <div>
          <label
            class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="about"
            >About Council</label
          >
          <textarea
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="about"
            name="about"
            required=""
            placeholder="About member"
            aria-label="Email"
          ></textarea>
        </div>
        <div>
          <Button
            title="Save"
            class="px-4 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Signup"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "../reusable/Button.vue";
export default { components: { Button } };
</script>
<style lang="scss" scoped></style>
