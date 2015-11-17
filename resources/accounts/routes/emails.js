
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function show (ctx, tag) {
  const accounts = await Account.find({ tags: tag })
  if (!account) {
    ctx.status = 404
    return
  }
  ctx.body = { data: accounts }
}
