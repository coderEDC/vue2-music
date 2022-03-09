<template>
  <div class="df all-song">
    <detail-left></detail-left>
    <div class="w-card"><div class="card"></div></div>
  </div>
</template>
<script>
import DetailLeft from "./DetailLeft.vue";
export default {
  components: {
    DetailLeft,
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
.all-song {
  width: 980px;
  box-sizing: border-box;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  margin: 0 auto;
  padding-top: 10px;
}
.w-card {
  height: 2339px;
  border-left: 1px solid #e1e1e1;
  padding-top: 20px;
  width: 270px;

  .card {
    background-color: #ffffff;
    width: 200px;
    height: 744px;
    // padding: 0px 40px 40px 30px;
    box-sizing: border-box;
  }
}
</style>
