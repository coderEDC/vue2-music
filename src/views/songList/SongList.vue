<template>
  <div>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-card>
          <header>
            <div class="df header">
              <div class="df">
                <h2>全部</h2>
                <menus> </menus>
              </div>
              <button>
                <span>热门</span>
              </button>
            </div>
          </header>
          <div class="imgs">
            <rec-imgs :imagDate="imagDates"> </rec-imgs>
          </div>
          <el-pagination
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="imagDates.length"
            :current-page="currentPage"
          >
          </el-pagination>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { get } from "@/api/http";
import Menus from "./SongListMenu.vue";
import { getSongList } from "@/api/branch";
import RecImgs from "@/components/RecImgs";
export default {
  components: {
    Menus,
    RecImgs,
  },
  data() {
    return {
      currentPage: 1,
      imagDates: [],
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.handleCurrentChange();
  },
  computed: {},
  methods: {
    getData() {
      getSongList(this.currentPage, 35).then((res) => {
        this.imagDates = res.playlists;
      });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.getData();
    },
  },
};
</script>
<style lang="less" scoped>
.dd {
  display: none;
}
.el-col {
  height: 1774px;
  width: 980px;
}
header {
  width: 900px;
  height: 42px;
  border-bottom: 2px solid #c20c0c;
  margin-bottom: 40px;
  .header {
    justify-content: space-between;
  }
  button {
    width: 46px;
    height: 29px;
    background-color: rgb(218, 6, 6);
    border-radius: 5px;
  }
  span {
    line-height: 29px;
    font-size: 12px;
    color: #fff;
  }
}
</style>
