<template>
  <div class="left">
    <div class="detail df">
      <!-- 左侧大图片 -->
      <div>
        <img class="img" :src="detail.coverImgUrl" />
      </div>
      <!-- 右侧信息 -->
      <div class="detail-world">
        <!-- title -->
        <div class="title df">
          <div class="df">
            <slot>
              <img class="song-img" src="../../assets/img/song.png" />
            </slot>
            <p class="name">{{ detail.name }}</p>
          </div>
          <!-- 用户信息，以及创建时间 -->
          <div class="df creator-message">
            <img class="creator-img" :src="creator.backgroundUrl" />
            <span class="creator-nickname">{{ creator.nickname }}</span>
            <span class="creator-time">{{ time }} 创建</span>
          </div>
          <!-- 收藏量那些 -->
          <div class="df ico">
            <div class="ico-btn">
              <button class="ico-btn1">
                <img src="../../assets/img/播放.svg" />
                <span> 播放</span>
              </button>
              <button class="ico-btn2">+</button>
            </div>
            <div class="df all-btn">
              <img src="../../assets/img/收藏.svg" />
              <span>
                {{ otherDetail.playCount }}
              </span>
            </div>
            <div class="df all-btn">
              <img src="../../assets/img/分享.svg" />
              <span>
                {{ otherDetail.shareCount }}
              </span>
            </div>
            <div class="df all-btn">
              <img src="../../assets/img/下载.svg" />
            </div>
            <div class="df all-btn">
              <img src="../../assets/img/评论.svg" />
              <span>
                {{ otherDetail.commentCount }}
              </span>
            </div>
          </div>
        </div>
        <!-- 标签以及介绍 -->
        <div class="songTag df">
          <span class="song-Tag">标签 :</span>
          <div v-for="(item, index) in detail.tags" :key="index">
            <span class="song-item">{{ item }}</span>
          </div>
        </div>
        <div class="comment">
          <span class="comment-message">
            <span class="comment-item" :class="{ expansion: active }"
              >介绍: {{ detail.description }}</span
            >
          </span>

          <div
            v-show="detail.description.length >= 80"
            class="unfold"
            @click="active = !active"
          >
            <p v-if="active">展开↓</p>
            <p v-else>收起↑</p>
          </div>
        </div>
      </div>
    </div>
    <detail-song-list :playCount="otherDetail.playCount"></detail-song-list>
    <detail-comment
      :commentCount="otherDetail.commentCount"
      :id="id"
    ></detail-comment>
  </div>
</template>
<script>
//获取到数据,怎么获取？get？然后重新获取歌单信息，$bus从RecImgAll中获取到的也只是歌单
//如何从动态路由中传参？this.$route.id？
import { getSongDetail, getSong } from "@/api/branch";
import { getTime } from "@/utils/time"; //

import DetailSongList from "./DetailSongList.vue";
import DetailComment from "./DetailComment.vue";
export default {
  components: {
    DetailSongList,
    DetailComment,
  },
  data() {
    return {
      active: true,
      songDetail: [],
      id: "",
      detail: {
        coverImgUrl: "",
        name: "",
        description: "",
        tags: "",
        createTime: "",
      },
      //歌单创作者的信息
      creator: {
        nickname: "",
        backgroundUrl: "",
      },
      otherDetail: {
        // 评论
        commentCount: "",
        // 播放量
        playCount: "",
        // 分享次数
        shareCount: "",
      },
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getData();
    this.getSongData();
  },
  computed: {
    //computed运行的时候created不行
    time() {
      return getTime(this.detail.createTime);
      //如果直接用methods中获取的数据会报错，为什么会报错呢？感觉跟生命周期函数有关
      // return getTime(this.songDetail.playlist.createTime);
    },
  },
  methods: {
    //歌单基本信息
    async getData() {
      const rec = await getSongDetail(this.id);
      this.songDetail = rec;
      this.detail = this.songDetail.playlist;
      this.creator = rec.playlist.creator;
    },
    //歌单收藏数据这些
    async getSongData() {
      const rec = await getSong(this.id);
      this.otherDetail = rec;
    },
  },
};
</script>
<style lang="less" scoped>
.detail-all {
  justify-content: center;
}
.detail-world {
  width: 410px;
  // height: 255px;
  margin-left: 15px;
}
.left {
  // margin: 30px auto;
  width: 640px;
  // height: 1000px;
  height: 100%;
  padding: 0 30px 0 39px;

  .img {
    width: 208px;
    height: 208px;
  }
  .song-img {
    height: 24px;
    width: 54px;
  }
  .creator-img {
    width: 35px;
    height: 35px;
  }

  .title {
    flex-wrap: wrap;
    .name {
      font-size: 18px;
      color: #333333;
      margin-left: 8px;
    }
    .creator-message {
      margin-top: 15px;
      align-items: center;
      .creator-nickname {
        font-size: 14px;
        margin-left: 10px;
        margin-right: 10px;
        color: #0c73c2;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .creator-time {
        font-size: 12px;
        color: #999999;
      }
    }
    .ico {
      width: 420px;
      height: 31px;
      margin-top: 20px;
      .ico-btn {
        display: flex;
        margin-right: 10px;
        img {
          width: 15px;
          height: 15px;
          line-height: 31px;
        }
        .ico-btn1 {
          background-color: #3b8ad4;
          display: flex;
          justify-content: space-around;
          width: 61px;
          height: 31px;
          padding-right: 5px;
          align-items: center;
          border-radius: 5px;
          span {
            font-size: 10px;
            color: rgba(255, 255, 255, 0.877);
          }
        }
        .ico-btn2 {
          width: 31px;
          height: 31px;
          background-color: #3b8ad4;
          border-radius: 5px;
          color: rgba(255, 255, 255, 0.877);
        }
      }
    }
    .all-btn {
      border: 1px solid #c4c4c4;
      box-sizing: border-box;
      height: 31px;
      align-items: center;
      justify-content: center;
      background-color: #f2f2f2;
      border-radius: 7px;
      padding: 0 10px;
      margin: 0 3px;
      &:hover {
        cursor: pointer;
        background-color: #f9f9f9;
      }

      img {
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 10px;
        color: #333333;
      }
    }
  }
  .songTag {
    margin-top: 15px;

    .song-Tag {
      margin-right: 10px;
      font-size: 14px;
      line-height: 22px;
      color: #666666;
    }
    .song-item {
      font-size: 10px;
      color: #777777;
      background-color: #f5f5f5;
      border: 1px solid #c7c7c7;
      margin: 0 5px;
      height: 22px;
      padding: 0 10px;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        background-color: #fcfcfc;
      }
    }
  }
}
.comment {
  display: block;
  .comment-message {
    font-size: 12px;
    color: #777777;
    line-height: 2;
  }
  .comment-item {
    font-size: 12px;
    color: #777777;
  }
  .unfold {
    float: right;
    position: relative;
    top: 5px;
    color: #0c73c2;
    font-size: 12px;
  }
  .expansion {
    white-space: normal;
    line-height: 2;
    width: 410px;
    overflow: hidden;
    -webkit-line-clamp: 4; //显示行数
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
</style>
