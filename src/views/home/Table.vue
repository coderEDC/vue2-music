<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 230px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="index" width="20"> </el-table-column>
      <el-table-column prop="first" width="230px">
        <template slot="header">
          <div class="top-nav">
            <img
              class="logo-img"
              src="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg"
            />
            <div class="fr ccc">
              <p>飙升榜</p>
              <img class="imgs" src="../../assets/img/24gf-playCircle.svg" />
              <img class="imgs" src="../../assets/img/收藏.svg" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get } from "@/api/http";
// import { getTop } from "@/api/branch";
export default {
  data() {
    return {
      tableData: [],
      gdatas: {},
      topDatas: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const datas = await get("/toplist/detail");
      this.gdatas = datas.list[0].tracks;
      this.imgc = datas.list[0].coverImgUrl;
      for (let item of this.gdatas) {
        this.tableData.push(item);
      }
    },
    tableRowClassName({ rowIndex }) {
      for (let i = 0; i <= rowIndex; i++) {
        if (rowIndex % 2 == 0) {
          return "warning-row";
        } else {
          return "success-row";
        }
      }
      return "";
    },
  },
};
</script>

<style lang="less" scoped>
.logo-img {
  width: 80px;
  height: 80px;
  box-shadow: 10px 10px 0.1;
}
.imgs {
  width: 22px;
  height: 22px;
  margin-top: 15px;
}
.ccc {
  margin-right: 15px;
}
</style>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background-color: #f0f9eb;
}
</style>
