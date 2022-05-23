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
          :class="
            'name' in errors
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          v-model="name"
          placeholder="Name"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.name ? errors.name[0] : "" }}
        </p>
        <input
          :class="
            'designation' in errors
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          v-model="designation"
          placeholder="designation"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.designation ? errors.designation[0] : "" }}
        </p>
        <input
          :class="
            'mobile' in errors
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="tel"
          required=""
          v-model="mobile"
          placeholder="Phone"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.mobile ? errors.mobile[0] : "" }}
        </p>
        <input
          :class="
            'email' in errors
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="email"
          required=""
          v-model="email"
          placeholder="Email"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.email ? errors.email[0] : "" }}
        </p>
        <input
          :class="
            'dob' in errors
              ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700'
              : ''
          "
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="date"
          v-model="dob"
          required=""
          placeholder="Birth Date"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.dob ? errors.dob[0] : "" }}
        </p>
        <v-select
          :class="'nationality' in errors ? 'invalid' : ''"
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
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.nationality ? errors.nationality[0] : "" }}
        </p>
        <v-select
          :class="'country_id' in errors ? 'invalid' : ''"
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
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.country_id ? errors.country_id[0] : "" }}
        </p>
        <v-select
          :class="'city_id' in errors ? 'invalid' : ''"
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
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.city_id ? errors.city_id[0] : "" }}
        </p>
        <v-select
          :class="'area_id' in errors ? 'invalid' : ''"
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
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ errors.area_id ? errors.area_id[0] : "" }}
        </p>
      </div>
      <div>
        <button
          @click="add_council_member($route.query.id)"
          title="Add"
          class="px-4 my-3 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
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
      errors: {},
      errorMessage: null,
      options: {
        activities: [],
        countries: [],
        cities: [],
        areas: [],
        legal_status: [],
        issued_by: [],
      },
      name: null,
      dob: null,
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
    add_council_member(council_id) {
      instance
        .post("council/council_member/" + council_id, {
          name: this.name,
          dob: this.dob,
          nationality: this.nationality,
          email: this.email,
          mobile: this.mobile,
          designation: this.designation,
          profile_image: this.profile_image,
          country_id: this.country,
          city_id: this.city,
          area_id: this.area,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push({
            path: "/council/our-members",
            query: {
              id: this.$route.query.id,
              name: this.$route.query.name,
            },
          });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          this.errorMessage = err.response.data.message;
          console.log(err.response.data.message);
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
