<template>
  <div class="container mb-5">
    <p
      class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
    >
      Add Media
    </p>
    <input
      :class="
        'title' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Title"
      v-model="title"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.title ? errors.title[0] : "" }}
    </p>
    <input
      :class="
        'description' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
      class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      type="text"
      required=""
      placeholder="Description"
      v-model="description"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.description ? errors.description[0] : "" }}
    </p>
    <label
      class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
      for="name"
      >Add Image</label
    >
    <UploadImg
      @file="getimg($event)"
      :class="
        'file' in errors
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
          : ''
      "
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
      {{ errors.file ? errors.file[0] : "" }}
    </p>
    <div>
      <button
        @click="add_media($route.query.id)"
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
  name: "add-media",
  data() {
    return {
      errors: {},
      errorMessage: null,
      title: "",
      description: "",
      file: null,
    };
  },
  components: {
    UploadImg,
  },
  methods: {
    getimg(value) {
      this.file = value;
    },
    add_media(id) {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("file", this.file);
      instance
        .post("/council/add_media_image/" + id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/council/media",
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
