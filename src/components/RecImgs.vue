<template>
  <div class="img-all df">
    <div class="imags df" v-for="(item, index) in imagDate" :key="index">
      <title-all-imgs :imgaItem="item"></title-all-imgs>
    </div>
  </div>
</template>

<script>
import TitleAllImgs from "@/components/RecImgAll";

export default {
  components: {
    TitleAllImgs,
  },
  props: {
    imagDate: {
      type: Array,
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.img-all {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
