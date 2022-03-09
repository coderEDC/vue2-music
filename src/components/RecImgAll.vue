<template>
  <div class="img-all df" @click="detail">
    <div class="imags">
      <img :src="imgaItem.coverImgUrl" />
      <slot name="Css">
        <div class="play">背景图</div>
      </slot>
      <div class="world">
        <slot name="in">{{ imgaItem.name }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgaItem: {
      type: Object,
      require: true,
    },
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    detail() {
      this.$router.push("/detail/" + this.imgaItem.id);
      // console.log(this.imgaItem);
    },
  },
};
</script>
<style lang="less" scoped>
.imags {
  position: relative;
  padding: 0 0 30px 42px;
  left: -20px;
  img {
    width: 140px;
    height: 140px;
  }
  .play {
    position: absolute;
    bottom: 72px;
    width: 140px;
    height: 15px;
    font-size: 12px;
    background-color: rgba(18, 18, 19, 0.452);
    color: rgb(230, 238, 235);
    text-align: center;
  }
  .world {
    width: 140px;
    height: 39px;
    font-size: 14px;
    color: #000000;
    word-break: normal;
  }
}
</style>
