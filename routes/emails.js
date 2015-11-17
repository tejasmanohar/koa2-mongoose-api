
/**
 * module dependencies
 */

import Account from '../resources/account'

/**
 * route definitions
 */

export async function upsert (ctx) {
  ctx.body = { data: await Account.upsert(ctx.request.body) }
}

export async function show (ctx, tag) {
  ctx.body = { data: await Account.find({ tags: tag }) }
}
