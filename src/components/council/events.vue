<template>
  <div class="mt-5">
    <div class="mb-4 card2">
      <div class="p-5 pb-0 card-header">
        <h6 class="mb-1 text-dark">Events</h6>
        <!-- <p class="text-sm text-dark">Architects design houses</p> -->
      </div>
      <div class="p-3 card2-body">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-3 sm:gap-3 md:gap-7"
          v-if="council_events"
        >
          <div
            class="mb-4 mb-xl-0"
            v-for="(event, index) in council_events"
            :key="index"
          >
            <div class="card2 card-blog card-plain">
              <div class="relative">
                <a class="shadow-xl block rounded-xl"
                  ><img
                    :src="event.event_logo.desktop_image"
                    alt="img-blur-shadow"
                    class="shadow img-fluid rounded-xl w-full"
                  />
                </a>
                <div class="action" v-if="councilId == $route.query.id">
                  <div
                    class="action-icon"
                    role="button"
                    @click="selectItem(event.id)"
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
                    :class="{ show: event.id === activeItem && isshow }"
                  >
                    <ul class="list-group p-3">
                      <li
                        class="pt-0 text-sm border-0 list-group-item ps-0 text-dark mb-2"
                      >
                        <router-link
                          :to="{
                            path: '/council/settings/edit-event',
                            query: {
                              id: $route.query.id,
                              name: $route.query.name,
                              event_id: event.id,
                              event_name: event.name,
                            },
                          }"
                          >Edit</router-link
                        >
                      </li>
                      <li
                        class="pt-0 text-sm border-0 list-group-item ps-0 text-dark"
                      >
                        <button
                          type="button"
                          @click="del_event($route.query.id, event.id)"
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="px-1 pb-0 card2-body">
                <ul class="list-group">
                  <li class="pt-0 border-0 list-group-item ps-0 text-dark mb-2">
                    <h4 class="text-dark text-xl">
                      <strong>{{ event.name }}</strong>
                    </h4>
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="">Location:</strong> &nbsp;
                    {{ event.location }}
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">Date:</strong> &nbsp;
                    {{ event.event_date }}
                  </li>
                  <li
                    class="text-sm border-0 list-group-item ps-0 text-dark mb-2"
                  >
                    <strong class="text-dark">Link:</strong> &nbsp;
                    {{ event.link }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-64" v-else>
          <Spinner name="line-scale" color="#82a3e0" />
        </div>
        <div class="flex justify-center items-center" v-if="council_events">
          <h5 v-if="council_events.length == 0" class="mb-1 text-dark">
            No Events
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../../store/axiosConfig.js";
import { mapState } from "vuex";
export default {
  name: "events",
  data() {
    return {
      council_events: null,
      activeItem: null,
      isshow: false,
    };
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
    selectItem(i) {
      this.activeItem = i;
      this.isshow = !this.isshow;
    },
    del_event(council_id, event_id) {
      instance
        .delete("/council/delete_event/" + council_id + "/" + event_id)
        .then((res) => {
          console.log(res.data);
          this.get_events(this.$route.query.id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    get_events(id) {
      instance
        .get("/public/council_event/" + id)
        .then((res) => {
          console.log(res.data);
          this.council_events = res.data.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.get_events(this.$route.query.id);
  },
};
</script>
<style>
@import "../../assets/css/council.css";
</style>
