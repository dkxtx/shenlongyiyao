<template>
  <div class="page" :style="`height:${screenHeight}px`">
    <div class="box">
      <div class="box_all">
        <div class="box_header">
          <img class="logo" src="@/../images/logo.jpg" alt />
          <div class="box_text">神龙医药</div>
        </div>
        <div class="box_inner">
          <img class="qrcode" src="@/../images/qrcode.png" alt="">
        </div>
        <div class="box_footer">
          <img class="money_icon" src="@/../images/money.png" alt />
          <div class="box_text">零钱</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      screenHeight: 0,
    };
  },
  computed: {},
  created() {
    this.screenHeight = window.screen.availHeight - 50;
  },
  mounted() {},
  methods: {},
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
  height: 60%;
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

.box_inner {
}

.qrcode {
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 16%;
  left: 50%;
  margin-left: -70px;
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
</style>
