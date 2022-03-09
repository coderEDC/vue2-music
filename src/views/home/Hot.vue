<template>
  <div class="hot-all df">
    <div class="left">
      <!-- 左侧热门推荐 -->
      <!-- 此处要有两个中转地方，第一个接收传的整体数据，第二个用来展示个体数据 -->
      <div class="rec">
        <titles :bigTitle="bigTitle" :list="title"></titles>
        <div class="df image-bar">
          <!-- -->
          <title-imgs :imagDate="imagDate"></title-imgs>
        </div>
      </div>
      <!-- 左侧新碟上架 -->
      <div class="new-song">
        <titles :bigTitle="newAl"></titles>
        <el-card>
          <div class="new-song-list">
            <!-- 两个轮播图 -->
            <el-carousel
              ref="change"
              height="184px"
              :autoplay="false"
              :loop="false"
            >
              <el-carousel-item>
                <div
                  class="song fr"
                  v-for="item in newSong.newSong1"
                  :key="item.id"
                >
                  <img class="song-imgs" :src="item.picUrl" />
                  <p>{{ item.name }}</p>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div
                  class="song fr"
                  v-for="item in newSong.newSong2"
                  :key="item.id"
                >
                  <img class="song-imgs" :src="item.picUrl" />
                  <p>{{ item.name }}</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </div>
      <!-- 左侧榜单 -->
      <div class="top">
        <titles :bigTitle="top"></titles>
        <div class="df top-song">
          <tables class="top-song-list"></tables>
          <tables class="top-song-list"></tables>
          <tables class="top-song-list"></tables>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <div class="login">
        <span>登录网易云音乐,可以享受无限收藏的乐趣,并且无限同步到手机</span>
        <div class="login-world" @click="visible = true">用户登录</div>
      </div>
      <div class="art">
        <div class="artwrold df">
          <span>入驻歌手</span>
          <span>查看全部></span>
        </div>
        <div v-for="item in art" :key="item.id" class="df art-main">
          <img :src="item.img1v1Url" />
          <p>{{ item.name }}</p>
        </div>
        <button>申请成为网易云歌手</button>
      </div>
      <div class="host">
        <div class="hostwrold">
          <p>热门主播</p>
        </div>
        <div v-for="item in hosts" :key="item.id" class="hostmain df">
          <img :src="item.avatarUrl" />
          <div class="host-main-wrold">
            <p>{{ item.nickName }}</p>
            <p>没找到描述接口</p>
          </div>
        </div>
      </div>
    </div>
    <logins :visible="visible" @close="close"></logins>
  </div>
</template>

<script>
import Logins from "./Login.vue";

import TitleImgs from "@/components/RecImgs";
import Titles from "@/components/Title";
import { get } from "@/api/http";
import { getHost } from "@/api/branch";
import Tables from "@/views/home/Table.vue";
export default {
  components: {
    Titles,
    TitleImgs,
    Tables,
    Logins,
  },
  data() {
    return {
      visible: false,
      title: ["华语", "流行", "摇滚", "民谣", "电子"],
      bigTitle: "热门推荐",
      newAl: "新碟上架",
      top: "榜单",
      imagDate: [],
      newSong: {
        newSong1: [],
        newSong2: [],
      },
      art: [],
      hosts: [],
    };
  },
  mounted() {
    this.getImag();
    this.getNewSong();
    this.getArt();
    this.getHosts();
  },
  methods: {
    close() {
      this.visible = false;
    },
    //调用接口
    //热门推荐的
    async getImag() {
      const getImags = await get("/top/playlist/highquality");
      console.log(getImags);
      this.imagDate = getImags.playlists.slice(0, 8);
    },
    //新碟上架的
    async getNewSong() {
      const newSongs = await get("/top/album");
      this.newSong.newSong1 = newSongs.monthData.slice(0, 5);
      this.newSong.newSong2 = newSongs.monthData.slice(5, 10);
    },
    //侧边歌手的
    async getArt() {
      const arts = await get("/top/artists");
      this.art = arts.artists.slice(0, 5);
    },
    //侧边主播
    async getHosts() {
      const host = await getHost({ limit: 5 });
      this.hosts = host.data.list;
    },
  },
};
</script>

<style lang="less" scoped>
.hot-all {
  position: relative;
  box-sizing: border-box;
  width: 984px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  border-right: 1px solid #bdbdbd;
  .left {
    margin-left: 2px;
    width: 730px;
    height: 100%;
    border-left: 1px solid #00000042;
    border-bottom: 1px solid #00000042;
    border-right: 1px solid #00000042;
    box-sizing: border-box;
  }
}
.rec {
  margin-bottom: 30px;
}
.el-card {
  background-color: #f5f5f5;
  width: 669px;
  // height: 184px;
  margin: 10px auto 10px auto;
}

.el-carousel {
  .song-imgs {
    width: 110px;
    height: 110px;
    margin: 15px 0px 0 0px;
  }
  p {
    width: 110px;
    height: 20px;
    font-size: 12px;
    margin: 5px 5px 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.top {
  margin-top: 20px;
}
.top-song {
  justify-content: center;
  padding-bottom: 40px;
  .top-song-list {
    border: 1px solid rgb(145, 142, 142);
  }
}
.right {
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  .login {
    text-align: center;
    width: 250px;
    padding-top: 15px;
    background-color: #e6e6e6;
    box-sizing: border-box;
    height: 126px;
    span {
      display: inline-block;
      width: 205px;
      height: 44px;
      font-size: 12px;
      color: #666666;
    }
    .login-world {
      color: #ffffff;
      width: 100px;
      height: 31px;
      font-size: 12px;
      background-color: #cf0f16;
      border-radius: 6px;
      line-height: 31px;
      margin: 5px auto;
      border: 1px solid #9b0409;
      &:hover {
        cursor: pointer;
        background-color: #e9272f;
      }
    }
  }
  .art {
    margin-top: 20px;
    .artwrold {
      margin: 10px auto;
      width: 210px;
      height: 24px;
      justify-content: space-between;
      font-size: 12px;
      border-bottom: 1px solid #cccccc;
      :nth-last-of-type(1) {
        color: #666666;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    .art-main {
      margin: 10px auto;
      justify-content: center;
    }
    img {
      width: 62px;
      height: 62px;
    }
    p {
      text-align: center;
      width: 133px;
      height: 62px;
      line-height: 60px;
      background-color: #f4f4f4;
      padding: 1px 14px 1px 1px;
      box-sizing: border-box;
      border: 1px solid #e9e9e9;
    }
    button {
      width: 205px;
      height: 31px;
      margin-left: 20px;
      font-size: 12px;
      padding-right: 5px;
      background-color: #f7f7f7;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
        background-color: #ffffff;
      }
    }
  }

  .host {
    .hostmain {
      padding-left: 20px;
      justify-content: left;
      margin: 10px auto;
      .host-main-wrold {
        font-size: 12px;
        padding-left: 10px;
      }
    }
    width: 250px;
    // height: 294px;
    margin-top: 30px;
    .hostwrold {
      margin: 30px auto 20px auto;
      width: 210px;
      height: 24px;
      font-size: 12px;
      border-bottom: 1px solid #cccccc;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
