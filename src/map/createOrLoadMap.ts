import { redisGet, redisSet } from "../redis/store";

import Table from "./models/Table";
import generateEmptyTable from "./generateEmptyTable";
import { redisMapKey } from "./constants";

export default async function createOrLoadMap(): Promise<Table> {
  const maybe = await redisGet<Table>(redisMapKey);
  if (maybe) {
    return maybe;
  }
  const newTable = generateEmptyTable();
  await redisSet(redisMapKey, newTable);
  return newTable;
}
