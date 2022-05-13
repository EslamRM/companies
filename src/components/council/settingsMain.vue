<template>
  <div class="container">
    <div
      class="mx-auto text-dark grid md:grid-cols-4 sm:grid-cols-2 gap-3 my-16 container"
    >
      <router-link
        :to="{
          path: '/council/settings',
          query: { name: $route.query.name, id: $route.query.id },
        }"
        class=""
        exact
      >
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Council Info</h6>
            <span class="text-xs">Basic information</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          path: '/council/settings/add-company',
          query: { name: $route.query.name, id: $route.query.id },
        }"
        class=""
      >
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Company</h6>
            <span class="text-xs">add council company</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          path: '/council/settings/add-member',
          query: { name: $route.query.name, id: $route.query.id },
        }"
      >
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Member</h6>
            <span class="text-xs">add council member</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          path: '/council/settings/add-events',
          query: { name: $route.query.name, id: $route.query.id },
        }"
      >
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Events</h6>
            <span class="text-xs">add Events Information</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link
        :to="{
          path: '/council/settings/add-media',
          query: { name: $route.query.name, id: $route.query.id },
        }"
      >
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Media</h6>
            <span class="text-xs">add Media Element</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "settings-main",
};
</script>
<style>
.indexCard {
  padding: 10px;
}
.indexCard:hover {
  color: #5b52e7 !important;
  transform: scale3d(1.1, 1.1, 1.1);
}
</style>
