<template>
  <div class="w-full mt-20 mb-20">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left m-auto"
    >
      <p
        class="font-general-medium text-center text-primary-dark dark:text-primary-light text-lg sm:text-2xl mb-8"
      >
        Edit Company
      </p>
      <div>
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          id="name"
          type="text"
          v-model="business_name"
          required=""
          placeholder="Name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="tel"
          required=""
          placeholder="Phone"
          v-model="phone_number"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="tel"
          required=""
          placeholder="Landline"
          v-model="landline_number"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="email"
          required=""
          placeholder="Email"
          v-model="email"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          placeholder="Trade Licence Number"
          v-model="trade_license_number"
        />
        <v-select
          @search="get_activities($event)"
          v-model="selected_activities"
          class="dropdown my-2"
          :options="options.activities"
          :reduce="(option) => option.id"
          label="title"
          placeholder="Activities"
          taggable
          push-tags
        >
        </v-select>
        <v-select
          class="dropdown my-2"
          v-model="legal_status"
          :options="options.legal_status"
          placeholder="Legal Status"
          taggable
          push-tags
        >
        </v-select>
        <v-select
          class="dropdown my-2"
          v-model="issued_by"
          :options="options.issued_by"
          placeholder="Issued By"
          taggable
          push-tags
        >
        </v-select>
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
        <label
          class="block my-3 text-sm sm:text-lg text-primary-dark dark:text-primary-light mb-2"
          for="name"
          >person In Charge</label
        >
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          placeholder="Name"
          v-model="person_in_charge_name"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          v-model="person_in_charge_designation"
          placeholder="Designation"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          placeholder="Mobile"
          v-model="person_in_charge_mobile"
        />
        <input
          class="w-full my-2 px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light rounded-md shadow-sm text-sm sm:text-md"
          type="text"
          required=""
          placeholder="Email"
          v-model="person_in_charge_email"
        />
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
      </div>
      <div>
        <button
          @click="
            edit_council_company($route.query.id, $route.query.company_id)
          "
          class="px-4 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
          type="button"
          aria-label="Signup"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../../store/axiosConfig.js";
import vSelect from "vue-select";
export default {
  name: "Settings",
  isCropped: false,
  data() {
    return {
      id: "",
      options: {
        activities: [],
        countries: [],
        cities: [],
        areas: [],
        legal_status: [],
        issued_by: [],
      },
      country_status: "Country",
      city_status: "City",
      area_status: "Area",
      business_name: "",
      email: "",
      phone_number: "",
      landline_number: "",
      trade_license_number: "",
      selected_activities: null,
      company_activity_id: null,
      legal_status: null,
      issued_by: null,
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
  components: {
    vSelect,
  },
  computed: {
    filteroptions() {
      return this.options.activities.filter((item) => {
        return this.selected_activities
          .toLowerCase()
          .split(" ")
          .every((v) => item.toLowerCase().includes(v));
      });
    },
  },
  methods: {
    getimg(value) {
      this.company_council_logo = value;
    },
    get_council_company(council_company_id) {
      instance
        .get("public/council_company_details/" + council_company_id)
        .then((res) => {
          console.log(res.data);
          this.business_name = res.data.business_name;
          this.email = res.data.email;
          this.phone_number = res.data.phone_number;
          this.landline_number = res.data.landline_number;
          this.trade_license_number = res.data.trade_license_number;
          this.selected_activities = res.data.company_activity.title;
          this.company_activity_id = res.data.company_activity.id;
          this.legal_status = res.data.legal_status;
          this.issued_by = res.data.issued_by;
          this.country = res.data.country.name;
          this.city = res.data.city.name;
          this.area = res.data.area.name;
          this.country_id = res.data.country.id;
          this.city_id = res.data.city.id;
          this.area_id = res.data.area.id;
          this.person_in_charge_name = res.data.person_in_charge_name;
          this.person_in_charge_designation =
            res.data.person_in_charge_designation;
          this.person_in_charge_email = res.data.person_in_charge_email;
          this.person_in_charge_mobile = res.data.person_in_charge_mobile;
          this.person_in_charge_country = res.data.person_in_charge_country;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    edit_council_company(council_id, council_company_id) {
      try {
        instance
          .put(
            "council/council_company/" + council_id + "/" + council_company_id,
            {
              business_name: this.business_name,
              email: this.email,
              phone_number: this.phone_number,
              landline_number: this.landline_number,
              trade_license_number: this.trade_license_number,
              company_activity_id: this.company_activity_id,
              legal_status: this.legal_status,
              issued_by: this.issued_by,
              country_id: this.country_id,
              city_id: this.city_id,
              area_id: this.area_id,
              person_in_charge_name: this.person_in_charge_name,
              person_in_charge_designation: this.person_in_charge_designation,
              person_in_charge_email: this.person_in_charge_email,
              person_in_charge_mobile: this.person_in_charge_mobile,
              person_in_charge_country: this.person_in_charge_country,
            }
          )
          .then((res) => {
            console.log(res.data);
            this.$router.push({
              path: "/council",
              query: {
                id: this.$route.query.id,
                name: this.$route.query.name,
              },
            });
          });
      } catch (err) {
        console.log(err.message);
      }
    },
    get_activities(act) {
      instance
        .get("/data/company_activities/" + act)
        .then((res) => {
          console.log(res.data);
          this.options.activities = [];
          res.data.activities.forEach((item) => {
            this.options.activities.push(item);
          });
          // console.log(this.options.activities);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    get_legal_status() {
      try {
        instance.get("/data/legal_statuses").then((res) => {
          res.data.legal_statuses.forEach((item) => {
            this.options.legal_status.push(item.name);
          });
        });
      } catch (err) {
        console.log(err.message);
      }
    },
    get_issued_by() {
      try {
        instance.get("/data/issued_by").then((res) => {
          res.data.issued_by.forEach((item) => {
            this.options.issued_by.push(item.name);
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
    this.get_council_company(this.$route.query.company_id);
    this.get_legal_status();
    this.get_issued_by();
    this.get_country();
    // this.get_city();
    // this.get_area();
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
  },
};
</script>
<style>
.dropdown {
  font-size: 14px !important;
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
