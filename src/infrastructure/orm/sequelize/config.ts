/* eslint-disable no-console */
import { Sequelize } from "sequelize";
import { env } from "../../config/env";

const connection = (): Sequelize => {
  const sequelize = new Sequelize({
    dialect: "postgres",
    host: env.DB_HOST,
    port: +env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err: unknown) => {
      console.error("Unable to connect to the database:", err);
    });

  return sequelize;
};

export default connection();
