<template>
  <div class="mt-10 container">
    <div class="mb-4" v-if="councils">
      <div class="p-5 pb-0 card-header text-center">
        <h5 class="mb-1 text-dark">Business Councils</h5>
      </div>
      <div class="p-3 card2-body">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-3 sm:gap-3 md:gap-7"
        >
          <div
            class="mb-4 mb-xl-0"
            v-for="(council, index) in councils"
            :key="index"
          >
            <div class="card2 card-blog card-plain">
              <div class="relative">
                <router-link
                  :to="{
                    path: '/council',
                    query: { name: council.council_name, id: council.id },
                  }"
                  class="shadow-xl block rounded-xl"
                  ><img
                    :src="council.logo.desktop_image"
                    alt="img-blur-shadow"
                    class="shadow w-full img-fluid rounded-xl"
                  />
                </router-link>
              </div>
              <div class="px-1 pb-0 card2-body">
                <ul class="list-group p-3">
                  <li
                    class="pt-0 text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark text-xl">{{
                      council.council_name
                    }}</strong>
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">Email:</strong> &nbsp;
                    {{ council.email }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-64" v-else>
      <Spinner name="line-scale" color="#82a3e0" />
    </div>
    <div class="flex justify-center items-center" v-if="council_companies">
      <h5 v-if="council_companies.length == 0" class="mb-1 text-dark">
        No Councils
      </h5>
    </div>
  </div>
</template>

<script>
import instance from "../../store/axiosConfig.js";
export default {
  name: "council-list",
  data() {
    return {
      councils: null,
    };
  },
  methods: {
    get_councils() {
      instance
        .get("public/councils")
        .then((res) => {
          console.log(res.data);
          this.councils = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.get_councils();
  },
};
</script>

<style>
@import "../../assets/css/council.css";
</style>
