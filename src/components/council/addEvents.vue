<template>
  <div class="container mb-5">
    <p
      class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
    >
      Add Events
    </p>
    <input
      :class="
        'name' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Name"
      v-model="name"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.name ? errors.name[0] : "" }}
    </p>
    <input
      :class="
        'location' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Location"
      v-model="location"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.location ? errors.location[0] : "" }}
    </p>
    <input
      :class="
        'event_date' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="date"
      required=""
      placeholder="Date"
      v-model="event_date"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.event_date ? errors.event_date[0] : "" }}
    </p>
    <input
      :class="
        'link' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Linke"
      v-model="link"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.link ? errors.link[0] : "" }}
    </p>
    <label
      class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
      for="name"
      >Add Image</label
    >
    <UploadImg
      @file="getimg($event)"
      :class="
        'image' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
    />
    <div>
      <button
        @click="add_events($route.query.id)"
        class="px-4 py-2.5 w-full mt-6 text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
        type="button"
        aria-label="Signup"
      >
        Add
      </button>
    </div>
  </div>
</template>
<script>
import UploadImg from "../projects/UploadImg";
import instance from "../../store/axiosConfig.js";
export default {
  name: "add-events",
  data() {
    return {
      errors: {},
      errorMessage: null,
      name: "",
      location: "",
      event_date: "",
      link: "",
      image: "",
    };
  },
  components: {
    UploadImg,
  },
  methods: {
    getimg(value) {
      this.image = value;
    },
    add_events(id) {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("location", this.location);
      formData.append("event_date", this.event_date);
      formData.append("link", this.link);
      formData.append("image", this.image);
      instance
        .post("/council/add_event/" + id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/council/events",
            query: { name: this.$route.query.name, id: this.$route.query.id },
          });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          this.errorMessage = err.response.data.message;
          console.log(err.response.data.message);
        });
    },
  },
};
</script>
