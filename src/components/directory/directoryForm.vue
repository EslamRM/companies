<template>
  <div>
    <div class="my-10 sm:mt-20 mb-16 container">
      <div>
        <div class="flex justify-center items-center flex-col sm:flex-row">
          <v-select
            :options="cities"
            @option:selected="get_results"
            :reduce="(option) => option.id"
            label="name"
            placeholder="Emirates"
            taggable
            push-tags
            v-model="selected_emirate"
            class="dropdown w-full sm:w-full font-general-medium mr-0 sm:mr-3 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg txt-mobile sm:text-xs md:text-sm lg:text-md xl:text-base bg-secondary-light"
          >
          </v-select>
          <v-select
            @search="get_activities($event)"
            @option:selected="get_results"
            class="dropdown w-full sm:w-full font-general-medium mr-0 sm:mr-3 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg txt-mobile sm:text-xs md:text-sm lg:text-md xl:text-base bg-secondary-light"
            v-model="selected_activities"
            :options="activities"
            :reduce="(option) => option.id"
            placeholder="Activity"
            label="title"
            taggable
            push-tags
          >
          </v-select>
          <button
            @click="remove_filter()"
            type="button"
            class="sm:w-full w-full sm:w-1/2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Clear Filter
          </button>
          <!-- <div class="relative flex mb-2 sm:mb-0 w-full flex-col sm:flex-row">
            <input
              v-model="companies"
              class="font-general-medium w-full pl-3 pr-1 sm:pr-11 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg txt-mobile sm:text-xs md:text-sm lg:text-md xl:text-base bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Companies"
              aria-label="Name"
            />
            <span
              class="ml-2 bg-primary-light dark:bg-ternary-dark shadow-none md:shadow-sm rounded-xl hidden sm:flex justify-center items-center w-7 sm:w-16 cursor-pointer"
            >
              <img
                src="../../assets/icons/search.svg"
                class="text-ternary-dark dark:text-ternary-light"
              />
            </span>
            <span
              class="font-general-medium pl-3 pr-1 border-1 hover:bg-grey-200 border-gray-200 dark:border-secondary-dark sm:pr-11 py-2 bg-primary-light dark:bg-ternary-dark shadow-none md:shadow-sm rounded-lg sm:hidden w-full flex justify-center items-center mt-2 cursor-pointer"
            >
              Search
            </span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "@/store/axiosConfig";
import VSelect from "vue-select";
export default {
  name: "Companyform",
  data() {
    return {
      cities: [],
      activities: [],
      selected_activities: null,
      selected_emirate: "",
      selected_company: "",
    };
  },
  components: {
    VSelect,
  },
  computed: {
    filteroptions() {
      return this.activities.filter((item) => {
        return this.selected_activities
          .toLowerCase()
          .split(" ")
          .every((v) => item.toLowerCase().includes(v));
      });
    },
  },
  methods: {
    remove_filter() {
      this.selected_emirate = null;
      this.selected_activities = null;
      this.selected_company = null;
      this.get_results();
    },
    get_results() {
      instance
        .post("public/companies/directory_page", {
          city_id: this.selected_emirate,
          company_activity_id: this.selected_activities,
          company_id: null,
        })
        .then((res) => {
          console.log(res.data);
          this.$emit("companies", res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    get_activities(act) {
      instance
        .get("/data/active_activities/" + act)
        .then((res) => {
          console.log(res.data);
          this.activities = [];
          res.data.activities.forEach((item) => {
            this.activities.push(item);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    get_cities() {
      instance
        .get("/data/cities/1")
        .then((res) => {
          console.log(res.data);
          res.data.cities.forEach((item) => {
            this.cities.push(item);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.get_cities();
  },
};
</script>
<style>
.dropdown .vs__search {
  outline: none !important;
  border: 0 !important;
}
.dropdown .vs__search:focus {
  outline: none !important;
  border: 0 !important;
  color: white !important;
  box-shadow: none !important;
  padding-top: 0.5rem !important;
  padding-right: 0.75rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 0.75rem !important;
}
.search-icon {
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon:hover {
  background: #fafafa;
}
</style>
