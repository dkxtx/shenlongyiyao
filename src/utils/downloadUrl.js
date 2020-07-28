let inputElement = document.createElement('input')
inputElement.style.position = 'fixed'
inputElement.style.top = '-100000px'
document.body.appendChild(inputElement)
/**
 * 复制内容到剪贴板
 * @param {String} value 待复制的值
 * @return {Promise}
 */
export function copyToBoard (value) {
  inputElement.value = value
  inputElement.focus()
  inputElement.select()
  return new Promise((resolve, reject) => {
    try {
      document.execCommand('copy')
      inputElement.blur()
      // document.body.removeChild(inputElement)
      resolve(true)
    } catch (err) {
      reject(err)
    }
  })
}
