
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function show (ctx, tag) {
  const accounts = await Account.find({ tags: tag })
  if (!account) return ctx.status = 404
  ctx.body = { data: accounts }
}
