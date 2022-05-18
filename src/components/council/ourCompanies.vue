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
          v-if="council_companies"
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
                    :src="cc_logo ? cc_logo : company.logo.desktop_image"
                    alt="img-blur-shadow"
                    class="shadow img-fluid rounded-xl"
                  />
                </a>
                <div class="action" v-if="councilId == $route.query.id">
                  <div
                    class="action-icon"
                    role="button"
                    @click="selectItem(company.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                  <div
                    class="options shadow-xl rounded-xl hidden"
                    :class="{ show: company.id === activeItem && isshow }"
                  >
                    <ul class="list-group">
                      <li
                        class="pt-0 text-sm border-0 list-group-item ps-0 text-dark mb-2"
                      >
                        <router-link
                          :to="{
                            path: '/council/settings/edit-company',
                            query: {
                              id: $route.query.id,
                              name: $route.query.name,
                              company_id: company.id,
                              company_name: company.business_name,
                            },
                          }"
                          >Edit</router-link
                        >
                      </li>
                      <li
                        class="pt-0 text-sm border-0 list-group-item ps-0 text-dark"
                      >
                        <router-link to="">Delete</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <UpdateCCLogo
                  v-if="councilId == $route.query.id"
                  class="update_clogo"
                  @cclogo="getLogo($event)"
                  :company_id="company.id"
                />
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
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-64" v-else>
          <Spinner name="line-scale" color="#82a3e0" />
        </div>
        <div class="flex justify-center items-center" v-if="council_companies">
          <h5 v-if="council_companies.length == 0" class="mb-1 text-dark">
            No Companies
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../../store/axiosConfig.js";
import UpdateCCLogo from "../projects/UpdateCCLogo";
import { mapState } from "vuex";
export default {
  name: "our-companies",
  data() {
    return {
      council_companies: null,
      activeItem: null,
      isshow: false,
      cc_logo: null,
    };
  },
  components: {
    UpdateCCLogo,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState({
      councilId: (state) => state.auth.council_id,
    }),
  },
  methods: {
    getLogo(value) {
      this.cc_logo = value;
    },
    selectItem(i) {
      this.activeItem = i;
      this.isshow = !this.isshow;
    },
    get_council_companies(id) {
      instance
        .get("public/council_company/" + id)
        .then((res) => {
          console.log(res.data);
          this.council_companies = res.data.data;
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
.update_clogo .upload {
  width: 25px;
  height: 25px;
  right: 5px;
  top: 110px;
}
.update_clogo .upload svg {
  width: 15px;
}
.img-fluid {
  height: 250px;
  width: 100%;
}
</style>
