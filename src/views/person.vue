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
            <div class="user_header_text">{{userInfo.nickname}}</div>
          </div>
          <div class="user_box" v-else>
            <img class="user_header_logo" src="@/../images/icon-user@2x.png" alt />
            <div class="user_header_text" @click="login">点击登录</div>
          </div>
          <div v-if="!userInfo.e_pay" class="open_box">
            <div class="open_tip">暂未开通E钱包</div>
          </div>
          <div v-else>
            <div class="qrcode" id="qrcode" @click="codeBig">
              <qrcode-vue :size="150" :value="codeUrl" :bg-color="'#fff'" :fg-color="'#000'" />
            </div>
            <div class="box_text box_tip">欢迎使用e支付 点击可以放大哦</div>
          </div>
        </div>
        <div class="box_footer" v-if="!userInfo.e_pay" @click="openPay">
          <van-button size="small" icon="after-sale" class="open_btn_min">开通e钱包</van-button>
          <van-icon class="right_icon" name="arrow" />
        </div>
        <div class="box_footer" v-else>
          <img class="money_icon" src="@/../images/money.png" alt />
          <div class="box_text">零钱</div>
        </div>
      </div>
    </div>
    <div class="small_box">
      <div class="small_box_inner" @click="payMedical">
        <img class="small_box_icon" src="@/../images/small_box_icon1.jpg" alt />
        <div class="small_box_title">城乡居民社保医保缴费</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview, Toast } from "vant";
import qrcodeVue from "qrcode.vue";
import axios from "axios";

export default {
  components: { qrcodeVue },
  data() {
    return {
      screenHeight: 0,
      userInfo: {},
      is_login: false,
      codeUrl: "",
    };
  },
  computed: {},
  created() {
    // if (localStorage.getItem('user_info') !== null) {
    //   this.is_login = true
    //   this.userInfo.user = JSON.parse(localStorage.getItem('user_info'))
    // }
    this.screenHeight = window.screen.availHeight - 50;
    if (window.location.href.indexOf("?") !== -1) {
      const url = window.location.href;
      if (url.indexOf("card_id") !== -1) {
        this.login();
      } else {
        const code = url
          .substring(url.indexOf("?") + 1, url.indexOf("#"))
          .split("&")[0]
          .split("=")[1];
        this.getToken(code);
      }
    } else {
      this.login();
    }
  },
  mounted() {
    // if (!this.is_login) {
    //   this.login();
    // }
    if (this.is_login) {
      if (this.userInfo.e_pay === true) {
        this.codeUrl = this.userInfo.wx_openid;
      }
    }
  },
  methods: {
    getToken(code) {
      Toast("开始登录");
      // if (localStorage.getItem('user_info') !== null) {
      //   this.is_login = true
      //   this.userInfo.user = JSON.parse(localStorage.getItem('user_info'))
      //   return
      // }
      let data = {
        code: code,
      };
      const that = this;
      // Toast(code)
      axios
        .post("https://ah.cihangca.com/sl/user/login/wx/code", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          Toast.clear();
          console.log(response);
          if (response.status !== 200) {
            Toast("内部错误");
          } else {
            // Toast("登录成功");
            this.userInfo = response.data.user;
            this.is_login = true;
          }
        })
        .catch((error) => {
          Toast.clear();
          Toast(JSON.stringify(error));
          console.log(error);
        });
    },
    login() {
      // if (!this.is_login) {
      const url = encodeURIComponent("https://sl.cihangca.com");
      window.location.replace(
        `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9bf461325256f69d&redirect_uri=` +
          url +
          `&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
      );
      // }
    },
    openPay() {
      if (!this.is_login) {
        return Toast({ message: "请登录账号" });
      }
      this.$router.push({
        path: "/bind",
        query: {
          _id: this.userInfo._id
        }
      });
    },
    payMedical() {
      window.location.href =
        "https://fee.icbc.com.cn/servlet/H5OnlinePaymentServlet?f=ICBCqr&t=2&p=33&x=0&z=&i=UEoxNzIwMTcyMjFBU1NQMDQ0MDI=&n=5Z+O5Lmh5bGF5rCR56S+5L+d5Yy75L+d57y06LS5&l=mQWKPAS/KDVm8oZZT7aOdJXFOLaH7HmRY6SFDGMm+2U2dt6u8ouimD9XjKdGuJ4+kEKjL+RhKWWe";
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
  bottom: 30%;
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
  font-size: 14px;
  height: 28px;
  border-radius: 20px;
  border-width: 0;
  color: rgb(1, 98, 166);
  margin: 15px 10px 15px 0;
}

.right_icon {
  margin-left: auto;
  color: rgb(1, 98, 166);
}

.small_box {
  width: 90%;
  border-radius: 10px;
  margin: auto;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.1);
}

.small_box_inner {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding: 10px 0;
}

.small_box_icon {
  width: 18px;
  margin-right: 5px;
}

.small_box_title {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
}
</style>
