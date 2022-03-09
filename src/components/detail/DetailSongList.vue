<template>
  <div class="detail-song">
    <div class="top-title">
      <h2 class="song-list-title fl">歌曲表单</h2>
      <span class="fl">{{ songs.length }}首歌</span>
      <span class="song-list-item2 fr"
        >播放次数: <span style="color: red">{{ playCount }}</span
        >次
      </span>
      <span class="song-list-item1 fr" @click="open">生成外连接播放器 </span>
    </div>
    <el-table
      ref="singleTable"
      :data="songs"
      highlight-current-row
      style="width: 100%"
      :fit="false"
      :stripe="true"
    >
      <el-table-column
        type="index"
        width="38"
        class-name="world"
      ></el-table-column>
      <el-table-column width="40">
        <template>
          <div class="song-imgs">
            <img class="imgs" src="../../assets/img/播放.svg" />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        property="name"
        label="歌曲标题"
        width="120"
      >
        <template slot-scope="scope">
          <div class="songsss" @click="getSongsId(scope.row)">
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column property="times" label="时长" width="120">
      </el-table-column>
      <el-table-column label="歌手"> </el-table-column>
      <el-table-column property="c" label="专辑"> </el-table-column>
    </el-table>

    <audio ref="audio"></audio>
  </div>
</template>
<script>
import { getSongAll, getSongs } from "@/api/branch";
export default {
  props: ["playCount"],
  data() {
    return {
      songs: [{ name: "" }],
      id: "",
      songUrl: "",
    };
  },
  computed: {},
  created() {
    this.id = this.$route.params.id;
    this.getData();
  },
  methods: {
    async getData() {
      const rec = await getSongAll(this.id);
      this.songs = rec.songs.splice(0, 20);
    },
    open() {
      this.$alert("由于版权保护,无法生成外链", {
        confirmButtonText: "确定",
      });
    },
    async getSongsId(songs) {
      // this.$bus.$emit("songsId", songs);
      const res = await getSongs(songs.id);
      console.log(res);
      this.songUrl = res.data[0].url;
      const audio = this.$refs.audio;
      audio.src = this.songUrl;
      audio.play();
    },
  },
};
</script>
<style lang="less" scoped>
.detail-song {
  margin-top: 100px;
}
.imgs {
  vertical-align: middle;
  width: 17px;
  height: 23px;
}

.top-title {
  width: 640px;
  height: 33px;
  padding-bottom: 10px;
  border-bottom: 2px solid red;
  .song-list-title {
    color: #535353;
    margin-right: 10px;
  }
  span {
    font-size: 12px;
    color: #333333;
    margin-top: 10px;
  }

  .song-list-item1 {
    color: #4996d1;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    margin-right: 10px;
  }
  .song-list-item2 {
    font-size: 12px;
    color: #333333;
  }
}
.songsss {
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.song-imgs {
  &:hover {
    cursor: pointer;
  }
}
</style>
