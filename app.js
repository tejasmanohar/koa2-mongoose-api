
/**
 * Module dependencies
 */

import Koa from 'koa'
import logger from 'koa-logger'
import convert from 'koa-convert'
import compose from 'koa-compose'
import bodyParser from 'koa-bodyparser'

// new app
const app = new Koa()

/**
 * Middleware
 */

// legacy middleware
app.use(compose([
  bodyParser(),
  logger()
].map(convert)))

/**
 * Server
 */

const port = process.env.PORT || 3000
app.listen(3000, console.log(`listening on port ${port}`))
