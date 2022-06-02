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
        Add Product.
      </p>

      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Category</label
        >
        <v-select
          @search="getCategories($event)"
          @option:selected="getParentCategories($event.id)"
          v-model="selected_category"
          class="dropdown my-2"
          :options="categories"
          :reduce="(option) => option.id"
          label="name"
          placeholder="Categories"
          taggable
          push-tags
        >
        </v-select>
      </div>
      <p class="text-xs text-indigo-500">{{ parents.join(" > ") }}</p>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Product Infomation</label
        >
        <p
          class="px-4 py-2.5 text-center text-sm sm:text-base tracking-wider text-indigo-500 hover:text-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
        >
          Upload Product Image
        </p>
        <UploadImg />
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Name</label
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
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="about"
          >Description</label
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
      <div class="flex justify-between items-center mt-2">
        <Button
          title="Save"
          class="px-4 py-2 text-sm sm:text-base text-gray-900 tracking-wider border-2 border-indigo-500 bg-white hover:text-white hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
          type="submit"
          aria-label="Signup"
        />
        <Button
          title="Add"
          class="px-4 mb-2 py-2 text-sm sm:text-base text-gray-900 hover:text-white tracking-wider border-2 border-green-500 bg-white hover:bg-green-500 focus:ring-1 focus:ring-green-600 rounded-lg duration-500"
          type="submit"
          aria-label="Signup"
        />
      </div>
    </div>
  </div>
</template>
<script>
import UploadImg from "./UploadImg";
import Button from "../../components/reusable/Button";
import VSelect from "vue-select";
import instance from "@/store/axiosConfig";
export default {
  name: "add-category",
  data() {
    return {
      isCropped: false,
      followUs: [{ url: "" }],
      categories: [],
      selected_category: "",
      parents: [],
    };
  },
  components: {
    UploadImg,
    Button,
    VSelect,
  },
  methods: {
    addField(value, fieldType) {
      fieldType.push({ value: "" });
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
    getCategories(act) {
      instance
        .get("/data/search_categories/" + act)
        .then((res) => {
          console.log(res.data);
          this.categories = [];
          res.data.companies.forEach((item) => {
            this.categories.push(item);
          });
          // console.log(this.options.activities);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getParentCategories(id) {
      instance
        .get("/data/parent_categories/" + id)
        .then((res) => {
          console.log(res.data);
          this.parents = [];
          this.orderParents(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    orderParents(parent) {
      this.parents.unshift(parent.name);
      if (parent.parent != null) {
        this.orderParents(parent.parent);
      }
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
