import RedisSimple from "@yingyeothon/naive-redis/lib/simple";
import config from "./config";

export const {
  get: redisGet,
  set: redisSet,
  del: redisDelete,
} = new RedisSimple({
  config,
  encode: base64Encode,
  decode: base64Decode,
  keyPrefix: "gather-map::1/",
});

function base64Encode<T>(input: T | null): string {
  return Buffer.from(JSON.stringify(input), "utf8").toString("base64");
}

function base64Decode<T>(maybe: string): T {
  return JSON.parse(Buffer.from(maybe, "base64").toString("utf8"));
}
