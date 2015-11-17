
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function show (ctx, email) {
  const account = await Account.findOne({ email })
  if (!account) return ctx.status = 404
  ctx.body = { data: account }
}
