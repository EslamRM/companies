<template>
  <div class="container mb-5">
    <p
      class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
    >
      Edit Media
    </p>
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Title"
      v-model="title"
    />
    <input
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Description"
      v-model="description"
    />
    <div>
      <button
        @click="edit_media($route.query.id, $route.query.media_id)"
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
import instance from "../../store/axiosConfig.js";
export default {
  name: "add-media",
  data() {
    return {
      title: null,
      description: null,
    };
  },
  methods: {
    getimg(value) {
      this.file = value;
    },
    get_media(id) {
      instance
        .get("/public/council_media_details/" + id)
        .then((res) => {
          console.log(res.data);
          this.title = res.data.title;
          this.description = res.data.description;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    edit_media(council_id, media_id) {
      instance
        .put("/council/update_media/" + council_id + "/" + media_id, {
          title: this.title,
          description: this.description,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/council/media",
            query: { name: this.$route.query.name, id: this.$route.query.id },
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.get_media(this.$route.query.media_id);
  },
};
</script>
