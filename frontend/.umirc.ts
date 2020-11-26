import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  proxy:{
    '/tuling': {
      target: 'http://openapi.tuling123.com', //  需修改为真实后端服务地址
      changeOrigin: true,
      pathRewrite: { "^/tuling" : "" }
    }
  }
});
