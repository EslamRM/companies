<template>
  <div class="w-full mt-20 mb-20">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left m-auto"
    >
      <div class="flex items-center justify-center">
        <div
          class="w-4 h-4 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center Clogo cursor-pointer shadow-lg font-general-medium text-left text-md sm:text-xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7 mr-2 sm:mr-2"
        >
          R
        </div>
        <p
          class="font-general-medium text-left xl-text-xl lg:text-xl md:text-xl sm:text-md font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          Real State Company
        </p>
      </div>
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-3xl mb-2"
      >
        Settings.
      </p>
      <p
        class="px-4 py-2.5 text-center text-sm sm:text-base tracking-wider text-indigo-500 hover:text-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
      >
        Upload Profile Images Maximum (3)
      </p>
      <UploadImg @file="getimgfile($event)" />
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Company Information</label
        >
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          v-model="name"
          type="text"
          required=""
          placeholder="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          v-model="services"
          type="text"
          required=""
          placeholder="Services"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          v-model="website"
          type="text"
          required=""
          placeholder="Website"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          v-model="phone"
          type="tel"
          required=""
          placeholder="Phone"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          v-model="email"
          type="email"
          required=""
          placeholder="Email"
        />
      </div>
      <div
        class="p-3 flex justify-between items-center border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      >
        <label
          class="block text-sm sm:text-md text-primary-dark dark:text-primary-light mb-2"
          for="categories"
          >Products</label
        ><router-link :to="{ name: 'AddCategory' }">
          <button
            class="px-4 py-2.5 text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
          >
            Add
          </button></router-link
        >
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Follow Us</label
        >
        <div class="relative">
          <button @click="addField(followUs[0], followUs)" class="plus">
            +
          </button>
          <div v-for="(follow, index) in followUs" :key="index">
            <button
              v-if="followUs.length > 1"
              @click="removeField(index, followUs)"
              class="minus"
            >
              -
            </button>
            <input
              class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
              v-model="follow.url"
              type="text"
              required=""
              placeholder="URL"
            />
          </div>
        </div>
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="about"
          >About Company</label
        >
        <textarea
          class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          v-model="aboutus"
          required=""
          placeholder="About Company"
        ></textarea>
      </div>
      <div>
        <button
          @click="add_settings()"
          class="px-4 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import UploadImg from "./UploadImg";
import instance from "@/store/axiosConfig";
export default {
  name: "Settings",
  data() {
    return {
      errors: {},
      imgFile: "",
      isCropped: false,
      name: "",
      services: "",
      website: "",
      phone: "",
      email: "",
      aboutus: "",
      followUs: [{ url: "" }],
    };
  },
  components: {
    UploadImg,
  },
  methods: {
    getimgfile(value) {
      this.imgFile = value;
    },
    addField(value, fieldType) {
      fieldType.push({ value: "" });
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
    add_settings() {
      console.log(this.followUs);
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("services", this.services);
      formData.append("website", this.website);
      formData.append("phone", this.phone);
      formData.append("email", this.email);

      this.followUs.forEach((item) => {
        formData.append("social[]", item.url);
      });
      formData.append("aboutus", this.aboutus);
      formData.append("profile_page_images[]", this.imgFile);
      instance
        .post("/company/profile/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/projects/single-project",
          });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>
<style>
.Clogo {
  border: 3px solid #6366f1;
}
.plus {
  position: absolute;
  right: 10px;
  top: 20px;
  background: #888;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.minus {
  position: absolute;
  right: 10px;
  top: 70px;
  background: #888;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.verified {
  width: 20px;
  height: 20px;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  background: #6366f1;
  border-radius: 50%;
  color: #fff;
}
@media screen and (max-width: 300px) {
  .verified {
    width: 15px;
    height: 15px;
    display: flex;
    font-size: 10px;
  }
}
</style>
