
/**
 * module dependencies
 */

import Account from '../resources/account'

/**
 * route definitions
 */

export async function show (ctx, email) {
  ctx.body = { data: await Account.find({ email }) }
}
