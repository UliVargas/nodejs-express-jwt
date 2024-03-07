import { Sequelize } from 'sequelize'

const connection = (): Sequelize => {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'roundhouse.proxy.rlwy.net',
    port: 29265,
    username: 'postgres',
    password: 'A6C2Dg512G35D2C141ADef1d6Dg-*bgA',
    database: 'railway'
  })

  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch((err: any) => {
      console.error('Unable to connect to the database:', err)
    })

  return sequelize
}

export default connection()
