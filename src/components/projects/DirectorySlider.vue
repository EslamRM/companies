<template>
  <hooper :infiniteScroll="true" :settings="settings">
    <slide v-for="company in companies" :key="company.id">
      <router-link
        to="/projects/single-project"
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer ml-2 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Single Project"
      >
        <div class="bg-red-100 relative rounded-t-xl">
          <img
            :src="company.logo.desktop_image"
            :alt="company.name"
            class="rounded-t-xl border-none"
          />
        </div>
        <div class="text-center px-1 sm:px-4 py-1 sm:py-6 leading-none">
          <p
            class="font-general-semibold txt-mobile leading-normal text-sm sm:text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-0 sm:mb-2"
          >
            {{ company.name }}
          </p>
          <span
            class="font-general-medium txt-mobile2 text-xs sm:text-lg text-ternary-dark dark:text-ternary-light"
            >{{ company.email }}</span
          >
        </div>
      </router-link>
    </slide>
  </hooper>
</template>
<script>
import projects from "../../data/projects";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  props: ["singleProjectHeader"],
  data() {
    return {
      projects,
      companies: null,
      selectedCategory: "",
      searchProject: "",
      settings: {
        itemsToShow: 1,
        breakpoints: {
          600: {
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 3,
            pagination: "fraction",
          },
        },
      },
    };
  },
  components: {
    Slide,
    Hooper,
  },
  methods: {
    get_directory() {
      try {
        this.$store.dispatch("GETCOMPANYDirectory").then((res) => {
          this.companies = res.data.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  created() {
    this.get_directory();
  },
};
</script>
<style scoped>
.hooper img {
  height: 200px;
}
.hooper-slide,
.hooper >>> .hooper-slide.is-clone.is-active {
  margin: 0 15px;
  box-shadow: 0 0 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  /* border-bottom: 2px solid #eee; */
  height: 350px;
  border-radius: 0.75rem;
}
.hooper >>> .hooper-slide:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
@media screen and (max-width: 300px) {
  .txt-mobile {
    font-size: 9px;
  }
  .txt-mobile2 {
    font-size: 8px;
  }
}
</style>
