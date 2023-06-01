/* eslint-disable import/no-import-module-exports */
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "process";

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : "http://localhost:53682";

const context = ["/weatherforecast"];

module.exports = function middleproxy(app: any) {
  const appProxy = createProxyMiddleware(context, {
    target,
    secure: false,
    headers: {
      Connection: "Keep-Alive",
    },
  });

  app.use(appProxy);
};
