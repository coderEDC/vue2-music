<template>
  <div class="all">
    <h3 class="title">
      <span class="line"></span> {{ dataList.artist.name }}简介
    </h3>
    <div class="world">
      {{ dataList.artist.briefDesc }}
    </div>
  </div>
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
    show() {
      return this.dataList.artist.briefDesc;
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.title {
  margin-top: 28px;
  margin-bottom: 18px;
  width: 640px;
  height: 19px;
  font-size: 14px;
}
.world {
  font-size: 12px;
  color: #666;
  text-indent: 24px;
}
.line {
  vertical-align: middle;
  width: 3px;
  height: 14px;
  margin-right: 5px;
  background-color: #c10d0c;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 2px;
}
</style>
