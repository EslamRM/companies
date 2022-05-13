<template>
  <div class="container mb-5">
    <p
      class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
    >
      Edit Events
    </p>
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Name"
      v-model="name"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Location"
      v-model="location"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="date"
      required=""
      placeholder="Date"
      v-model="event_date"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Linke"
      v-model="link"
    />
    <div>
      <button
        @click="edit_event($route.query.id, $route.query.event_id)"
        class="px-4 py-2.5 w-full mt-6 text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
        type="button"
        aria-label="Signup"
      >
        Save
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
      name: null,
      location: null,
      event_date: null,
      link: null,
    };
  },
  methods: {
    get_event(id) {
      instance
        .get("/public/council_event_details/" + id)
        .then((res) => {
          console.log(res.data);
          this.name = res.data.name;
          this.location = res.data.location;
          this.event_date = res.data.event_date;
          this.link = res.data.link;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    edit_event(council_id, event_id) {
      instance
        .put("/council/update_event/" + council_id + "/" + event_id, {
          name: this.name,
          location: this.location,
          event_date: this.event_date,
          link: this.link,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/council/events",
            query: { name: this.$route.query.name, id: this.$route.query.id },
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.get_event(this.$route.query.event_id);
  },
};
</script>
