<template>
  <div class="mt-5">
    <div class="mb-4 card2">
      <div class="p-5 pb-0 card-header">
        <h5 class="mb-1 text-dark">Our Companies</h5>
        <p class="text-sm text-dark">Activity name</p>
      </div>
      <div class="p-3 card2-body">
        <div
          class="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7"
        >
          <div
            class="mb-4 mb-xl-0"
            v-for="(company, index) in council_companies"
            :key="index"
          >
            <div class="card2 card-blog card-plain">
              <div class="relative">
                <a class="shadow-xl block rounded-xl"
                  ><img
                    :src="company.logo_image_path"
                    alt="img-blur-shadow"
                    class="shadow img-fluid rounded-xl"
                  />
                </a>
              </div>
              <div class="px-1 pb-0 card2-body">
                <ul class="list-group">
                  <li class="pt-0 border-0 list-group-item ps-0 text-dark mb-2">
                    <h4 class="text-dark text-xl">
                      <strong>{{ company.business_name }}</strong>
                    </h4>
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="">Mobile:</strong> &nbsp;
                    {{ company.phone_number }}
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">Email:</strong> &nbsp;
                    {{ company.email }}
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">Companies:</strong> &nbsp;
                    SmartID,BusinessID,Gold Star
                  </li>
                </ul>
                <!-- <a href="javascript:;"><h5>Modern</h5></a>
                <p class="mb-4 text-sm">
                  As Uber works through a huge amount of internal management
                  turmoil.
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../../store/axiosConfig.js";
export default {
  name: "our-companies",
  data() {
    return {
      council_companies: null,
    };
  },
  methods: {
    get_council_companies(id) {
      instance
        .get("public/council_company/" + id)
        .then((res) => {
          console.log(res.data);
          this.council_companies = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.get_council_companies(this.$route.query.id);
  },
};
</script>
<style>
@import "../../assets/css/council.css";
.updatebanner .upload {
  width: 40px;
  height: 40px;
  right: 10px;
  top: 10px;
}
.updatelogo .upload {
  width: 25px;
  height: 25px;
  right: 5px;
  margin-top: -3px;
}
.updatelogo .upload svg {
  width: 15px;
}
.img-fluid {
  height: 250px;
  width: 100%;
}
</style>
