
const { createProxyMiddleware } = require('http-proxy-middleware');

//tried to solve the CORS error by adding the proxy. also, manually set proxy in the package.json. but no luck till now. it took a lot of time

module.exports = function(app) {
  app.use(
    '/graphiql',
    createProxyMiddleware({
      target: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app', //API endpoint
      secure: false,
      changeOrigin: true
    })
  );
};