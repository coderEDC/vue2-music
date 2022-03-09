<template>
  <div>sadasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    console.log(this.dataList);
  },
  computed: {
    ...mapState(["dataList"]),
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
