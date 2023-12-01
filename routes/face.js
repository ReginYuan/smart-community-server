const router = require("koa-router")();
const util = require("../utils/util");
const clickhouseDb = require("../config/clickhouse");

router.prefix("/face");

router.get("/list", async (ctx) => {
  console.log(111);
  try {
    let resultSet = await clickhouseDb.query({
      query: "SELECT * FROM face",
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
