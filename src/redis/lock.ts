import connect from "./connect";
import redisDel from "@yingyeothon/naive-redis/lib/del";
import redisSet from "@yingyeothon/naive-redis/lib/set";

const connection = connect();

export async function acquireRedisLock(
  key: string,
  timeoutMillis: number = 5000
): Promise<boolean> {
  const startMillis = Date.now();
  while (Date.now() - startMillis < timeoutMillis) {
    if (await redisSet(connection, key, "1", { onlySet: "nx" })) {
      return true;
    }
  }
  return false;
}

export async function releaseRedisLock(key: string): Promise<boolean> {
  await redisDel(connection, key);
  return true;
}

export async function doInRedisLock<R>(
  key: string,
  work: () => Promise<R>
): Promise<R> {
  if (!(await acquireRedisLock(key))) {
    throw new Error(`Cannot acquire redis lock`);
  }
  try {
    return await work();
  } finally {
    await releaseRedisLock(key);
  }
}
