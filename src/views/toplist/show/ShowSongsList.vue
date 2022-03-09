<template>
  <div>
    <div class="title">
      <div class="titles">歌单列表</div>
      <div class="songs">100首歌</div>
      <div class="plays">
        播放:
        <span class="play">{{ songsDetail.playCount }}</span>
        次
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" :border="true">
      <el-table-column type="index" width="50"> </el-table-column>

      <el-table-column
        prop="songsName"
        label="标题"
        width="250"
        :show-overflow-tooltip="true"
        style="border: none"
      >
        <template slot-scope="scope">
          <i
            class="el-icon-video-play name-icon"
            @click="songsId(scope.row.songsId)"
          ></i>
          <span class="row-name">{{ scope.row.songsName }} </span>
          <span class="detail-world">{{ scope.row.songsDetail }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="songsTime" label="时长" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.songsTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="songsArtist"
        label="歌手"
        width="250"
        :border="true"
      >
        <template slot-scope="scope">
          <span class="songsArtist">{{ scope.row.songsArtist }}</span>
        </template>
      </el-table-column>
    </el-table>
    <audio ref="audio"></audio>
  </div>
</template>
<script>
import { getSongs } from "@/api/branch";
export default {
  props: {
    songsDetail: {
      type: Object,
      require: true,
    },
    tableData: {
      type: Array,
    },
  },
  data() {
    return {
      datas: [],
      id: null,
      rul: "",
    };
  },
  methods: {
    async songsId(id) {
      this.id = id;
      const rec = await getSongs(this.id);
      this.rul = rec.data;
      console.log(this.rul);
      const audio = this.$refs.audio;
      audio.src = this.rul[0].url;
      audio.play();
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  width: 670px;
  height: 33px;
  box-sizing: border-box;
  border-bottom: 2px solid #c20c0c;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  .titles {
    font-size: 20px;
  }
  .songs {
    font-size: 12px;
    color: #666666;
    margin-right: 400px;
  }
  .plays {
    font-size: 12px;
    color: #666666;
    .play {
      color: #c20c0c;
      font-weight: bold;
    }
  }
}
.row-name {
  font-size: 12px;
  color: #333;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.detail-world {
  font-size: 12px;
  color: #aeaeae;
}
.name-icon {
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
}
.songsArtist {
  font-size: 12px;
}
</style>
