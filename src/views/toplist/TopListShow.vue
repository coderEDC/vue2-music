<template>
  <div class="">
    <div>
      <div class="top-show">
        <showtop :songsDetail="songsDetail"></showtop>
      </div>
      <div class="table">
        <show-songs-list
          :songsDetail="songsDetail"
          :tableData="tableData"
        ></show-songs-list>
      </div>
    </div>
  </div>
</template>
<script>
import { getSongDetail } from "@/api/branch";

import Showtop from "./show/Showtop.vue";
import ShowSongsList from "./show/ShowSongsList.vue";
export default {
  components: {
    Showtop,
    ShowSongsList,
  },
  data() {
    return {
      songsDetail: {},
      songTable: [],
      tableData: [],
      id: 19723756,
    };
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getData();
    },
  },
  create() {},
  mounted() {
    this.id = this.$route.params.id;
    this.getData();
  },
  computed: {},
  methods: {
    //调用接口
    async getData() {
      const rec = await getSongDetail(this.id);
      this.songsDetail = rec.playlist;
      this.songTable = rec.playlist.tracks;

      // map一下拿到需要的接口数据;

      const c = this.songTable.map((item) => {
        return {
          songsName: item.al.name,
          songsImgs: item.al.picUrl,
          songsId: item.id,
          songsDetail: item.alia[0],
          songsArtist: item.ar[0].name,
          songsTime: item.dt,
        };
      });
      this.tableData = c;
    },
  },
};
</script>
<style lang="less" scoped>
.top-show {
  width: 660px;
  height: 158px;
  padding: 40px;
}
.table {
  width: 670px;
  padding: 0 30px 40px 40px;
}
</style>
