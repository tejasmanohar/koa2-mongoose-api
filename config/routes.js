
/**
 * dependencies
 */

import _ from 'koa-route'

// routes
import * as accounts from '../resources/accounts/routes'

/**
 * router
 */

export default [
  /**
   * accounts
   */

  // upsert
  _.post('/accounts', accounts.upsert),

  // read
  _.get('/accounts/emails/:tag', accounts.findEmailsByTag),
  _.get('/accounts/tags/:email', accounts.findTagsByEmail)
]
