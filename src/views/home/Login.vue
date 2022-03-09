<template>
  <div>
    <el-dialog
      title="手机号登录"
      :visible="visible"
      @close="close"
      width="500px"
    >
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rule"
      >
        <el-row>
          <el-col :span="20">
            <el-form-item prop="phone">
              <el-input
                placeholder="请输入手机号"
                v-model.trim="ruleForm.phone"
                ref="phone"
              >
                <template slot="prepend">+86</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="15">
            <el-form-item prop="captcha">
              <el-input
                class="yanzhengma"
                type="password"
                v-model.trim="ruleForm.captcha"
                autocomplete="off"
                placeholder="请输入验证码"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <div class="input" @click="set">获取验证码</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="ccc" :span="6">
            <div class="login" @click="login">登录</div>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getSentd, getVerify } from "@/api/branch";
export default {
  props: {
    visible: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: "",
      ruleForm: { phone: null, captcha: "" },
      rule: {
        phone: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的电话", trigger: "blur" },
        ],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "请输入正确的验证码", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {
    // this.getPhone();
  },
  computed: {},
  methods: {
    close() {
      this.$emit("close");
    },
    set() {
      if (this.phone) {
        this.getPhone();
      } else {
        this.$refs.phone.focus();
      }
    },
    //请求验证码
    async getPhone() {
      const rec = await getSentd(this.ruleForm.phone);
      console.log(rec);
    },
    //请求登录
    async getLogin() {
      const rec = await getVerify(this.ruleForm.phone, this.ruleForm.captcha);
      console.log(rec);
    },
    login() {
      this.getLogin();
      this.$refs.ruleForm.validate((valid) => {
        console.log(valid);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.input {
  background-color: #f3f3f3;
  width: 90px;
  font-size: 12px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
}
.login {
  margin: 0 auto;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  width: 290px;
  height: 30px;
  line-height: 30px;
  background-color: #2a7bc8;
  border: 1px solid #3984ce;
  &:hover {
    cursor: pointer;
    background-color: #579ee0;
  }
}
.ccc {
  width: 470px;
  margin-left: 8px;
}
</style>
