import axios from '@/utils/request'

/** * 获取access_token */
export function getAccessToken (params) {
  return axios({
    url: '/wawy/user/wx/accesstoken',
    method: 'get',
    params
  })
}

/** * 获取店铺列表 */
export function userStores (params) {
  return axios({
    url: '/wawy/user/stores',
    method: 'get',
    params
  })
}
// export function login (data) {
//   return axios({
//     url: '/user/login',
//     method: 'post',
//     data
//   })
// }

// export function smscode (data) {
//   return axios({
//     url: '/user/smscode',
//     method: 'post',
//     data
//   })
// }

// export function loginSmscode (data) {
//   return axios({
//     url: '/user/smscode_login',
//     method: 'post',
//     data
//   })
// }

// export function userInfo (params) {
//   return axios({
//     url: '/user/userinfo',
//     method: 'get',
//     params
//   })
// }

// export function contracts (params) {
//   return axios({
//     url: '/user/contracts',
//     method: 'get',
//     params
//   })
// }

// export function contractsurl (id) {
//   return axios({
//     url: '/user/contracts/' + id + '/download',
//     method: 'get'
//   })
// }

// export function contractsSign (id) {
//   return axios({
//     url: '/user/contracts/' + id + '/sign',
//     method: 'post'
//   })
// }

// export function verifybankcard (data) {
//   return axios({
//     url: '/user/user/verify/bankcard',
//     method: 'post',
//     data
//   })
// }

// export function verifySubmitCode (data) {
//   return axios({
//     url: '/user/user/verify/submit_code',
//     method: 'post',
//     data
//   })
// }

// export function emailBind (data) {
//   return axios({
//     url: '/user/user/email/bind',
//     method: 'post',
//     data
//   })
// }

// export function verifyFace (data) {
//   return axios({
//     url: '/user/verify/face',
//     method: 'post',
//     data
//   })
// }

// export function verifyBankcard (data) {
//   return axios({
//     url: '/user/verify/bankcard',
//     method: 'post',
//     data
//   })
// }

// export function verifySubmitcode (data) {
//   return axios({
//     url: '/user/verify/submit_code',
//     method: 'post',
//     data
//   })
// }

// export function changeEmail (data) {
//   return axios({
//     url: '/user/email/bind',
//     method: 'post',
//     data
//   })
// }

// export function getContract (data) {
//   return axios({
//     url: '/contracts',
//     method: 'post',
//     data
//   })
// }

// export function userVerifyFace (data) {
//   return axios({
//     url: '/user/user/verify/face',
//     method: 'post',
//     data
//   })
// }

// export function sendEmail (id) {
//   return axios({
//     url: '/user/contracts/' + id + '/send_email',
//     method: 'post'
//   })
// }

// export function getDepartments (params) {
//   return axios({
//     url: '/user/enterprise_user_departments',
//     method: 'get',
//     params
//   })
// }

// export function snedContract (data) {
//   return axios({
//     url: '/user/create_contracts',
//     method: 'post',
//     data
//   })
// }

// export function contractSmscode (data) {
//   return axios({
//     url: '/user/smscode_contract',
//     method: 'post',
//     data
//   })
// }
