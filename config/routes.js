
/**
 * module dependencies
 */

import _ from 'koa-route'

// routes
import * as tags from '../routes/tags'
import * as emails from '../routes/emails'

/**
 * router
 */

export default [
  // upsert
  _.post('/emails', emails.upsert),

  // read
  _.get('/emails/:tag', emails.show),
  _.get('/tags/:email', tags.show)
]
