<template>
  <div class="main">
    <div class="all df">
      <div class="top-nav">
        <div class="df">
          <div class="top" v-for="(item, index) in items" :key="index">
            <span class="w1">{{ item }}</span>
            <span class="w2" v-show="index !== items.length - 1">|</span>
          </div>
        </div>
        <div class="p">
          <p>
            网易公司版权所有©1997-2022杭州乐读科技有限公司运营:浙网文[2021]
            1186-054号
          </p>
          <p>违法和不良信息举报电话:0571-89853516 举报邮箱:ncm5990@163.com</p>
          <p>
            粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
            33010902002564号
          </p>
        </div>
      </div>
      <div class="df imgs">
        <img src="../assets/img/古楼 .svg" />
        <img src="../assets/img/灯笼 .svg" />
        <img src="../assets/img/橘子.svg" />
        <img src="../assets/img/奶茶.svg" />
        <img src="../assets/img/福字.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "服务条款",
        "隐私政策",
        "儿童隐私政策",
        "版权投诉指引",
        "意见反馈",
        "广告合作",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  // margin-top: -14px;
  border-top: 1px solid #d3d3d3;
  box-sizing: border-box;
  background-color: #f2f2f2;
}
.all {
  justify-content: left;
  align-items: center;
  width: 980px;
  height: 115px;
  margin: 0 auto;
  .top {
    margin-bottom: 10px;
    font-size: 12px;
    color: #999999;
    .w1,
    .w2 {
      color: #999999;

      margin: 0 10px 0 0;
      &:nth-of-type(1):hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .p {
    font-size: 12px;
  }
  .imgs {
    width: 50px;
    height: 45px;
    margin-left: 175px;
    img {
      padding: 0 20px;
    }
  }
}
</style>
