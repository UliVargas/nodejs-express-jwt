import dotenv from 'dotenv'
dotenv.config()

export const env = {
  PORT: process.env.PORT ?? 3000,
  DB_USERNAME: process.env.DB_USERNAME ?? 'root',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  DB_PORT: process.env.DB_PORT ?? 5432,
  DB_NAME: process.env.DB_DATABASE ?? 'mydatabase',
  DB_HOST: process.env.DB_HOST ?? 'localhost',
  JWT_SECRET: process.env.JWT_SECRET ?? 'mysecretkey'
}
