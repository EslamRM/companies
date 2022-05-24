<template>
  <!-- Projects grid -->
  <section class="container mx-auto">
    <div
      class="pt-5 sm:pt-14"
      v-for="(company, index) in companies"
      :key="index"
    >
      <!-- Projects grid title -->
      <div class="text-center">
        <p
          class="font-general-semibold text-base sm:text-4xl font-semibold mb-0 sm:mb-2 text-ternary-dark dark:text-ternary-light"
        >
          {{ company }}
        </p>
      </div>

      <!-- Filter and search projects -->
      <div class="mt-3 sm:mb-0 mb-5 sm:mt-10">
        <h3
          class="font-general-regular sm:mb-0 mb-4 text-center text-secondary-dark dark:text-ternary-light text-xs sm:text-xl font-normal"
        >
          click to see details
        </h3>
      </div>
      <CompanySlider />
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";
import CompanySlider from "./CompanySlider";
import projects from "../../data/projects";

export default {
  components: { CompanySlider },
  props: ["singleProjectHeader"],
  data: () => {
    return {
      projects,
      companies: [
        "Contracting",
        "Real Estate",
        "Food",
        "Foodstuff",
        "Nuts and Fruits",
        "Cars",
      ],
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedCategory);
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped>
.plus-search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 24px;
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;
}
@media screen and (max-width: 300px) {
  .plus-search {
    width: 20px;
    height: 20px;
    font-size: 18px;
  }
  .txt-mobile {
    font-size: 9px;
  }
  .txt-mobile2 {
    font-size: 8px;
  }
}
</style>
