<template>
  <div class="w-full">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl text-left card2 mx-auto"
    >
      <p
        class="font-general-medium text-left text-primary-dark dark:text-primary-light text-sm sm:text-lg mb-8"
      >
        Contact Us
      </p>
      <form action="#" class="font-general-regular space-y-7 card2-body">
        <div>
          <label
            class="block text-xs sm:text-md text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Full Name</label
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
            class="block text-xs sm:text-md text-primary-dark dark:text-primary-light mb-2"
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
            class="block text-xs sm:text-md text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Subject</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="subject"
            name="subject"
            type="text"
            required=""
            placeholder="Subject"
            aria-label="Subject"
          />
        </div>

        <div>
          <label
            class="block text-xs sm:text-md text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Message</label
          >
          <textarea
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
          ></textarea>
        </div>

        <div>
          <button
            class="text-xs sm:text-md px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped></style>
