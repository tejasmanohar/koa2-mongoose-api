
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function findTagsByEmail (ctx, email) {
  const account = await Account.findOne({ email })
  if (!account) ctx.throw('Account not found', 404)
  ctx.body = { data: account.tags }
}
