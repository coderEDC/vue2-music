<template>
  <div>
    <!-- <aplayer autoplay :music="musics" /> -->
    <!-- ccc -->
  </div>
</template>
<script>
// import Aplayer from "vue-aplayer";

import { getSongs } from "@/api/branch";
export default {
  components: {
    // Aplayer,
  },
  watch: {},
  data() {
    return {
      songs: null,
      musics: {
        title: "ccc",
        artist: null,
        src: null,
        pic: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("songsId", (song) => {
      this.songs = song;
      console.log(this.songs);
      this.music.artist = song.ar[0].name;
      this.music.title = song.name;
      console.log(song.ar[0].name);
    });
  },
  computed: {},
  methods: {
    async getData() {
      if (this.id) {
        const rec = await getSongs(this.id);
        console.log(rec);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
