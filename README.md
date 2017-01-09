**Hot reload with webpack**
  ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors
*script tag*
  <script src="http://localhost:8080/public/helloWorld.js"></script>
*Webpack uses Socket.io to know when to refresh browser*

**compile source for production**
NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p

**tutorial**
https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html