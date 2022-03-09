<template>
  <div class="all df">
    <div class="imgs">
      <img :src="playlist.coverImgUrl" />
    </div>
    <div class="detail">
      <p>{{ playlist.name }}</p>
      <div class="times">
        <i class="el-icon-time"></i>&nbsp;
        <span>最近更新: </span>
        <span>{{ playlist.updateTime | dataFormat }}</span>
        <span></span>
      </div>
      <div class="btn-item">
        <span class="bti-item1">
          <i class="el-icon-video-play"></i>播放
          <i class="el-icon-plus"></i>
        </span>
        <span class="bti-item2">
          <i class="el-icon-folder-add"></i>
          {{ "(" + playlist.subscribedCount + ")" }}
        </span>
        <span class="bti-item3">
          <i class="el-icon-share">
            {{ "(" + playlist.shareCount + ")" }}
          </i>
        </span>
        <span class="bti-item4">
          <i class="el-icon-download"> 下载 </i>
        </span>
        <span class="bti-item5">
          <i class="el-icon-s-comment">
            {{ "(" + playlist.commentCount + ")" }}
          </i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    songsDetail: {
      type: Object,
      default: NaN,
    },
  },
  data() {
    return {
      playlist: {
        name: "",
        shareCount: "", //分享量
        subscribedCount: "", //订阅量
        coverImgUrl: "", //imgs
        updateTime: "", //更新时间
        commentCount: "", //评论数
      },
    };
  },
  created() {},
  watch: {
    songsDetail() {
      if (this.songsDetail) {
        const {
          name,
          shareCount,
          subscribedCount,
          coverImgUrl,
          updateTime,
          commentCount,
        } = this.songsDetail;
        this.playlist = {
          name,
          shareCount,
          subscribedCount,
          coverImgUrl,
          updateTime,
          commentCount,
        };
      }
      //   // 先把值解构出来

      //   //然后传过去
    },
  },
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.all {
  width: 660px;
  height: 155px;
  background-color: #ffffff;
}
.imgs {
  padding: 2px;
  border: 1px solid #cccccc;
  img {
    width: 149px;
    height: 149px;
  }
}
.detail {
  text-align: left;
  margin-top: 15px;
  margin-left: 30px;
  p {
    font-size: 20;
    color: #333;
  }
  .times {
    margin-top: 10px;
    font-size: 12px;
    color: #666666;
    margin-bottom: 15px;
  }
  .btn-item {
    margin-top: 30px;
    font-size: 12px;
    .bti-item1 {
      background-color: #2475c3;
      display: inline-block;
      color: #ffffff;
      line-height: 28px;
      padding: 0 8px;
      border: 1px solid #1369be;
      border-radius: 6px;
      &:hover {
        cursor: pointer;
        background-color: #3987d0;
      }
    }
    .bti-item2,
    .bti-item3,
    .bti-item4,
    .bti-item5 {
      display: inline-block;
      line-height: 28px;
      border-radius: 6px;
      padding: 0 5px;
      margin: 0 5px;
      border: 1px solid #c3c3c3;

      i {
        font-size: 14px;
        color: #666666;
      }
      background-color: #f2f2f2;
      color: #333333;
      &:hover {
        cursor: pointer;
        background-color: #f9f9f9;
      }
    }
  }
}
</style>
