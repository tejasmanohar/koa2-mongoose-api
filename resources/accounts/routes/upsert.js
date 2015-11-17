
/**
 * module dependencies
 */

import Account from '../model'

/**
 * route definitions
 */

export default async function upsert (ctx) {
  ctx.body = { data: await Account.upsert(ctx.request.body) }
}
