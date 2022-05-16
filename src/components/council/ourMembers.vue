<template>
  <div class="mt-5">
    <div class="mb-4 card2">
      <div class="p-5 pb-0 card-header">
        <h5 class="mb-1 text-dark">Our Members</h5>
        <p class="text-sm text-dark">Activity name</p>
      </div>
      <div class="p-3 card2-body">
        <div
          class="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7"
        >
          <div
            class="mb-4 mb-xl-0"
            v-for="(member, index) in members"
            :key="index"
          >
            <div class="card2 card-blog card-plain">
              <div class="relative">
                <a class="shadow-xl block rounded-xl"
                  ><img
                    :src="cm_logo ? cm_logo : member.profile_image"
                    alt="img-blur-shadow"
                    class="shadow img-fluid rounded-xl mx-auto"
                /></a>
                <div class="action" v-if="councilId == $route.query.id">
                  <div
                    class="action-icon"
                    role="button"
                    @click="selectItem(member.id)"
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
                    :class="{ show: member.id === activeItem && isshow }"
                  >
                    <ul class="list-group">
                      <li
                        class="pt-0 text-sm border-0 list-group-item ps-0 text-dark mb-2"
                      >
                        <router-link
                          :to="{
                            path: '/council/settings/edit-member',
                            query: {
                              id: $route.query.id,
                              name: $route.query.name,
                              member_id: member.id,
                              member_name: member.name,
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
                <UpdateCMLogo
                  v-if="councilId == $route.query.id"
                  @cmlogo="getLogo($event)"
                  :member_id="member.id"
                />
              </div>
              <div class="px-1 pb-0 card2-body">
                <ul class="list-group">
                  <li
                    class="pt-0 text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">{{ member.name }}</strong>
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="">Position:</strong> &nbsp;
                    {{ member.designation }}
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="">Mobile:</strong> &nbsp;
                    {{ member.mobile }}
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">Email:</strong> &nbsp;
                    {{ member.email }}
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
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../../store/axiosConfig.js";
import UpdateCMLogo from "../projects/UpdateCMLogo";
import { mapState } from "vuex";
export default {
  name: "our-members",
  data() {
    return {
      members: null,
      activeItem: null,
      isshow: false,
      cm_logo: null,
    };
  },
  components: {
    UpdateCMLogo,
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
      this.cm_logo = value;
    },
    selectItem(i) {
      this.activeItem = i;
      this.isshow = !this.isshow;
    },
    get_council_members(id) {
      instance
        .get("public/council_member/" + id)
        .then((res) => {
          console.log(res.data);
          this.members = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.get_council_members(this.$route.query.id);
  },
};
</script>
<style>
@import "../../assets/css/council.css";
</style>
