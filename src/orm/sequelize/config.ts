import { Sequelize } from 'sequelize'

const connection = (): Sequelize => {
  const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'mydatabase'
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
