<template>
  <div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <button class="btn">
          主要按钮<i class="el-icon-arrow-down el-icon--right"></i>
        </button>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline"
          >螺蛳粉</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.btn {
  width: 86px;
  height: 31px;
  color: #0c73c2;
  background-color: #f9f9f9;
  border-radius: 3px;
  &:hover {
    background-color: #fdfdfd;
  }
}
</style>
