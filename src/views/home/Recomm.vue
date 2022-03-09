<template>
  <div class="banner-bgc">
    <div class="banner">
      <el-carousel
        height="270px"
        indicator-position="none"
        :interval="5000"
        arrow="never"
        ref="change"
        @change="c"
      >
        <el-carousel-item v-for="item in bannerData" :key="item.imageUrl">
          <img class="bannerImg" :src="item.imageUrl" />
        </el-carousel-item>
        <div class="df">
          <a @click="change(0)" class="item" :class="{ changes: num == 0 }"></a>
          <a @click="change(1)" class="item" :class="{ changes: num == 1 }"></a>
          <a @click="change(2)" class="item" :class="{ changes: num == 2 }"></a>
          <a @click="change(3)" class="item" :class="{ changes: num == 3 }"></a>
          <a @click="change(4)" class="item" :class="{ changes: num == 4 }"></a>
          <a @click="change(5)" class="item" :class="{ changes: num == 5 }"></a>
          <a @click="change(6)" class="item" :class="{ changes: num == 6 }"></a>
          <a @click="change(7)" class="item" :class="{ changes: num == 7 }"></a>
        </div>
      </el-carousel>
      <img class="pcImg" src="../../assets/img/pc.png" />
      <img @click="prev" class="row-left" src="../../assets/img/left.svg" />
      <img @click="next" class="row-right" src="../../assets/img/right.svg" />
    </div>
    <!-- </div> -->
    <hot></hot>
  </div>
</template>

<script>
import { getBanner } from "@/api/branch";
import Hot from "./Hot.vue";
export default {
  components: {
    Hot,
  },
  data() {
    return {
      bannerData: [],
      isShow: false,
      num: "",
      nums: "",
    };
  },
  created() {
    this.getDate();
  },
  methods: {
    async getDate() {
      const gets = await getBanner();
      this.bannerData = gets.banners;
    },

    prev() {
      this.$refs.change.prev();
    },
    next() {
      this.$refs.change.next();
    },
    c(num) {
      this.num = num;
    },
    change(num) {
      this.$refs.change.setActiveItem(num);
    },
  },
};
</script>
<style lang="less" scoped>
.item {
  z-index: 999;
  background-color: #b4a9ab;
  height: 8px;
  width: 8px;
  border-radius: 100%;
  margin: 0 8px;
  position: relative;
  left: 280px;
  top: 250px;
  &:hover {
    cursor: pointer;
    background-color: #b90b0b;
  }
}
.changes {
  background-color: #b90b0b;
  // color: red;
}
.banner {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 984px;
  height: 270px;
  position: relative;

  .el-carousel {
    width: 730px;
  }
  .bannerImg {
    width: 730px;
  }
  .pcImg {
    width: 250px;
    height: 270px;
    z-index: 999;
  }
}
.row-left {
  z-index: 999;
  color: #fff;
  width: 30px;
  height: 60px;
  position: absolute;
  left: -5%;
  top: 40%;
  &:hover {
    cursor: pointer;
    background-color: #1f6ca091;
  }
}
.row-right {
  z-index: 999;
  color: #fff;
  width: 30px;
  height: 60px;
  position: absolute;
  top: 40%;
  right: -5%;
  &:hover {
    cursor: pointer;
    background-color: #1f6ca091;
  }
}
</style>
