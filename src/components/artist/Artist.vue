<template>
  <div class="artistdetail-all df">
    <div class="left-all">
      <div class="left">
        <p>{{ artistData.name }}</p>
        <div class="detail-img">
          <img class="artist-img" :src="artistData.cover" />
          <div class="self">
            <span>❤</span>
            <span>个人主页</span>
          </div>
          <div class="collect">
            <span>❤</span>
            <span>收藏</span>
          </div>
        </div>
      </div>
      <div class="to-router df" ref="ccc">
        <div class="to1" @click="to(1)" :class="{ show: n == 1 }">热门作品</div>
        <div class="to1" @click="to(2)" :class="{ show: n == 2 }">所有专辑</div>
        <div class="to1" @click="to(3)" :class="{ show: n == 3 }">相关MV</div>
        <div class="to1" @click="to(4)" :class="{ show: n == 4 }">艺人介绍</div>
        <div class="to2"></div>
      </div>
      <keep-alive>
        <component :is="currenTab"></component>
      </keep-alive>
    </div>
    <div class="right">
      <div class="show"></div>
    </div>
  </div>
</template>
<script>
import { getArtistsDetail } from "@/api/branch";
import Tabs1 from "./Tabs1.vue";
import Tabs2 from "./Tabs2.vue";
import Tabs3 from "./Tabs3.vue";
import Tabs4 from "./Tabs4.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Tabs1,
    Tabs2,
    Tabs3,
    Tabs4,
  },
  computed: {
    ...mapState(["dataList"]),
    currenTab() {
      return this.change;
    },
  },
  data() {
    return {
      artistData: [],
      change: Tabs4,
      n: 4,
    };
  },
  created() {
    this.getData();
  },
  mounted() {},

  methods: {
    ...mapMutations(["getDatass"]),
    async getData() {
      const rec = await getArtistsDetail(this.$route.params.id);
      this.artistData = rec.data.artist;
      this.getDatass(rec.data);
    },

    to(n) {
      this.change = "Tabs" + n;
      this.n = n;
    },
  },
};
</script>
<style lang="less" scoped>
.artistdetail-all {
  margin: 0 auto;
  width: 982px;
  min-height: 700px;
  background-color: #ffffff;
  border: 1px solid #333;
  border-top: none;
  p {
    width: 94px;
    font-size: 24px;
    color: #333;
    margin-bottom: 15px;
  }
  .detail-img {
    width: 640px;
    height: 300px;
    position: relative;
    .artist-img {
      width: 100%;
      height: 100%;
    }
    .self {
      width: 96px;
      height: 32px;
      background-color: #121518;
      text-align: center;
      border-radius: 5px;
      border: 1px solid #858484;
      box-sizing: border-box;
      opacity: 0.9;

      &:hover {
        cursor: pointer;
        background-color: #05080c;
      }
      span {
        color: #ffffff;
        line-height: 32px;
        font-size: 14px;

        &:nth-child(1) {
          margin-right: 5px;
        }
      }
    }
    .collect,
    .self {
      position: absolute;
    }
    .self {
      bottom: 25px;
      right: 100px;
    }
    .collect {
      bottom: 25px;
      right: 20px;
    }
    .collect {
      width: 76px;
      height: 32px;
      text-align: center;
      background-color: #121518;
      text-align: center;
      border-radius: 5px;
      border: 1px solid #858484;
      box-sizing: border-box;
      opacity: 0.9;
      &:hover {
        cursor: pointer;
        background-color: #05080c;
      }
      span {
        color: #ffffff;
        line-height: 32px;
        font-size: 14px;
        &:nth-child(1) {
          margin-right: 5px;
        }
      }
    }
  }
  .to-router {
    text-align: center;
    width: 638px;
    height: 39px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    .show {
      box-sizing: border-box;
      border-top: 2px solid red;
      border-bottom: none;
      border-left: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
    }
    div {
      box-sizing: border-box;
      line-height: 33px;
      width: 134px;
      padding: 2px 2px 0 0;
      font-size: 14px;
      color: #333;
      background-color: #f7f7f7;
      border-bottom: 1px solid #cccccc;
      box-sizing: border-box;
      border-top: 2px solid #cccccc;
    }
    .to1 {
      flex: 2;
      box-sizing: content-box;

      &:hover {
        border-top: 2px solid red;
        cursor: pointer;
      }
    }
    .to2 {
      flex: 1;
    }
  }
}
.right {
  width: 270px;
  height: 100%;
  background-color: #b4b2b2;
  margin: 0 auto;
  .show {
    width: 200px;
    height: 455px;
    background-color: #b4b2b2;
  }
}
.left-all {
  width: 640px;
  border-right: 1px solid #333;
  padding: 47px 30px 40px 39px;
}
</style>
