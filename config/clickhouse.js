const { createClient } = require("@clickhouse/client");
const config = require("./index");
const log4js = require("./../utils/log4j");

// 创建 ClickHouse 数据库连接
const clickhouseDb = createClient(config.clickhouseDbConfig);

const queryall = async () => {
  let resultSet; // 定义 resultSet 变量

  try {
    resultSet = await clickhouseDb.query({
      query: "SELECT * FROM Album",
      format: "JSONEachRow"
    });

    const dataset = await resultSet.json();
    // log4js.info("ClickHouse查询成功:", dataset);
    console.log('成功',error)
  } catch (error) {
    // log4js.error("ClickHouse查询失败:", resultSet); // 在这里也可以访问 resultSet
    // log4js.error("Error details:", error);
    console.log('error',error)
  }
};

queryall();
