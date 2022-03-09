<template>
  <div class="df artist-imag">
    <div v-for="item in artistsData" :key="item.id" class="all">
      <div>
        <imgs :picUrl="item.picUrl" :id="item.id"></imgs>
      </div>
      <div class="df text">
        <span class="name">{{ item.name }}</span>
        <span class="ico" :title="item.name + '的个人主页'">❤</span>
      </div>
    </div>
  </div>
</template>
<script>
import Imgs from "./Imgs.vue";
export default {
  props: ["artistsData"],
  components: {
    Imgs,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.artist-imag {
  flex-wrap: wrap;
}
img {
  width: 130px;
  height: 130px;
}
.text {
  justify-content: space-between;
}
.all {
  width: 130px;
  height: 154px;
  // height: 100%;
  padding-left: 13px;
  margin-bottom: 30px;
}
.name,
.ico {
  font-size: 12px;
}
.ico {
  color: palevioletred;
}
</style>
