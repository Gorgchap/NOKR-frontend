const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://185.221.152.242:5300',
        changeOrigin: true
    }
));
app.listen(1234);
