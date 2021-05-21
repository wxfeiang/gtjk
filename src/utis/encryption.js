
import CryptoJS from "crypto-js";

//加密操作
var  keys  = 'ea8a706c4c34a168'
function AESEncrypt(data, g_AES_key, g_AES_iv) {
  var key = CryptoJS.enc.Utf8.parse(g_AES_key)
  var options = {
    iv: CryptoJS.enc.Utf8.parse(g_AES_iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }
  var encryptedData = CryptoJS.AES.encrypt(data, key, options)
  return encryptedData.toString()
}

// 拼字符串
function encryption({ funcID, paramArr, interfaceName, retCount }) {
  var params = []
  for (var i = 0; i < paramArr.length; i++) {
    var obj = {
      id: paramArr[i][0],
      value: paramArr[i][1],
      type: paramArr[i][2],
      length: paramArr[i][3],
    }
    params.push(obj)
  }

  var cmd = {
    ver: '1.0',
    sql_cmd: interfaceName,
    sql_ret_count: retCount.toString(),
    Param: {
      root: params,
    },
    ret_type: 'json',
    bl1: 'bl1',
    bl2: 'bl2',
  }

  let dataAes = {
    funcID: funcID,
    type: '',
    param: cmd,
  }
  dataAes = JSON.stringify(dataAes)
  dataAes = AESEncrypt(dataAes, keys, keys)
  return dataAes
}

export {
  encryption
};
