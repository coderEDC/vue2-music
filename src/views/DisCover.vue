<template>
  <div class="all">
    <div class="bgc">
      <div class="home df">
        <div class="df logo">
          <img src="../assets/img/logo.svg" />
          <h2>网易云音乐</h2>
        </div>
        <ul
          class="title"
          v-for="(title, index) in titleList"
          :key="title.url"
          ref="click"
        >
          <router-link :to="title.url"
            ><li
              :class="{
                show: title.url == $route.path || index == currenIndex,
              }"
              @click="click(index)"
            >
              {{ title.name }}
            </li></router-link
          >
          <div
            v-show="$route.path == title.url || index == currenIndex"
            class="line"
          ></div>
        </ul>
        <div class="input">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            :trigger-on-focus="false"
            size="small"
          ></el-autocomplete>
        </div>

        <div class="auth">
          <button>创作者中心</button>
        </div>
      </div>
      <li class="line2"></li>
    </div>
    <keep-alive><router-view></router-view></keep-alive>

    <foots class="foots"></foots>
    <aplayer class="play" @mouseout="chang()" @mouseenter="ccc"></aplayer>
  </div>
</template>

<script>
import Aplayer from "./Aplayer.vue";
import Foots from "@/components/Foot";
import { getSearch } from "@/api/branch";
export default {
  components: {
    Foots,
    Aplayer,
  },
  watch: {},
  data() {
    return {
      currenIndex: 0,
      state: "",
      restaurants: [],
      titleList: [
        {
          name: "发现音乐",
          url: "/recommend/index",
        },
        {
          name: "我的音乐",
          url: "/my",
        },
        {
          name: "关注",
          url: "/concern",
        },
        {
          name: "商城",
          url: "/shop",
        },
        {
          name: "音乐人",
          url: "/musicer",
        },
        {
          name: "下载客户端",
          url: "/download",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    click(n) {
      this.currenIndex = n;
    },
    querySearchAsync(queryString, cb) {
      if (queryString) {
        let results = [];
        getSearch(queryString).then((rec) => {
          results = rec.result.songs.map((item) => {
            return { value: item.name };
          });
          cb(results);
        });
      }
    },
    handleSelect(item) {
      // if (item.id != 0) {
      //点击提示后需要做的操作，例如跳转页面等
      // }
      console.log(item);
    },
    chang() {
      console.log(1);
    },
    ccc() {
      console.log(2);
    },
  },
};
</script>

<style lang="less" scoped>
.up {
  background-color: red;
  height: 20px;
  width: 20px;
  position: relative;
  z-index: 999;
}
.bgc {
  background-color: #242424;
}
.all {
  position: relative;
  height: 100%;
  .line2 {
    width: 100%;
    height: 5px;
    background-color: red;
  }
}
.home {
  color: #ffffff;
  margin: 0 auto;
  width: 1100px;
  height: 70px;
  background-color: #242424;
  justify-content: space-around;
  line-height: 70px;
  .logo {
    width: 157px;
    padding-right: 20px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: relative;
      top: 15px;
      margin-right: 5px;
    }
  }
  .title {
    li {
      color: #cccccc;
      padding: 0 19px;
      font-size: 14px;
      position: relative;
      &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #000000;
      }
    }
  }
  .input,
  .auth {
    height: 30px;
    line-height: 70px;
  }
}
.line {
  position: relative;
  left: 42%;
  bottom: 43%;

  &::after {
    display: block;
    width: 4px;
    height: 8px;
    content: "❤";
    color: #000000;
  }
}
.show {
  background-color: #000000;
}
.play {
  // height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  // visibility: hidden;
  // z-index: 999;
  // display: none;
  // position: absolute;
}
</style>
