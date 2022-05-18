<template>
  <div class="mb-20">
    <AppBanner />
    <div class="container mt-20 mx-auto">
      <DirectoryForm />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-3 sm:gap-3 md:gap-7"
        v-if="companies"
      >
        <DirectoryCompany
          v-for="company in companies"
          :key="company.id"
          :company="company"
          class="mb-7"
        />
      </div>
      <div class="flex justify-center items-center mt-64" v-else>
        <Spinner name="line-scale" color="#82a3e0" />
      </div>
      <div class="flex justify-center items-center" v-if="companies">
        <h5 v-if="companies.length == 0" class="mb-1 text-dark">
          No Companies
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
import DirectoryCompany from "../components/directory/directoryCompany";
import DirectoryForm from "../components/directory/directoryForm";
import AppBanner from "../components/shared/AppBanner";

export default {
  name: "directory",
  data() {
    return {
      companies: [],
    };
  },
  components: {
    DirectoryCompany,
    DirectoryForm,
    AppBanner,
  },
  methods: {
    get_directory(id) {
      try {
        this.$store.dispatch("GETCOMPANY", id).then((res) => {
          console.log(res.data.data);
          this.companies = res.data.data;
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mounted() {
    this.get_directory(3);
  },
};
</script>
