const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware("/devApi", { //匹配到devApi
        target: 'http://www.web-jshtml.cn/api/react', //配置你有请求的地址
        changeOrigin: true,
        pathRewrite: {
            "^/devApi": '' //删除devApi
        }
    }))
}