
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function show (ctx, tag) {
  ctx.body = { data: await Account.find({ tags: tag }) }
}
