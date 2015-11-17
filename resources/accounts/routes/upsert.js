
/**
 * dependencies
 */

import Account from '../model'

/**
 * definitions
 */

export default async function upsert (ctx) {
  const { created, data } = await Account.upsert(ctx.request.body)
  ctx.status = created ? 201 : 200
  ctx.body = { data }
}
