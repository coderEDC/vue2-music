<template>
  <div>
    <div class="top">
      <div class="Recommend-all">
        <div class="nav df">
          <div class="bar" v-for="(listName, cndex) in list" :key="cndex">
            <router-link :to="listName.url">
              <span :class="{ show: $route.path == listName.url }">{{
                listName.name
              }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        { name: "推荐", url: "/recommend/index" },
        { name: "排行榜", url: "/recommend/toplist" },

        { name: "歌单", url: "/recommend/playlist" },
        { name: "主播电台", url: "*" },
        { name: "歌手", url: "/recommend/hotartist" },
        { name: "新碟上架", url: "*" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  background-color: red;
  line-height: 34px;
  .Recommend-all {
    width: 1100px;
    height: 34px;
    margin: 0 auto;
    background-color: red;
    .nav {
      width: 564px;
      position: relative;
      left: 200px;
      justify-content: center;

      .show {
        background-color: #9b0909;
        border-radius: 50px;
      }
      span {
        padding: 0 13px;
        font-size: 14px;
        margin: 0 13px 2px 13px;
        color: #ffffff;
        &:hover {
          cursor: pointer;
          background-color: #9b0909;
          border-radius: 50px;
        }
      }
    }
  }
}
</style>
