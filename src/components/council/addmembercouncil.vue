<template>
  <div class="w-full mt-20 mb-20">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left m-auto"
    >
      <div class="flex items-center justify-center">
        <p
          class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
        >
          Add Member
        </p>
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >Add Logo</label
        >
        <UploadImg @src="getimg($event)" />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          v-model="name"
          placeholder="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          v-model="designation"
          placeholder="designation"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="tel"
          required=""
          v-model="mobile"
          placeholder="Phone"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="email"
          required=""
          v-model="email"
          placeholder="Email"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="date"
          v-model="dob"
          required=""
          placeholder="Birth Date"
        />
        <v-select
          class="dropdown my-2"
          v-model="nationality"
          :options="options.countries"
          :reduce="(country) => country.id"
          placeholder="Nationality"
          label="name"
          taggable
          push-tags
        >
        </v-select>
        <v-select
          @option:selected="get_city"
          class="dropdown my-2 text-sm"
          v-model="country"
          :options="options.countries"
          :reduce="(country) => country.id"
          placeholder="Country"
          label="name"
          taggable
          push-tags
        >
        </v-select>
        <v-select
          class="dropdown my-2 text-sm"
          @option:selected="get_area"
          v-model="city"
          :options="options.cities"
          label="name"
          :reduce="(city) => city.id"
          placeholder="City"
          taggable
          push-tags
        >
        </v-select>
        <v-select
          class="dropdown my-2 text-sm"
          v-model="area"
          :options="options.areas"
          label="name"
          :reduce="(area) => area.id"
          placeholder="Area"
          taggable
          push-tags
        >
        </v-select>
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="companies"
          >Companies</label
        >
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          id="companies_1"
          name="company"
          type="text"
          required=""
          placeholder="company 1"
          aria-label="company"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          id="categories_2"
          name="company"
          type="text"
          required=""
          placeholder="company 2"
          aria-label="company"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          id="categories_3"
          name="company"
          type="text"
          required=""
          placeholder="company 3"
          aria-label="company"
        />
      </div>
      <div>
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="about"
          >About member</label
        >
        <textarea
          class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          id="about"
          name="about"
          required=""
          placeholder="About member"
          aria-label="Email"
        ></textarea>
      </div>
      <div>
        <button
          @click="add_council_member()"
          title="Add"
          class="px-4 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
          type="button"
          aria-label="Signup"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../../store/axiosConfig.js";
import UploadImg from "../projects/UploadImg2";
import vSelect from "vue-select";
export default {
  name: "Settings",
  data() {
    return {
      options: {
        activities: [],
        countries: [],
        cities: [],
        areas: [],
        legal_status: [],
        issued_by: [],
      },
      name: null,
      dob: "Birth Date",
      nationality: null,
      email: null,
      website: null,
      mobile: null,
      designation: null,
      profile_image: null,
      country: null,
      city: null,
      area: null,
    };
  },
  components: {
    vSelect,
    UploadImg,
  },
  methods: {
    getimg(value) {
      this.profile_image = value;
    },
    add_council_member() {
      instance
        .post("/council_member", {
          name: this.name,
          dob: this.dob,
          nationality: this.nationality,
          email: this.email,
          website: this.website,
          mobile: this.mobile,
          designation: this.designation,
          profile_image: this.profile_image,
          country_id: this.country,
          city_id: this.city,
          area_id: this.area,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/council/our-members");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    get_country() {
      instance
        .get("/data/countries/")
        .then((res) => {
          res.data.countries.forEach((item) => {
            this.options.countries.push(item);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    get_city() {
      instance
        .get("/data/cities/" + this.country)
        .then((res) => {
          this.options.cities = [];
          console.log(res.data);
          if (res.data.cities.length > 0) {
            res.data.cities.forEach((city) => {
              this.options.cities.push(city);
            });
            this.city = "Select City";
          } else {
            this.city = "Not Found";
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    get_area() {
      instance
        .get("/data/areas/" + this.city)
        .then((res) => {
          this.options.areas = [];
          console.log(res.data);
          if (res.data.areas.length > 0) {
            res.data.areas.forEach((area) => {
              this.options.areas.push(area);
            });
            this.area = "Select Area";
          } else {
            this.area = "Not Found";
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
  },
  created() {
    this.get_country();
  },
};
</script>
<style>
.dropdown {
  font-size: 0.875rem;
}
.select::-ms-expand {
  display: none;
  padding: 10px;
}
.dropdown .vs__dropdown-menu {
  height: auto;
  overflow-y: auto;
  float: left;
  position: absolute;
  transform: scale(1, 1);
  transition: transform ease 150ms;
  transform-origin: top;
  background-color: #ffffff;
  border-radius: 6px;
  border: solid 1px #eef0f1;
  box-shadow: 0 20px 40px 0 rgb(0 0 0 / 5%);
  /* padding: 15px 0; */
  /* z-index: 20; */
  margin-top: 10px;
  max-height: 360px;
  width: 100%;
  /* max-width: 332px; */
}
.dropdown .vs__dropdown-menu > * {
  transform: scale(1, 1);
  transition: transform ease 150ms;
  transform-origin: top;
  padding: 15.5px 24px;
  border-bottom: 1px solid #eef0f1;
  font-size: 0.875rem;
  line-height: 24px;
  box-sizing: border-box;
  color: #2b2d2e;
  display: block;
  text-decoration: none;
  text-align: left;
  background: none;
}
.dropdown .vs__dropdown-menu > *:hover {
  font-weight: 600;
  color: #213a63;
}
.dropdown .vs__dropdown-toggle {
  border-radius: 10px;
  border: solid 1px #b6b8b9;
  padding: 5px 10px;
  box-sizing: border-box;
}
.dropdown .vs__search {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
