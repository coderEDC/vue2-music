<template>
  <div class="title-nav">
    <div class="title">
      <slot name="left">
        <img class="round" src="../assets/img/圆点.svg" />
      </slot>
      <h2 class="hot-title" :bigTitle="bigTitle">{{ bigTitle }}</h2>

      <div class="table">
        <slot name="world">
          <span v-for="(item, index) in list" :key="index" :list="list">
            <span class="world"> {{ item }}</span>
            <span class="line" v-show="index !== list.length - 1">|</span>
          </span>
        </slot>
      </div>
      <div class="more">
        <span class="more-world">更多</span>
        <span class="more-line">→</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigTitle: {
      require: true,
      type: String,
    },
    list: {
      // require: true,
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.title-nav {
  border-left: 1px solid #fff;
  box-sizing: border-box;
  height: 33px;
  margin: 10px 0 20px 0;
}
.title {
  display: flex;
  width: 685px;
  line-height: 35px;
  position: relative;
  border-bottom: 2px #c20c0c solid;
  margin: 0 auto;

  .round {
    width: 20px;
    height: 20px;
    padding-right: 10px;
    margin-top: 8px;
  }

  .table {
    width: 239px;
    height: 16px;
    padding-left: 20px;

    .world {
      height: 14px;
      width: 24px;
      color: #666666;
      margin: 0 7px;
      font-size: 12px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .line {
      font-size: 3px;
      color: #666666;
    }
  }

  .more {
    position: absolute;
    right: 0px;

    .more-world {
      font-size: 12px;
      color: #666666;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .more-line {
      font-size: 12px;
      margin-left: 8px;
      color: red;
    }
  }
}
</style>
