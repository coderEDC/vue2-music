<template>
  <div>
    <div>
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
import { getTime } from "@/utils/time";

export default {
  props: ["times"],
  created() {
    console.log(this.times);
  },
  computed: {
    time() {
      return getTime(this.times);
    },
  },
};
</script>
