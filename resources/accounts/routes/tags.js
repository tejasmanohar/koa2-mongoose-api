
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function show (ctx, email) {
  const account = await Account.findOne({ email })
  if (!account) {
    ctx.status = 404
    return
  }
  ctx.body = { data: account }
}
