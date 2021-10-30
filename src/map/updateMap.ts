import { redisLockKey, redisMapKey } from "./constants";

import Table from "./models/Table";
import createOrLoadMap from "./createOrLoadMap";
import { doInRedisLock } from "../redis/lock";
import { redisSet } from "../redis/store";

export default async function updateMap(
  editor: (map: Table) => void
): Promise<Table> {
  return await doInRedisLock(redisLockKey, async () => {
    const map = await createOrLoadMap();
    editor(map);
    await redisSet(redisMapKey, map);
    return map;
  });
}
