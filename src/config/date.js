/**
 * Created by yuchuang on 2017/8/31.
 */

import CryptoJS from 'crypto-js'
import {CODE_IV,CODE_KEY}  from './env'
export function setAesString(data){//解密
   var key  = CryptoJS.enc.Utf8.parse(CODE_KEY);
  var iv   = CryptoJS.enc.Utf8.parse(CODE_IV);
  var encrypted =CryptoJS.AES.encrypt(data,key,
    {
      iv:iv,
      mode:CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
  return encrypted.ciphertext.toString();    //返回的是16进制密文
}

export function getAesString(encrypted){//解密
  var cipherTextHexStr = CryptoJS.enc.Hex.parse(encrypted);
  var key  = CryptoJS.enc.Utf8.parse(CODE_KEY);
  var iv   = CryptoJS.enc.Utf8.parse(CODE_IV);
  var decrypted =CryptoJS.AES.decrypt({ciphertext:cipherTextHexStr},key,
    {
      iv:iv,
      mode:CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
  return decrypted.toString(CryptoJS.enc.Utf8) ;
}

let tid=null;
export function debounce(fn,wait){
  //设定默认的延迟时间
  wait=wait||500;
  //清除定时器
  tid && clearTimeout(tid);
  //定时器执行
  tid=setTimeout(fn,wait);
}

export function GetMonthDayCount(year, month) {
  switch (month) {
    case "01":{return 31;}
    case "03":{return 31;}
    case "05":{return 31;}
    case "07":{return 31;}
    case "08":{return 31;}
    case "10":{return 30;}
    case "12": {return 31;}
    case "04":{return 30;}
    case "06":{return 30;}
    case "09":{return 30;}
    case "11": {return 30;}
    case "02": {
      if (year % 4) {
        return 28;
      }
      else {
        if (year % 100) {
          return 29;
        }
        else {
          if (year % 400) {
            return 28;
          }
          else {
            return 29;
          }
        }
      }
    }
    default: {
      return 31;
    }
  }
}
