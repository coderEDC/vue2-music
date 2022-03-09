<template>
  <div class="RecArtist-all">
    <Title>
      <div slot="left">入驻歌手</div>
    </Title>

    <div
      class="infinite-list"
      v-infinite-scroll="load"
      style="overflow: auto"
      :infinite-scroll-disabled="loading"
      infinite-scroll-distance="200"
    >
      <artist-imag
        :artistsData="artistsData"
        class="infinite-list-item"
      ></artist-imag>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title";
import { getArtists } from "@/api/branch";
import ArtistImag from "./ArtistImag.vue";

export default {
  components: {
    Title,
    ArtistImag,
  },
  watch: {},
  data() {
    return {
      bigTitle: "入驻歌手",
      artistsData: [],
      nowpag: 1,
      limit: 10,
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    async getData() {
      const rec = await getArtists(this.limit, this.nowpag);
      this.artistsData = rec.artists;
    },
    load() {
      this.nowpag++;
      this.limit += 10;
      if (this.nowpag <= 3 || this.limit <= 100) {
        this.getData();
      } else {
        this.loading = true;
      }
      //调用函数，没啥卵用
    },
  },
};
</script>
<style lang="less" scoped>
.RecArtist-all {
  height: 100%;
}
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
  height: 100%;
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
