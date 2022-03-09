export default {
  data() {
    //获取歌曲id
    return {
      songsId: null,
    };
  },
  created() {
    this.getSongsId();
  },
  methods: {
    getSongsId(id) {
      this.songsId = id;
    },
  },
};
