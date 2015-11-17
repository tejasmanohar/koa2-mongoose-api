
/**
 * module dependencies
 */

import Koa from 'koa'
import logger from 'koa-logger'
import convert from 'koa-convert'
import compose from 'koa-compose'
import bodyParser from 'koa-bodyparser'

require('./config/database')
import routes from './config/routes'

// new app
const app = new Koa()

/**
 * middleware
 */

// legacy middleware
app.use(compose([
  bodyParser(),
  logger()
].map(convert)))

app.use(compose(routes))

/**
 * server
 */

const port = process.env.PORT || 3000
app.listen(3000, console.log(`listening on port ${port}`))
