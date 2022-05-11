<template>
  <div>
    <Settings />
  </div>
</template>
<script>
import Settings from "../../components/projects/Settings";
export default {
  props: ["singleProjectHeader"],
  components: { Settings },
};
</script>
<style lang="scss" scoped></style>
