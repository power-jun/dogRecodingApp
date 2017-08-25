import axios from 'axios';

let defaults = {};
function setup(params, callback) {
  Object.assign(defaults, params);
  // 初始化所有请求的默认参数
  axios.defaults.baseURL = 'http://localhost:3000/api';
  axios.defaults.params = {
    source: 'APP',
    // 将 app sessionId 作为每一个请求的默认参数
    // appSid: params.sessionId
  };
  initInterceptors();
  callback && callback();
}
function initInterceptors() {
  let CancelToken = axios.CancelToken;
  let source = CancelToken.source();
  //添加请求拦截器
  axios.interceptors.request.use((config) => {
    //在发送请求之前，加入 cancelToke，以备后续中止请求
    config.cancelToken = source.token;
    return config;
  }, (error) => {
    //请求错误时
    return Promise.reject(error);
  });
  //添加响应拦截器
  axios.interceptors.response.use((res) => {
    //对响应数据
    console.log('res=', res);
    if (res.data.status === 'INFO23') {
      source.cancel(`中止请求，原因：${res.data.message}`);
      return Promise.reject(res.data.message);
    }
    return res;
  }, (error) => {
    //响应错误时
    console.log('response error=', error);
    return Promise.reject(error);
  });
}
export default {
  setup
};
