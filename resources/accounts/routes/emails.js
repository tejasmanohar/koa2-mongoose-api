
/**
 * module dependencies
 */

import Account from '../model'

/**
 * route definitions
 */

export default async function show (ctx, tag) {
  ctx.body = { data: await Account.find({ tags: tag }) }
}
