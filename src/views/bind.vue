<template>
  <div class="page" :style="`height:${screenHeight}px`">
    <div style="width:100%;text-align:center;font-size:26px;font-weight:400;color:#333333">开通e钱包</div>
    <div style="width:100%;text-align:center;font-size:18px;font-weight:300;color:#7e7e7e;margin-top:20px;">请绑定持卡人本人的工行银行卡</div>
    <van-form @submit="onSubmit" style="margin-top:30px">
      <van-field v-model="query.name" name="持卡人姓名" label="持卡人姓名" placeholder="持卡人姓名" :rules="[{ required: true, message: '请填写持卡人姓名' }]"  left-icon="user-o"/>
      <van-field v-model="query.bankcard" name="银行卡" label="银行卡" placeholder="银行卡" :rules="[{ required: true, message: '请填写银行卡号' }]"  left-icon="ecard-pay"/>
      <van-field v-model="query.start_date" name="证件签发日期" label="证件签发日期" placeholder="如有效期为永久填9999-12-30）" :rules="[{ required: true, message: '请填写证件签发日期' }]"  left-icon="calender-o"/>
      <van-field v-model="query.end_date" name="证件失效日期" label="证件失效日期" placeholder="如有效期为永久填9999-12-30）" :rules="[{ required: true, message: '请填写证件失效日期' }]"  left-icon="calender-o"/>
      <van-field v-model="query.idcard" name="身份证号" label="身份证号" placeholder="身份证号" :rules="[{ required: true, message: '请填写身份证号' }]" left-icon="idcard"/>
      <van-field v-model="query.phone" name="手机号" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]" left-icon="phone-o"/>
       <div style="margin-top:200px;">
        <van-button block type="info" native-type="submit" style="background-color: rgb(1, 98, 166);width:150px;margin:auto;border-raduis:4px;height:40px">开 通</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  components: {},
  data() {
    return {
      screenHeight: 0,
      query: {
        name: "",
        bankcard:"",
        start_date:"",
        end_date:'',
        idcard: "",
        phone: "",
      }
    };
  },
  computed: {},
  created() {
    this.screenHeight = window.screen.availHeight - 50;
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log(this.query)
      if (!this.strDateTime(this.query.start_date)) {
        return Toast('请输入正确的证件签发日期，如：1900-01-01（有效期为永久填9999-12-30）');
      }
      if (!this.strDateTime(this.query.end_date)) {
        return Toast('请输入正确的证件失效日期，如：1900-01-01（有效期为永久填9999-12-30）');
      }
      if (!this.isCardNo(this.query.idcard)) {
        return Toast('请输入正确的身份证号码');
      }
      if (!this.checkPhone(this.query.phone)) {
        return Toast('请输入正确的手机号码')
      }
    },
     strDateTime(str){
       var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
       if(r==null)return false;
       var d= new Date(r[1], r[3]-1, r[4]);
       return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
    },
    isCardNo(card) { 
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
      if(reg.test(card) === false) { 
        return false; 
      } 
    },
    checkPhone(){ 
      var phone = document.getElementById('phone').value;
      if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        return false; 
      } 
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  background-color: white;
  padding-top: 50px;
}
</style>
