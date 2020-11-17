const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware("/devApi", { //匹配到http://127.0.0.1:3000/devApi/login
        target: 'http://www.web-jshtml.cn/api/react', //配置你有请求的地址->http://www.web-jshtml.cn/api/react/devApi/login
        changeOrigin: true,
        pathRewrite: {
            "^/devApi": '' //删除devApi->http://www.web-jshtml.cn/api/react/login
        }
    }))
}