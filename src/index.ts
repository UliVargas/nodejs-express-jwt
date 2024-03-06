import app from './app'
import dependencies from './config/dependencies'
import { env } from './config/env'

void dependencies()
  .then(async (containerDependencies) => {
    const application = await app(containerDependencies)
    application.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`)
    })
  })
