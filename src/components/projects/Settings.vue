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
        <!-- <div class="verified mt-9 sm:mt-16 ml-1 sm:ml-3">
          <span>✔</span>
        </div> -->
      </div>
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-3xl mb-2"
      >
        Settings.
      </p>
      <!-- <p
        class="px-4 py-2.5 text-center text-sm sm:text-base tracking-wider text-indigo-500 hover:text-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
      >
        Update Profile Logo
      </p>
      <UpdateLogo />
      <p
        class="px-4 py-2.5 text-center text-sm sm:text-base tracking-wider text-indigo-500 hover:text-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
      >
        Upload Banner
      </p>
      <UploadBanner /> -->
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
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Follow Us</label
        >
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="text"
          required=""
          placeholder="Facebook URL"
          aria-label="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="text"
          required=""
          placeholder="Twitter URL"
          aria-label="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          name="name"
          type="text"
          required=""
          placeholder="You Tube URL"
          aria-label="Name"
        />
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="categories"
          >Categories</label
        >
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="categories"
          name="phone"
          type="text"
          required=""
          placeholder="Product 1"
          aria-label="Phone"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="categories"
          name="phone"
          type="text"
          required=""
          placeholder="Product 2"
          aria-label="Phone"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
          id="categories"
          name="phone"
          type="text"
          required=""
          placeholder="Product 3"
          aria-label="Phone"
        />
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
  isCropped: false,
  components: {
    UploadImg,
    Button,
    // UpdateLogo,
    // UploadBanner,
  },
};
</script>
<style>
.Clogo {
  border: 3px solid #6366f1;
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
