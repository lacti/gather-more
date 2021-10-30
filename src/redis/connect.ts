import config from "./config";
import redisConnect from "@yingyeothon/naive-redis/lib/connection";

export default function connect() {
  return redisConnect(config);
}
