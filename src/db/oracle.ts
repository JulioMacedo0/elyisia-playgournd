import { DataSource } from "typeorm";
import { env } from "../lib/env";
import { ClientItem } from "../modules/client-item/model";

export const oracleDataSource = new DataSource({
  type: "oracle",
  username: env.ORACLE_USER,
  password: env.ORACLE_PASSWORD,
  port: env.ORACLE_PORT,
  host: env.ORACLE_HOST,
  database: env.ORACLE_DB_NAME,

  entities: [ClientItem],
  synchronize: false, // use migrations!
  migrationsRun: false,
  dropSchema: false,
  logging: env.NODE_ENV === "development" ? "all" : false,
});
