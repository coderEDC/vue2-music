<template>
  <div class="df top-list">
    <div class="left">
      <top-list-left></top-list-left>
    </div>
    <div class="right">
      <topList-show></topList-show>
    </div>
  </div>
</template>
<script>
import TopListLeft from "./TopListLeft.vue";
import TopListShow from "./TopListShow.vue";
export default {
  components: {
    TopListLeft,
    TopListShow,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.left {
  width: 240px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}
.right {
  width: 740px;
}
.top-list {
  justify-content: center;
}
</style>
