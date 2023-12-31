const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const log4js = require("./utils/log4j");
const router = require("koa-router")();
const jwt = require("jsonwebtoken");
const koajwt = require("koa-jwt");
const util = require("./utils/util");
const users = require("./routes/users");
const menus = require("./routes/menus");
const roles = require("./routes/roles");
const depts = require("./routes/depts");
const leave = require("./routes/leave");
const face = require("./routes/face");
const device = require("./routes/device");
const faceid = require("./routes/faceid");
const websockify = require("koa-websocket");

// error handler
onerror(app);

require("./config/db");
require("./config/clickhouse");

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public/dist"));

app.use(
  views(__dirname + "/views", {
    extension: "pug"
  })
);

// logger
app.use(async (ctx, next) => {
  log4js.info(`get params:${JSON.stringify(ctx.request.query)}`);
  log4js.info(`post params:${JSON.stringify(ctx.request.body)}`);
  await next().catch((err) => {
    if (err.status == "401") {
      ctx.status = 200;
      ctx.body = util.fail("Token认证失败", util.CODE.AUTH_ERROR);
    } else {
      throw err;
    }
  });
});

app.use(
  koajwt({ secret: "imooc" }).unless({
    path: [/^\/api\/users\/login/]
  })
);

// Wrap the Koa app with WebSocket support
const appWithWebSocket = websockify(app);

// WebSocket路由
appWithWebSocket.ws.use((ctx, next) => {
  // 在这里处理WebSocket连接
  console.log("WebSocket连接建立");
  ctx.websocket.send("连接成功");

  // 继续处理后续中间件和路由
  return next(ctx);
});

router.prefix("/api");

router.use(users.routes(), users.allowedMethods());
router.use(menus.routes(), menus.allowedMethods());
router.use(roles.routes(), roles.allowedMethods());
router.use(depts.routes(), depts.allowedMethods());
router.use(leave.routes(), leave.allowedMethods());
router.use(face.routes(), face.allowedMethods());
router.use(device.routes(), device.allowedMethods());
router.use(faceid.routes(), faceid.allowedMethods());

// 应用Koa路由
appWithWebSocket.use(router.routes(), router.allowedMethods());

// error-handling
appWithWebSocket.on("error", (err, ctx) => {
  log4js.error(`${err.stack}`);
});

module.exports = appWithWebSocket;
