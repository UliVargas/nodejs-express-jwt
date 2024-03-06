import sequelize from './config'
import './models'

const alterDatabase = async (): Promise<void> => {
  try {
    await sequelize.sync({ alter: true })
    console.log('Alterations completed successfully')
  } catch (error) {
    console.error('Error occurred while performing alterations:', error)
  } finally {
    await sequelize.close()
  }
}

void alterDatabase()
