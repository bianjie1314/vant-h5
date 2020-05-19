
 import util from './util.js'
 //格式化文件大小显示
export function dataURLtoBlob(dataurl) {//base64转blob
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

//格式化时间
export function formatTime(cellValue,formate){
    if(cellValue == null){
        return "";
    }
    if(formate == null){
        formate = "yyyy-MM-dd hh:mm:ss";
    }
    return util.formatDate.format(new Date(cellValue),formate);
}

/**
 *检测是否是微信平台
 */
export function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true; // 是微信端
    } else {
        return false;
    }
}