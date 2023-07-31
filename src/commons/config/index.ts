export default () => ({
  env: process.env.NODE_ENV,
  port: process.env.APP_PORT,
  daasApiKey: process.env.DAAS_API_KEY,
});
