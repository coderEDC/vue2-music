<template>
  <div>
    <div>
      <!-- 发表评论的那个地方 -->
      <div class="df comment-title">
        <p>评论</p>
        <span>{{ commentCount }}条评论</span>
      </div>

      <div class="my-comment">
        <!-- 我的评论头像 -->
        <img class="user-img" src="../../assets/img/奶茶.svg" alt="" />
        <div class="comment-ico">
          <div class="comment-ico1"></div>
          <div class="comment-ico2"></div>
        </div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="评论"
          v-model="commentData"
        >
        </el-input>
        <div class="user-btn fr">
          <span class="user-btn-w">140</span>
          <span class="user-btn-c">评论</span>
        </div>
        <div class="my">
          <h3>我的评论</h3>
          <div class="mymy">{{ commentData }}</div>
        </div>

        <!-- 评论内容 -->
        <div class="all-comments">
          <p>精彩评论</p>
          <div
            class="comment-text"
            v-for="item in commentAllData"
            :key="item.id"
          >
            <div class="mt df all ai">
              <img :src="item.user.avatarUrl" alt="" />
              <div class="world">
                <div class="comment-top">
                  <span class="commenter-id">{{ item.user.nickname }}</span>
                  <span class="commenter-text">{{ item.content }}</span>
                </div>
                <div class="comment-bottom df">
                  <span class="comment-time">
                    {{ item.time | dataFormat }}
                  </span>
                  <div class="comment-ico3 df">
                    <span>点赞 </span> | <span> 回复</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-pagination
            @current-change="gogog"
            layout="prev, pager, next "
            :total="50"
            class="pagination"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {dataFormat} from '../../main'
import { getComment } from "@/api/branch";
// import times from "./Time.vue";
export default {
  components: {
    // times,
  },
  props: {
    commentCount: {},
    id: {
      type: String,
    },
  },
  computed: {},
  data() {
    return {
      commentData: "", //双向绑定，看用户写了啥
      commentAllData: "",
      currenPage: 1,
      times: "",
    };
  },
  created() {
    this.getCommentData();
  },
  methods: {
    //请求评论数据
    async getCommentData() {
      const rec = await getComment(this.id, 5, this.currenPage);
      this.commentAllData = rec.comments;
      console.log(this.commentAllData);
    },
    gogog(row) {
      this.currenPage = row;
      this.getCommentData();
    },
  },
};
</script>
<style lang="less" scoped>
.pagination {
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: center;
}
.mymy {
  margin-top: 10px;
  height: 40px;
  border: 1px solid #333;
}
.my {
  clear: both;
}
.el-textarea {
  width: 578px;
  margin-left: 62px;
}
.user-btn {
  text-align: center;
  margin-top: 10px;
  .user-btn-w {
    font-size: 12px;
    color: #999999;
  }
  .user-btn-c {
    display: inline-block;
    font-size: 12px;
    width: 46px;
    height: 25px;
    background-color: #297ac7;
    border: 1px solid #0e65bc;
    color: #ffffff;
    box-shadow: 1px 1px 1px;
    box-sizing: border-box;
    line-height: 23px;
    margin-left: 10px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: #3b8ad4;
    }
  }
}

.comment-title {
  margin-top: 50px;
  align-items: baseline;
  padding-bottom: 5px;
  border-bottom: 2px solid red;
  margin-bottom: 15px;
  p {
    font-size: 20px;
    margin-right: 20px;
  }
  span {
    font-size: 12px;
  }
}
.my-comment {
  position: relative;
  .user-img {
    width: 50px;
    height: 50px;
    float: left;
    position: absolute;
    z-index: 9;
    left: -5px;
    top: 3px;
  }
  .comment-text {
    border-color: #cdcdcd;
    border-radius: 3px;
    border-bottom: 1px dotted #cccccc;
  }
  .comment-ico2,
  .comment-ico1 {
    height: 12px;
    width: 12px;
  }
  .comment-ico {
    position: absolute;
    top: 0px;
  }
  .comment-ico1 {
    box-sizing: border-box;
    margin-bottom: 2px;
    transform: rotate(45deg);
    top: 13px;
    position: relative;
    border: 1px solid #dcdfe6;
    left: 56px;
  }
  .comment-ico2 {
    height: 18px;
    width: 14px;
    position: relative;
    top: -4px;
    z-index: 9;
    background-color: #fff;
    // background-color: red;
    border-radius: 3px;
    left: 62px;
  }

  .all-comments {
    margin-top: 50px;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      font-weight: bold;
      font-size: 12px;
      color: #333;
      width: 640px;
      height: 21px;
      border-bottom: 1px solid #333;
      margin-bottom: 15px;
    }
    .comment-top {
      flex-grow: 2;
      width: 580px;
      font-size: 12px;
      margin-bottom: 10px;
      .commenter-id {
        color: #0c73c2;
        cursor: pointer;
        &::after {
          padding: 0 5px;
          content: ":";
          color: #333;
        }
      }
    }
    .comment-time {
      font-size: 12px;
    }
    .comment-bottom {
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #999999;
      .comment-ico3 {
        span {
          margin: 0 3px;
        }
      }
    }
  }
  .world {
    width: 580px;
    margin-left: 15px;
  }
  .all {
    margin: 15px 0;
  }
}
</style>
