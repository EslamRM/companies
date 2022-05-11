<template>
  <div class="container mx-auto">
    <CouncilHeader @check="checkBanner($event)" />
    <router-view v-if="checked"></router-view>
    <div class="flex justify-center items-center mt-64" v-else>
      <Spinner name="line-scale" color="#82a3e0" />
    </div>
  </div>
</template>
<script>
import CouncilHeader from "../components/council/councilHeader";
export default {
  name: "Projects",
  data() {
    return {
      checked: null,
    };
  },
  components: {
    CouncilHeader,
  },
  methods: {
    checkBanner(value) {
      console.log();
      this.checked = value;
    },
  },
  created() {
    this.checkBanner();
  },
};
</script>
<style>
@import "../assets/css/council.css";
</style>
