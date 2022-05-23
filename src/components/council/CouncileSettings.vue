<template>
  <div class="w-full">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl text-left card2 mx-auto"
    >
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
      >
        Settings
      </p>
      <form action="#" class="font-general-regular space-y-7 card2-body">
        <div>
          <label
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Council Info</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="text"
            required=""
            placeholder="Name"
            v-model="council_name"
          />
        </div>
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="text"
            required=""
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="tel"
            required=""
            placeholder="Phone Number"
            v-model="phone_number"
          />
        </div>
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="tel"
            required=""
            placeholder="Landline"
            v-model="landline_number"
          />
        </div>
        <v-select
          @option:selected="get_city"
          class="dropdown my-2"
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
          class="dropdown my-2"
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
          class="dropdown my-2"
          v-model="area"
          :options="options.areas"
          label="name"
          :reduce="(area) => area.id"
          placeholder="Area"
          taggable
          push-tags
        >
        </v-select>
        <div>
          <label
            class="block text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Person In Charge</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="text"
            required=""
            placeholder="Name"
            v-model="person_in_charge_name"
          />
        </div>
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="text"
            required=""
            placeholder="Designation"
            v-model="person_in_charge_designation"
          />
        </div>
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="text"
            required=""
            placeholder="Email"
            v-model="person_in_charge_email"
          />
        </div>
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
            type="text"
            required=""
            placeholder="Mobile"
            v-model="person_in_charge_mobile"
          />
        </div>
        <v-select
          class="dropdown my-2"
          v-model="person_in_charge_country"
          :options="options.countries"
          :reduce="(country) => country.id"
          placeholder="Nationality"
          label="name"
          taggable
          push-tags
        >
        </v-select>
        <div>
          <button
            @click="edit_council($route.query.id)"
            class="px-4 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="button"
            aria-label="Signup"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import vSelect from "vue-select";
import instance from "../../store/axiosConfig.js";
export default {
  data() {
    return {
      options: {
        countries: [],
        cities: [],
        areas: [],
      },
      council_logo: "",
      council_name: "",
      email: "",
      phone_number: "",
      landline_number: "",
      country: null,
      city: null,
      area: null,
      country_id: null,
      city_id: null,
      area_id: null,
      person_in_charge_name: "",
      person_in_charge_designation: "",
      person_in_charge_email: "",
      person_in_charge_mobile: "",
      person_in_charge_country: null,
    };
  },
  components: { vSelect },
  methods: {
    getimg(value) {
      this.council_logo = value;
    },
    get_council(id) {
      instance
        .get("/council/" + id)
        .then((res) => {
          console.log(res.data);
          this.council_name = res.data.data.council_name;
          this.email = res.data.data.email;
          this.landline_number = res.data.data.landline_number;
          this.phone_number = res.data.data.mobile_number;
          this.country = res.data.data.country.name;
          this.city = res.data.data.city.name;
          this.area = res.data.data.area.name;
          this.country_id = res.data.data.country.id;
          this.city_id = res.data.data.city.id;
          this.area_id = res.data.data.area.id;
          this.person_in_charge_name = res.data.data.person_in_charge_name;
          this.person_in_charge_designation =
            res.data.data.person_in_charge_designation;
          this.person_in_charge_email = res.data.data.person_in_charge_email;
          this.person_in_charge_mobile = res.data.data.person_in_charge_mobile;
          this.person_in_charge_country =
            res.data.data.person_in_charge_country;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    edit_council(id) {
      try {
        instance
          .put("council/" + id, {
            council_name: this.council_name,
            email: this.email,
            mobile_number: this.phone_number,
            landline_number: this.landline_number,
            designation: this.designation,
            country_id: this.country_id,
            city_id: this.city_id,
            area_id: this.area_id,
            person_in_charge_name: this.person_in_charge_name,
            person_in_charge_designation: this.person_in_charge_designation,
            person_in_charge_email: this.person_in_charge_email,
            person_in_charge_mobile: this.person_in_charge_mobile,
            person_in_charge_country: this.person_in_charge_country,
          })
          .then((res) => {
            console.log(res.data);
            this.$router.push({
              path: "/council/",
              query: { name: this.$route.query.name, id: this.$route.query.id },
            });
          });
      } catch (err) {
        console.log(err.message);
      }
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
    this.get_council(this.$route.query.id);
    this.get_country();
  },
};
</script>
<style lang="scss" scoped></style>
