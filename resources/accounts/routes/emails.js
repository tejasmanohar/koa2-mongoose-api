
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function findEmailsByTag (ctx, tag) {
  const accounts = await Account.find({ tags: tag })
  ctx.body = { data: accounts.length ? accounts.map(o => o.email) : accounts }
}
