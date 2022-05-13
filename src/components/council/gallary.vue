<template>
  <div class="mt-5">
    <div class="mb-4 card2">
      <div class="p-5 pb-0 card-header">
        <h5 class="mb-1 text-dark">Media</h5>
        <p class="text-sm text-dark">Architects design houses</p>
      </div>
      <div class="p-3 card2-body">
        <div
          class="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7"
        >
          <div
            class="mb-4 mb-xl-0"
            v-for="(media, index) in council_media"
            :key="index"
          >
            <div class="card2 card-blog card-plain">
              <div class="relative">
                <a class="shadow-xl block rounded-xl"
                  ><img
                    :src="media.file_path"
                    alt="img-blur-shadow"
                    class="shadow img-fluid rounded-xl"
                  />
                </a>
                <div class="action">
                  <div
                    class="action-icon"
                    role="button"
                    @click="selectItem(media.id)"
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
                    :class="{ show: media.id === activeItem && isshow }"
                  >
                    <ul class="list-group">
                      <li
                        class="pt-0 text-sm border-0 list-group-item ps-0 text-dark mb-2"
                      >
                        <router-link
                          :to="{
                            path: '/council/settings/edit-media',
                            query: {
                              id: $route.query.id,
                              name: $route.query.name,
                              media_id: media.id,
                              media_name: media.name,
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
              </div>
              <div class="px-1 pb-0 card2-body">
                <h5>{{ media.title }}</h5>
                <p class="mb-2 text-sm text-gradient text-dark">
                  {{ media.description }}
                </p>
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
  name: "gallery",
  data() {
    return {
      council_media: null,
      activeItem: null,
      isshow: false,
    };
  },

  methods: {
    selectItem(i) {
      this.activeItem = i;
      this.isshow = !this.isshow;
    },
    get_media(id) {
      instance
        .get("/public/council_media/" + id)
        .then((res) => {
          console.log(res.data);
          this.council_media = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.get_media(this.$route.query.id);
  },
};
</script>
<style>
@import "../../assets/css/council.css";
</style>
