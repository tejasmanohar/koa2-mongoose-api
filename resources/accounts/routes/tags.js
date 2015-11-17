
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function show (ctx, email) {
  ctx.body = { data: await Account.find({ email }) }
}
