<template>
  <div class="ArtistUtils-all">
    <h3 class="title"><slot name="title">推荐</slot></h3>
    <div v-for="(item, index) in title" :key="item.name">
      <router-link :to="item.url">
        <p
          :class="{ world: true, click: $route.path == item.url }"
          @click="click(index)"
        >
          <span
            class="change"
            :class="{ changeColor: $route.path == item.url }"
          ></span>
          <span>{{ item.name }}</span>
        </p>
      </router-link>
    </div>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
    },
    clickNum: {
      type: Number,
    },
  },
  data() {
    return {
      isClick: 0,
    };
  },
  methods: {
    click(c) {
      this.isClick = c;
    },
  },
};
</script>

<style lang="less" scoped>
.line {
  display: inline-block;
  width: 160px;
  margin-left: 5px;
  height: 1px;
  background-color: #d3d3d3;
}
.title {
  width: 140px;
  padding-left: 37px;
  font-size: 16px;
  color: #333333;
  text-align: left;
}
.ArtistUtils-all {
  width: 180px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding-left: 9px;
  padding-bottom: 20px;
}

.world {
  padding-left: 27px;
  font-size: 12px;
  width: 133px;
  height: 29px;
  line-height: 29px;
  margin: 5px 0;
  margin-bottom: 2px;
  border: 1px solid #d4d4d400;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.click {
  border-radius: 3px;
  color: #c20c0c;
  border: 1px solid #d4d4d4;
  background-color: #fafafa;
}
.change {
  position: relative;
  bottom: 1px;
  line-height: 29px;
  margin-right: 15px;
  display: inline-block;
  height: 0;
  width: 0;
  border: 3px solid #d3d3d3;
}
.changeColor {
  border-color: #c20c0c;
}
</style>
