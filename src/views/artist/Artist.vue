<template>
  <div class="call df">
    <!-- 左侧栏 -->
    <div class="left">
      <artist-left></artist-left>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import ArtistLeft from "./ArtistLeft.vue";
export default {
  components: {
    ArtistLeft,
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
.call {
  width: 979px;
  margin: 0 auto 0 auto;
  height: 100%;
}
.left {
  width: 182px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding-top: 40px;
  border: 1px solid #d3d3d3;
  height: 100%px;
}
.right {
  padding-top: 35px;
  background-color: #fffefe;
}
</style>
