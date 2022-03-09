<template>
  <div class="top-left">
    <header class="top-music">
      <h4 class="music-top">云音乐特色榜</h4>
      <div v-for="item in topData" :key="item.id">
        <div
          @click="top(item.id)"
          :class="{ show: list == item.id }"
          class="top-item df"
        >
          <img :src="item.coverImgUrl" />
          <div>
            <p>{{ item.name }}</p>
            <p>{{ item.updateFrequency }}</p>
          </div>
        </div>
      </div>
    </header>
    <footer>
      <h4 class="music-top">全球媒体榜</h4>
      <div v-for="item in topDataAll" :key="item.id">
        <div
          class="top-item df"
          @click="top(item.id)"
          :class="{ show: list == item.id }"
        >
          <img :src="item.coverImgUrl" />
          <div>
            <p>{{ item.name }}</p>
            <p>{{ item.updateFrequency }}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { getTops } from "@/api/branch";
export default {
  data() {
    return {
      list: 19723756,
      topData: [],
      topDataAll: [],
    };
  },
  watch: {},
  mounted() {
    this.getData();
  },
  computed: {},
  methods: {
    async getData() {
      const rec = await getTops();
      this.topData = rec.list.splice(0, 4);
      this.topDataAll = rec.list;
      this.$router.push("/recommend/toplist/" + 19723756);
    },
    top(n) {
      this.list = n;
      this.$router.push("/recommend/toplist/" + this.list);
    },
  },
};
</script>
<style lang="less" scoped>
.top-left {
  padding-top: 40px;
  .top-music {
    margin-bottom: 20px;
  }
  .music-top {
    width: 215px;
    height: 16px;
    padding: 0 10px 12px 15px;
  }
  img {
    width: 40px;
    height: 40px;
  }
  .top-item {
    width: 220px;
    height: 42px;
    background-color: #f9f9f9;
    padding: 10px 0 10px 20px;
    &:hover {
      background-color: #e6e6e6;
      cursor: pointer;
    }
    p {
      margin-left: 15px;

      font-size: 12px;
      &:nth-child(1) {
        color: #000000;
        margin-bottom: 8px;
      }
      &:nth-child(2) {
        color: #999999;
      }
    }
  }
  .show {
    background-color: #e6e6e6;
    cursor: pointer;
  }
}
</style>
