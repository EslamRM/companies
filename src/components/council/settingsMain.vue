<template>
  <div class="container">
    <div
      class="mx-auto text-dark grid md:grid-cols-4 sm:grid-cols-2 gap-3 my-16 container"
    >
      <router-link to="/council/settings" class="" exact>
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Council Info</h6>
            <span class="text-xs">Basic information</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link to="/council/settings/add-company" class="">
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Company</h6>
            <span class="text-xs">add council company</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link to="/council/settings/add-member">
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Member</h6>
            <span class="text-xs">add council member</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link to="/council/settings/add-events">
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Events</h6>
            <span class="text-xs">add Events Information</span>
            <h5 class="mb-0"></h5>
          </div>
        </div>
      </router-link>
      <router-link to="/council/settings/add-gallary">
        <div class="card2 indexCard" role="button">
          <div class="p-3 pt-0 text-center card2-body">
            <h6 class="mb-0 text-center">Add Gallery</h6>
            <span class="text-xs">add Gallery Image</span>
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
