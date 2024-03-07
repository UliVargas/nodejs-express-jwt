import sequelize from './config'
import './models'

const alterDatabase = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true })
    console.log('Alterations completed successfully')
  } catch (error) {
    console.error('Error occurred while performing alterations:', error)
  } finally {
    await sequelize.close()
  }
}

void alterDatabase()
