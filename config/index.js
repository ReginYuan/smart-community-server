/**
 * 配置文件
 */

// 配置 ClickHouse 数据库连接 数据库配置
const clickhouseDbConfig = {
  host: "http://218.56.104.54",
  port: 9000,
  user: "default",
  password: "Welcome1",
//   dataObjects: true
};

const URL = "mongodb://127.0.0.1:27017/blog";
module.exports = {
  URL,
  clickhouseDbConfig
};
