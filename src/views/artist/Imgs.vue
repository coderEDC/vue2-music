<template>
  <div>
    <div class="all">
      <div>
        <img :src="picUrl" @click="click" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    picUrl: {
      type: String,
    },
  },
  methods: {
    click() {
      this.$router.push("/artistdetail/" + this.id);
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  img {
    width: 130px;
    height: 130px;
  }
}
</style>
