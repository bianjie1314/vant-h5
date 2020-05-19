/* eslint-disable no-empty */
// 配置API接口地址
import {baseUrl,uploadNetWorkFileBaseUrl,readNetWorkImagePath,locationUrl,uploadBossFileBaseUrl,readBossImagePath,
} from './env';


// 引用axios
var axios = require('axios')
// axios 配置
// axios.defaults.timeout = 5 * 1000;
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method&&pending[p].d===JSON.stringify(config.data)) {
      pending[p].f();
      pending.splice(p, 1);

    }
  }
};
//http request 拦截器
axios.interceptors.request.use(
  config => {
    removePending(config);
    config.cancelToken = new cancelToken((c) => {
      pending.push({u: config.url + '&' + config.method,d:JSON.stringify(config.data), f: c});
    });
    if (!config.data) {
      config.data = {};
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => { 
    return Promise.reject(error)
  }
);

function apiAxios (method, url, params, success, failure) {
  let serverUrl = url;
  axios({
    method: method,
    url:serverUrl,
    data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? JSON.stringify(params) : null,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(function (res) {
      if (res.data.code == "10200") {
        if (success) {
          success(res.data.data)
        }
      } else {
    //    MessageBox.alert(res.data.data.errorMsg || "错误");
        if(failure){
          failure(res.data.data);
        }
      }
    }).catch(function (err) {
      if (axios.isCancel(err)) {
      } else {
      }
    })
}

function uploadFileForm (url, params, success, failure,catchError) {
  // let serverUrl = uploadFileBaseUrl;
  // if(url != null){
  //   serverUrl += url;
  // }
  let serverUrl = url;
  axios.post(serverUrl,params,{headers: {
    'Content-Type': 'multipart/form-data'
  }}).then(function (res) {
    if (res.data.code == "10200" || res.data.code == '200') {
      if (success) {
        success(res.data.data)
      }
    } else {
      if(failure){
        failure(res.data.data);
      }
    }
}).catch(function (error) {
  // eslint-disable-next-line no-empty
  if (axios.isCancel(error)){
  }else{
  }
  if(catchError){
    catchError(error);
  }
});
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    let serverUrl = baseUrl;
    if(url != null){
      serverUrl = serverUrl + url;
    }
    return apiAxios('GET', serverUrl, params, success, failure)
  },
  post: function (url, params, success, failure) {
    let serverUrl = baseUrl;
    if(url != null){
      serverUrl = serverUrl + url;
    }
    return apiAxios('POST', serverUrl,params, success, failure)
  },
  put: function (url, params, success, failure) {
    let serverUrl = baseUrl;
    if(url != null){
      serverUrl = serverUrl + url;
    }
    return apiAxios('PUT', serverUrl, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    let serverUrl = baseUrl;
    if(url != null){
      serverUrl = serverUrl + url;
    }
    return apiAxios('DELETE', serverUrl, params, success, failure)
  },
  uploadFileForm:function (url, params, success, failure,catchError) {
    return uploadFileForm(url, params, success, failure,catchError)
  },
  getBySelfUrl: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  readNetWorkImagePath,locationUrl,uploadBossFileBaseUrl,readBossImagePath,uploadNetWorkFileBaseUrl
}
