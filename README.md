#### server의 port는 5000 client의 port는 3000
#### 서로 다른 포트끼리는 CORS이슈로 설정을 해놓지않으면 request를 할수없다.
#### proxy를 사용하여 해결하였다.
#### proxy사용법이 const `{createProxyMiddleware} = require('http-proxy-middleware');` 업데이트되었다.
