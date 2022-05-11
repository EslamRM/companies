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
                    :src="member.profile_image"
                    alt="img-blur-shadow"
                    class="shadow img-fluid rounded-xl"
                /></a>
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
export default {
  name: "our-members",
  data() {
    return {
      members: null,
    };
  },
  methods: {
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
