const router = require("koa-router")();
const util = require("../utils/util");
const clickhouseDb = require("../config/clickhouse");

router.prefix("/device");

router.get("/list", async (ctx) => {
  console.log(111);
  try {
    let resultSet = await clickhouseDb.query({
      query: "SELECT * FROM device_master",
      format: "JSONEachRow"
    });
    const dataset = await resultSet.json();
    if (dataset) {
      ctx.body = util.success(dataset);
    }
  } catch (error) {
    ctx.body = util.fail(error.stack);
  }
});

module.exports = router;
