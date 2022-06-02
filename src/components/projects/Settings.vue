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
      <UploadImg />
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Company Information</label
        >
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="text"
          required=""
          placeholder="Name"
          aria-label="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="text"
          required=""
          placeholder="Services"
          aria-label="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="text"
          required=""
          placeholder="Website"
          aria-label="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="tel"
          required=""
          placeholder="Phone"
          aria-label="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="email"
          required=""
          placeholder="Email"
          aria-label="Name"
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
          <div v-for="(url, index) in followUs" :key="index">
            <button
              v-if="followUs.length > 1"
              @click="removeField(index, followUs)"
              class="minus"
            >
              -
            </button>
            <input
              class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
              id="name"
              name="name"
              type="text"
              required=""
              placeholder="URL"
              aria-label="Name"
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
          id="about"
          name="about"
          required=""
          placeholder="About Company"
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
    </div>
  </div>
</template>
<script>
import UploadImg from "./UploadImg";
// import UpdateLogo from "./UpdateLogo";
// import UploadBanner from "./UploadBanner";
import Button from "../../components/reusable/Button";
export default {
  name: "Settings",
  data() {
    return {
      isCropped: false,
      followUs: [{ url: "" }],
    };
  },
  components: {
    UploadImg,
    Button,
    // UpdateLogo,
    // UploadBanner,
  },
  methods: {
    addField(value, fieldType) {
      fieldType.push({ value: "" });
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
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
