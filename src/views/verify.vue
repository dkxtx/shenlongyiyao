<template>
  <div class="page" :style="`height:${screenHeight}px`">
    <div style="width:100%;text-align:center;font-size:26px;font-weight:400;color:#333333">开通e钱包</div>
    <div
      style="width:100%;text-align:center;font-size:18px;font-weight:300;color:#7e7e7e;margin-top:20px;"
    >请输入验证码</div>
    <div style="width:100%;margin-top:30px">
      <van-password-input
        :value="value"
        :mask="false"
        :length="6"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
    <div style="margin-top:200px;">
      <van-button
        block
        type="info"
        native-type="submit"
        style="background-color: rgb(1, 98, 166);width:150px;margin:auto;border-raduis:4px;height:40px"
        @click="onSubmit"
      >提 交</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
import { PasswordInput, NumberKeyboard } from "vant";
import Vue from "vue";
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
export default {
  components: {},
  data() {
    return {
      screenHeight: 0,
      // query: {
      //   name: "",
      //   bankcard:"",
      //   start_date:"",
      //   end_date:'',
      //   idcard: "",
      //   phone: "",
      // }
      //  query: {
      //   name: "test",
      //   bankcard:"32183921898483298",
      //   start_date:"1999-01-01",
      //   end_date:'9999-01-01',
      //   idcard: "510703198908051215",
      //   phone: "15808168239",
      // }
      value: "",
      showKeyboard: true,
    };
  },
  computed: {},
  created() {
    this.screenHeight = window.screen.availHeight - 50;
  },
  mounted() {},
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length === 6) {
        this.errorInfo = "";
      } else {
        this.errorInfo = "";
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    onSubmit() {
      console.log(this.value);
      if (
        !this.value ||
        this.value === "" ||
        this.value === null ||
        this.value === undefined
      ) {
        Toast({ message: "请输入验证码" });
        return;
      }
      if (this.value.length !== 6) {
        Toast({ message: "请输入正确的验证码" });
        return;
      }
      Toast.loading({ message: "加载中...", forbidClick: true });
      const param = {
        code: this.value,
      };
      axios
        .post("https://ah.cihangca.com/sl/account/scode/verify", param, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          Toast.clear();
          const data = response.data;
          if (response.status !== 200) {
            Toast("内部错误");
          } else {
            const user_info = JSON.parse(localStorage.getItem("user_info"));
            if (user_info) {
              user_info.verified = true;
              localStorage.setItem("user_info", JSON.stringify(user_info));
            }
            this.$router.push({
              path: "person",
            });
          }
          
        })
        .catch((error) => {
          Toast.clear();
          // Toast(JSON.stringify(error));
        });
    },
    strDateTime(str) {
      var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
      if (r == null) return false;
      var d = new Date(r[1], r[3] - 1, r[4]);
      return (
        d.getFullYear() == r[1] &&
        d.getMonth() + 1 == r[3] &&
        d.getDate() == r[4]
      );
    },
    isCardNo(card) {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      return reg.test(card);
    },
    checkPhone(phone) {
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  background-color: white;
  padding-top: 50px;
}
</style>
