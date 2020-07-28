<template>
  <div class="page" :style="`height:${screenHeight}px`">
    <div class="box">
      <div class="box_all">
        <div class="box_header">
          <img class="logo" src="@/../images/logo.jpg" alt />
          <div class="box_text">神龙医药</div>
        </div>
        <div class="box_inner">
          <div class="user_box" v-if="is_login">
            <img class="user_header_logo" :src="userInfo.avatar" alt />
            <div class="user_header_text">{{userInfo.nick_name}}</div>
          </div>
          <div class="user_box" v-else>
            <img class="user_header_logo" src="@/../images/icon-user@2x.png" alt />
            <div class="user_header_text" @click="login">点击登录</div>
          </div>
          <div v-if="!is_open_pay" class="open_box">
            <div class="open_tip">暂未开通E钱包</div>
            <!-- <van-button class="open_btn" @click="openPay">点击开通</van-button> -->
          </div>
          <div v-else>
            <img class="qrcode" :src="codeUrl" alt @click="codeBig" />
            <div class="box_text box_tip">欢迎使用e支付 点击可以放大哦</div>
          </div>
        </div>
        <div class="box_footer" v-if="!is_open_pay" @click="openPay">
          <van-button size="small" icon="after-sale" class="open_btn_min">开通e钱包</van-button>
          <img class="right_icon" src="@/../images/icon／right@2x (2).png" alt="">
        </div>
        <div class="box_footer" v-else>
          <img class="money_icon" src="@/../images/money.png" alt />
          <div class="box_text">零钱</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  components: {},
  data() {
    return {
      screenHeight: 0,
      userInfo: {},
      is_login: false,
      is_open_pay: false,
      codeUrl:
        "data:image/png;base64,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",
    };
  },
  computed: {},
  created() {
    this.screenHeight = window.screen.availHeight - 50;
  },
  mounted() {},
  methods: {
    login() {
      this.is_login = !this.is_login;
    },
    openPay() {
      this.is_open_pay = !this.is_open_pay;
    },
    codeBig() {
      ImagePreview({
        images: [this.codeUrl],
        showIndex: false,
        loop: false,
      });
    },
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  background-color: rgb(1, 98, 166);
  padding-top: 50px;
}

.box {
  position: relative;
  width: 90%;
  height: 430px;
  margin: auto;
  border-radius: 10px;
  background-color: #fff;
}

.box_all {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.box_header {
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.box_text {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 103, 104, 1);
}

.logo {
  width: 28px;
  margin: 10px 10px 10px 0;
}

.user_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}

.user_header_logo {
  width: 56px;
  height: 56px;
  border-radius: 50px;
}

.user_header_text {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-left: 20px;
}

.qrcode {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  margin-left: -80px;
}

.box_footer {
  position: absolute;
  bottom: 0;
  width: 90%;
  border-top: 1px solid #d8d8d8;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.money_icon {
  margin: 15px 10px 15px 0;
}

.box_tip {
  position: absolute;
  bottom: 14%;
  left: 50%;
  margin-left: -101px;
}

.open_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
}

.open_tip {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 20px;
}

.open_btn {
  height: 35px;
  border-radius: 20px;
  border-color: rgb(1, 98, 166);
  color: rgb(1, 98, 166);
}

.open_btn_min {
  height: 28px;
  border-radius: 20px;
  border-width: 0;
  color: rgb(1, 98, 166);
  margin: 15px 10px 15px 0;
}

.right_icon {
  width: 8px;
  margin-left: auto;
}
</style>
