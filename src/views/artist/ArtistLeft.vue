<template>
  <div>
    <artist-utils :title="artisterData"> </artist-utils>
    <artist-utils :title="artisterData1">
      <p slot="title">华语</p>
    </artist-utils>
    <artist-utils :title="artisterData2">
      <p slot="title">欧美</p>
    </artist-utils>
    <artist-utils :title="artisterData3">
      <p slot="title">日本</p>
    </artist-utils>
    <artist-utils :title="artisterData4">
      <p slot="title">韩国</p>
    </artist-utils>
    <artist-utils :title="artisterData5">
      <p slot="title">其他</p>
    </artist-utils>
  </div>
</template>
<script>
import ArtistUtils from "./ArtistUtils.vue";
export default {
  components: {
    ArtistUtils,
  },
  data() {
    return {
      artisterData: [
        { name: "推荐歌手", url: "/recommend/hotartist" },
        { name: "入驻歌手", url: "/recommend/recartist" },
      ],
      artisterData1: [
        { name: "华语男歌手", url: "*" },
        { name: "华语女歌手", url: "*" },
        { name: "华语组合/乐队", url: "*" },
      ],
      artisterData2: [
        { name: "欧美男歌手", url: "*" },
        { name: "欧美女歌手", url: "*" },
        { name: "欧美组合/乐队", url: "*" },
      ],
      artisterData3: [
        { name: "日本男歌手", url: "*" },
        { name: "日本女歌手", url: "*" },
        { name: "日本组合/乐队", url: "*" },
      ],
      artisterData4: [
        { name: "韩国男歌手", url: "*" },
        { name: "韩国女歌手", url: "*" },
        { name: "韩国组合/乐队", url: "*" },
      ],
      artisterData5: [
        { name: "其他男歌手", url: "*" },
        { name: "其他女歌手", url: "*" },
        { name: "其他组合/乐队", url: "*" },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
