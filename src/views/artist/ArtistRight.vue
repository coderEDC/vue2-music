<template>
  <div class="ArtistRight-all">
    <div class="top">
      <Title :bigTitle="bigTitle">
        <div slot="left"></div>
      </Title>
      <artist-imag :artistsData="artistsData"></artist-imag>
      <span class="line"></span>
    </div>
    <div class="bottom" v-for="item in artistsData" :key="item.id">
      <div class="bottom-name df">
        <div class="name">
          <span>{{ item.name }} </span>
          <span :title="item.name">❤</span>
        </div>
        <div class="name">
          <span>{{ item.name }} </span>
          <span :title="item.name">❤</span>
        </div>
        <div class="name">
          <span>{{ item.name }} </span>
          <span :title="item.name">❤</span>
        </div>
        <div class="name">
          <span>{{ item.name }} </span>
          <span :title="item.name">❤</span>
        </div>
        <div class="name">
          <span>{{ item.name }} </span>
          <span :title="item.name">❤</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArtistImag from "./ArtistImag.vue";
import Title from "@/components/Title";
import { getArtists } from "@/api/branch";
export default {
  components: {
    Title,
    ArtistImag,
  },
  data() {
    return {
      bigTitle: "推荐歌手",
      artistsData: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    async getData() {
      const rec = await getArtists(20);
      this.artistsData = rec.artists;
    },
  },
};
</script>
<style lang="less" scoped>
.ArtistRight-all {
  margin-bottom: 50px;
  width: 719px;
  height: 100%;
  padding-left: 17px;
}
.line {
  display: inline-block;
  height: 0px;
  width: 100%;
  margin: 0 auto 20px auto;
  border: 1px dashed #999999;
}

.bottom {
  .bottom-name {
    width: 719px;
    height: 100%;
    margin-left: 10px;
  }
}

.name {
  width: 130px;
  height: 30px;
  font-size: 12px;
  padding-right: 17px;
  :nth-child(1) {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  :nth-child(2) {
    color: #db7093;
  }
}
</style>
